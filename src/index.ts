import { PluginObj } from '@babel/core';

export default function(): PluginObj {
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
