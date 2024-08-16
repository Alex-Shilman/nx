# Nx Custom Generator
Learn how to create a custom generator with Nx for enhancing your project setup. This guide covers generating a plugin, adopting a custom configuration, and executing the generator to streamline development processes.

This document guides you through creating a custom Nx generator to add Stylelint configuration to your project, ensuring consistent style conventions.


## Generating a Generator

Run `nx generate @nx/plugin:generator add-stylelint --project=stylelint`


## Custom Configuration

Replace the default files folder with a specific `.stylelintrc.json` configuration, extending "stylelint-config-standard-scss" to enforce SCSS best practices.

_.stylelintrc.json_
```json
{
  "extends": "stylelint-config-standard-scss"
}
```

