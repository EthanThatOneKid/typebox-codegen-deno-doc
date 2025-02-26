// Notice: Do NOT edit this generated file.
import type { NamespaceDef } from "@deno/doc/types";
import { walkDocNode } from "./walk-doc-node.ts";

export function* walkNamespaceDef(
  node: NamespaceDef,
): Generator<unknown, void, unknown> {
  for (const value of node.elements) {
    yield value;
    yield* walkDocNode(value);
  }
}
