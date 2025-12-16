import rehypeCitation from "rehype-citation"
import { PluggableList } from "unified"
import { visit } from "unist-util-visit"
import { QuartzTransformerPlugin } from "../types"

export interface Options {
  bibliographyFile: string[]
  suppressBibliography: boolean
  linkCitations: boolean
  csl: string
}

const defaultOptions: Options = {
  bibliographyFile: ["./bib/Math.bib", "./bib/Physics.bib", "./bib/CS.bib"],
  suppressBibliography: false,
  linkCitations: false,
  csl: "vancouver",
}

export const Citations: QuartzTransformerPlugin<Partial<Options>> = (userOpts) => {
  const opts = { ...defaultOptions, ...userOpts }
  return {
    name: "Citations",
    htmlPlugins() {
      const plugins: PluggableList = []

      // Add rehype-citation to the list of plugins
      plugins.push([
        rehypeCitation,
        {
          bibliography: opts.bibliographyFile,
          suppressBibliography: opts.suppressBibliography,
          linkCitations: opts.linkCitations,
          // csl: "https://raw.githubusercontent.com/citation-style-language/styles/master/ieee.csl",
          showTooltips: true,
          tooltipAttribute: "data-tooltip"
        },
      ])

      // Transform the HTML of the citattions; add data-no-popover property to the citation links
      // using https://github.com/syntax-tree/unist-util-visit as they're just anochor links
      plugins.push(() => {
        return (tree, _file) => {
          visit(tree, "element", (node, _index, _parent) => {
            if (node.tagName === "a" && node.properties?.href?.startsWith("#bib")) {
              node.properties["data-no-popover"] = true
            }
            if (node.tagName === "div" && node.properties.id === "refs") {
              node.children.splice(0, 0, {
                type: "element",
                tagName: "hr",
                children: []
              },{
                type: "element",
                tagName: "h1",
                children: [{
                  type: "text", value: "References"
                }]
              })
            }
          })
        }
      })

      return plugins
    },
  }
}
