// Notice: Do NOT edit this generated file.
import type { ObjectPatPropKeyValueDef } from "@deno/doc/types";
import { walkParamDef } from "./walk-param-def.ts";

export function* walkObjectPatPropKeyValueDef(
  node: ObjectPatPropKeyValueDef,
): Generator<unknown, void, unknown> {
  yield node.value;
  yield* walkParamDef(node.value);
}
