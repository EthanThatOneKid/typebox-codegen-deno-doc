// Notice: Do NOT edit this generated file.
import type { TsInferDef } from "@deno/doc/types";
import { walkTsTypeParamDef } from "./walk-ts-type-param-def.ts";

export function* walkTsInferDef(
  node: TsInferDef,
): Generator<unknown, void, unknown> {
  yield node.typeParam;
  yield* walkTsTypeParamDef(node.typeParam);
}
