# vin-tools
[![Build Status](https://travis-ci.org/VinVC/vin-tools.svg?branch=master)](https://travis-ci.org/VinVC/vin-tools)
[![codecov](https://codecov.io/gh/VinVC/vin-tools/branch/master/graph/badge.svg)](https://codecov.io/gh/VinVC/vin-tools)
[![NPM](https://img.shields.io/npm/v/vin-tools)](https://npmjs.org/package/vin-tools)

vin's tools such as translating arabic number to chinese number, etc. 

In update...

## Install

```
yarn add vin-tools 
```
or
```
 npm i vin-tools
```

## Example

```
import { araToCnNum } from 'vin-tools'

araToCnNum(19) //'十九'
```

## All Tools

| Function | Input | Description
|:-:|:-:|:-:|
| araToCnNum | number | 将阿拉伯数字转换为中文数字 |
