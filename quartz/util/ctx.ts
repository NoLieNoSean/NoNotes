import { QuartzConfig } from "../cfg"
import { FullSlug } from "./path"

export type Mapping = Record<string, [number | string, number]>;

export interface Argv {
  directory: string
  verbose: boolean
  output: string
  serve: boolean
  fastRebuild: boolean
  port: number
  wsPort: number
  remoteDevHost?: string
  concurrency?: number
}

export interface BuildCtx {
  buildId: string
  argv: Argv
  cfg: QuartzConfig
  allSlugs: FullSlug[]
  mapping: Mapping
}
