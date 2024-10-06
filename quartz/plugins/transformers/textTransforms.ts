import { QuartzTransformerPlugin } from "../types"
import { visit } from "unist-util-visit"
import { findAndReplace } from "mdast-util-find-and-replace"
import { Node } from "unist"

export const TextTransforms: QuartzTransformerPlugin = () => {
  return {
    name: "TextTransforms",
    textTransform(_ctx, src) {
      if (src instanceof Buffer) {
        src = src.toString()
      }
      src = src
        .replace(/\\begin{align}/g, "\\begin{align*}")
        .replace(/\\end{align}/g, "\\end{align*}")
        .replace(/!!@!@!@!!!@!@!@@!@!@!@@/, "Last redeployed on: "+ Date())
      return src
    }
  }
}
