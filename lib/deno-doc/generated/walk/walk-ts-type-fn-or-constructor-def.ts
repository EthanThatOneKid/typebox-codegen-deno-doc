// Notice: Do NOT edit this generated file.
import type { TsTypeFnOrConstructorDef } from "@deno/doc/types";
import { walkTsFnOrConstructorDef } from "./walk-ts-fn-or-constructor-def.ts";

export function* walkTsTypeFnOrConstructorDef(
  node: TsTypeFnOrConstructorDef,
): Generator<unknown, void, unknown> {
  yield node.fnOrConstructor;
  yield* walkTsFnOrConstructorDef(node.fnOrConstructor);
}
