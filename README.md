# Typescript + nodejs 12 template for OpenFaaS

This template is based on the official `node12` template from OpenFaaS. It allows you to write your function in Typescript, that will be compiled to javascript during the build process.

## Usage

```shell
faas-cli template pull https://github.com/szollarp/openfaas-template-node12-typescript
faas-cli new function-name --lang node12-typescript
```
