import babel, { PluginObj } from '@babel/core';

// also not needed in this example `t` is something you'll need in many plugins
// see https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md#writing-your-first-babel-plugin
export default function({ types: t }: typeof babel): PluginObj {
  return {
    visitor: {
      Identifier(path) {
        if (path.node.name === 'foo') {
          path.node.name = 'bar';
        }
      }
    }
  };
}
