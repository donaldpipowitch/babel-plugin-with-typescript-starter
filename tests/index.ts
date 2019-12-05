import { transform } from '@babel/core';
import plugin from '../src';

function run(source: string) {
  const { code } = transform(source, {
    filename: 'test.ts',
    plugins: [plugin]
  })!;
  return code;
}

test('works', () => {
  const source = `
var foo = 1;
if (foo) console.log(foo);
`;

  expect(run(source)).toMatchInlineSnapshot(`
    "\\"use strict\\";

    var bar = 1;
    if (bar) console.log(bar);"
  `);
});
