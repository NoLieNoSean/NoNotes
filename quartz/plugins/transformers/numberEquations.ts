import { QuartzTransformerPlugin } from "../types"
import { PluggableList } from "unified"
import rehypeRaw from "rehype-raw"
import { SKIP, visit } from "unist-util-visit"




export const NumberEquaitons: QuartzTransformerPlugin = () => {
    return {
        name: "NumberEquations",
        htmlPlugins() {
            const plugins: PluggableList = [rehypeRaw]

            plugins.push(() => {
                return (tree: HtmlRoot, _file) => {
                    // console.log("NumberEquations")
                    const EquationDict = new Map();
                    let counter = 0
                    visit(tree, "element", (node, index, parent) => {
                        if (
                            node.tagName === "span"
                            && node.properties.id
                            && node.properties.className.includes("numbered-equation-locator")
                        ) {
                            counter++
                            // console.log(node)
                            let equation = parent.children[index - 1]
                            equation.properties.id = node.properties.id
                            equation.properties.eqNumber = counter
                            EquationDict.set(node.properties.id, equation)

                            let eqNum = {
                                type: "element",
                                tagName: "span",
                                properties: { className: ['equation-number'] },
                                children: [
                                    { type: "text", value: "E" + counter }
                                ]
                            };

                            let wrapper = {
                                type: "element",
                                tagName: "div",
                                properties: { className: ['equation-wrapper'] },
                                children: [
                                    equation,
                                    eqNum
                                ]
                            };

                            // Replace equation in the parent's children
                            parent.children[index - 1] = wrapper;
                        }
                    })


                    visit(tree, "element", (link) => {
                        if (link.tagName === "a" &&
                            link.properties.href.slice(0, 4) === "#%5E") {

                            let equation = EquationDict.get(link.properties.href.slice(4))

                            // console.log(equation)
                            if (equation) {
                                // console.log(link)
                                if (link.children[0].value[0] === "^") {
                                    link.children[0].value = "(E" + equation.properties.eqNumber + ")"
                                }
                                link.properties.href = `#${link.properties.href.slice(4)}`
                            }
                        }
                    })
                }
            })
            return plugins
        }
    }
}
