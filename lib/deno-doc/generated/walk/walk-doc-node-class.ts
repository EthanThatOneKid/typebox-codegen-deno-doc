// Notice: Do NOT edit this generated file.
import type { DocNodeClass } from "@deno/doc/types";
import { walkClassDef } from "./walk-class-def.ts";

export function* walkDocNodeClass(
  node: DocNodeClass,
): Generator<unknown, void, unknown> {
  yield node.classDef;
  yield* walkClassDef(node.classDef);
}
