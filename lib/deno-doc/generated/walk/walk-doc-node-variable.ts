// Notice: Do NOT edit this generated file.
import type { DocNodeVariable } from "@deno/doc/types";
import { walkVariableDef } from "./walk-variable-def.ts";

export function* walkDocNodeVariable(
  node: DocNodeVariable,
): Generator<unknown, void, unknown> {
  yield node.variableDef;
  yield* walkVariableDef(node.variableDef);
}
