// Notice: Do NOT edit this generated file.
import type { ObjectPatPropRestDef } from "@deno/doc/types";
import { walkParamDef } from "./walk-param-def.ts";

export function* walkObjectPatPropRestDef(
  node: ObjectPatPropRestDef,
): Generator<unknown, void, unknown> {
  yield node.arg;
  yield* walkParamDef(node.arg);
}
