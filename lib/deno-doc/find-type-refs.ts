import { DocNode, TsTypeTypeRefDef } from "@deno/doc";
import { walkDocNode } from "#/lib/deno-doc/generated/walk/walk-doc-node.ts";

export function* walkTypeRefs(docNode: DocNode): Iterable<string> {
  const seen = new Set<string>();
  for (const childNode of walkDocNode(docNode) as Iterable<TsTypeTypeRefDef>) {
    if (childNode.kind !== "typeRef" || seen.has(childNode.typeRef.typeName)) {
      continue;
    }

    seen.add(childNode.typeRef.typeName);
    yield childNode.typeRef.typeName;
  }
}
