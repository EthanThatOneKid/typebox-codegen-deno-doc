// Notice: Do NOT edit this generated file.
import type { DocNodeFunction } from "@deno/doc/types";
import { walkFunctionDef } from "./walk-function-def.ts";

export function* walkDocNodeFunction(
  node: DocNodeFunction,
): Generator<unknown, void, unknown> {
  yield node.functionDef;
  yield* walkFunctionDef(node.functionDef);
}
