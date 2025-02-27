// Notice: Do NOT edit this generated file.
import type { TsTypeDefLiteral } from "@deno/doc/types";
import { walkLiteralDef } from "./walk-literal-def.ts";

export function* walkTsTypeDefLiteral(
  node: TsTypeDefLiteral,
): Generator<unknown, void, unknown> {
  yield node.literal;
  yield* walkLiteralDef(node.literal);
}
