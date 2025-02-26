// Notice: Do NOT edit this generated file.
import type { TsTypeOptionalDef } from "@deno/doc/types";
import { walkTsTypeDef } from "./walk-ts-type-def.ts";

export function* walkTsTypeOptionalDef(
  node: TsTypeOptionalDef,
): Generator<unknown, void, unknown> {
  yield node.optional;
  yield* walkTsTypeDef(node.optional);
}
