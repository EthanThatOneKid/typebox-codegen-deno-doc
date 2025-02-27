// Notice: Do NOT edit this generated file.
import type { TsTypeRefDef } from "@deno/doc/types";
import { walkTsTypeDef } from "./walk-ts-type-def.ts";

export function* walkTsTypeRefDef(
  node: TsTypeRefDef,
): Generator<unknown, void, unknown> {
  for (const value of node.typeParams ?? []) {
    yield value;
    yield* walkTsTypeDef(value);
  }
}
