# Contributing

- [Development](#development)
  - [Getting Started](#getting-started)
- [Release](#release)
- [IDE](#ide)
  - [Visual Studio Code](#visual-studio-code)

## Development

### Getting Started

```sh
yarn
```

## Release

```sh
npm version major|minor|patch
```

## IDE

### Visual Studio Code

Recommended settings (`.vscode/settings.json`):

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "eslint.codeActionsOnSave.mode": "all",
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```
