# Nx Cristal Plugin

Learn how to create a cristal plugin with Nx.

This document guides you through creating a custom Nx cristal plugin to run Stylelint configuration in your project, ensuring consistent style conventions.

## 1. Create Nodes

1. open `stylelint/index.ts` and add the following code:

```ts
import { CreateNodes, CreateNodesContext } from 'nx/src/utils/nx-plugin';
import { dirname } from 'path';

export const createNodes: CreateNodes = [
  '**/project.json',
  (projectConfigurationFile: string, opts, context: CreateNodesContext) => {
    const root = dirname(projectConfigurationFile);

    return {
      projects: {
        [root]: {
          targets: {
            stylelint: {
              executor: 'stylelint:stylelint',
            },
          },
        },
      },
    };
  },
];
```

## 2. Remove existing targets

If there is already a `stylelint` target configured remove it. The plugin should provide it automatically.

## 3. Register the plugin

1. Enable cristal plugins by opening `.env` and set `NX_ADD_PLUGINS` to `true`.
2. Add the plugin to `nx.json`:

```json
{
  ...
  "plugins": [
    "stylelint"
  ]
}
```

## 4. Execution

Execute your executor to run stylelint in your codebase.

1. If not already done build your plugin by running `nx stylelint:build`.
2. Run `nx show project <project-name>` to list the generated config.
3. Run `nx <project-name>:stylelint` to execute stylelint.
