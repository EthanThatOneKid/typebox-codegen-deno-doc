// Notice: Do NOT edit this generated file.
import type { TsTypeIndexedAccessDef } from "@deno/doc/types";
import { walkTsIndexedAccessDef } from "./walk-ts-indexed-access-def.ts";

export function* walkTsTypeIndexedAccessDef(
  node: TsTypeIndexedAccessDef,
): Generator<unknown, void, unknown> {
  yield node.indexedAccess;
  yield* walkTsIndexedAccessDef(node.indexedAccess);
}
