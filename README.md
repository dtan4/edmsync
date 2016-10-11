# Edmsync

## Development

This project is based on [apex](http://apex.run/).

### Deploy

Fill `role` in `project.json` with your Lambda execution role.

```bash
$ cp project.json.sample project.json
$ $EDITOR project.json
$ apex deploy
```

### Syntax check

```bash
$ npm install
$ npm run lint
```

## License

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
