import sourceMapSupport from "source-map-support"
sourceMapSupport.install(options)
import cfg from "../quartz.config"
import { Argv, BuildCtx, Mapping} from "./util/ctx"
import { FilePath, FullSlug } from "./util/path"
import { createFileParser, createProcessor } from "./processors/parse"
import { options } from "./util/sourcemap"

// only called from worker thread
export async function parseFiles(
  buildId: string,
  argv: Argv,
  fps: FilePath[],
  allSlugs: FullSlug[],
  mapping: Mapping
) {
  const ctx: BuildCtx = {
    buildId,
    cfg,
    argv,
    allSlugs,
    mapping
  }
  const processor = createProcessor(ctx)
  const parse = createFileParser(ctx, fps)
  return parse(processor)
}
