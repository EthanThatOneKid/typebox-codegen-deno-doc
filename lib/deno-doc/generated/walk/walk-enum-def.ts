// Notice: Do NOT edit this generated file.
import type { EnumDef } from "@deno/doc/types";
import { walkEnumMemberDef } from "./walk-enum-member-def.ts";

export function* walkEnumDef(node: EnumDef): Generator<unknown, void, unknown> {
  for (const value of node.members) {
    yield value;
    yield* walkEnumMemberDef(value);
  }
}
