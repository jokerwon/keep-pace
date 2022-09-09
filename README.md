# keep-pace

`keep-pace` is a file synchronization tool. The original use scenario was to simplify synchronizing files with each other when developing under *dual version control*. With keep-pace, you can easily copy one or more files(directories) to a specified path to merge/replace the target files or directories.

> The dual version control system here refers to the use of `git` for code version control and `SVN` for development, operation and delivery assistance.

## Installation

~~~shell
npm install keep-pace
~~~

## Usage

~~~shell
keep sync /tmp/source /usr/local/dest
~~~

## Feature

- [x] 支持文件(夹)
- [x] 支持覆盖
- [x] 支持过滤

## Todo List

- [ ] 使用 ts 重写
- [ ] 支持 Windows
- [ ] 支持 glob 过滤
- [ ] 支持配置文件
- [ ] 支持文件监听，实时同步
- [ ] 覆盖规则细化方案
- [ ] 回退？
