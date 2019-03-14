# sn-art-template

[![NPM Version](https://img.shields.io/npm/v/art-template.svg)](https://npmjs.org/package/art-template)
[![NPM Downloads](http://img.shields.io/npm/dm/art-template.svg)](https://npmjs.org/package/art-template)
[![Node.js Version](https://img.shields.io/node/v/art-template.svg)](http://nodejs.org/download/)
[![Travis-ci](https://travis-ci.org/aui/art-template.svg?branch=master)](https://travis-ci.org/aui/art-template)
[![Coverage Status](https://coveralls.io/repos/github/aui/art-template/badge.svg?branch=master)](https://coveralls.io/github/aui/art-template?branch=master)

[English document](https://aui.github.io/art-template/) | [中文文档](https://aui.github.io/art-template/zh-cn/index.html)


art-template 是一个简约、超快的模板引擎。它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。[在线速度测试](https://aui.github.io/art-template/rendering-test/)。

[![chart](https://aui.github.io/art-template/images/chart@2x.png)](https://aui.github.io/art-template/rendering-test/)

## 特性

1. 拥有接近 JavaScript 渲染极限的的性能
2. 调试友好：语法、运行时错误日志精确到模板所在行；支持在模板文件上打断点（Webpack Loader）
5. 支持 Express、Koa、Webpack
6. 支持模板继承与子模板
7. 浏览器版本仅 6KB 大小

### 修改
#### 1.0.6
1、添加简单容错

#### 1.0.4
1. 去掉注释
2. 提交未提交问题
#### 1.0.2
1. {{include '../components/art/hot_news' pageoption}} 
pageoption = {ispage:true}
通过传入 表示， 来判断是否解析include 引入的模板，如果传入，则include模板不解析，整体作为string被返回
#### 1.0.1
1. 添加hbs 的helper 处理，现在可以在options中 ，通过hbsHelper 的方式传入helper

#### 1.0.0
1. 添加handlebars 依赖
2. 可以通过过在页面中 include hbs文件， 来引入handlebars 模板
-----------------
