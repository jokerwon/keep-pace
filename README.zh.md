# keep-pace (*WIP)

`keep-pace` 是一个文件同步工具。最初的使用场景是在*双版本控制系统*下开发时，简化互相同步文件的操作。使用 `keep-pace`， 你可以很轻松地将一个或多个文件(夹)复制到指定的路径，来合并/替换目标文件(夹)。

> 此处的双版本控制系统，指的是使用 `git` 做代码版本控制，使用 `SVN` 来协助开发运维和交付。

## 安装

~~~shell
npm install keep-pace
~~~

## 使用

`keep-pace` 目前只支持以 `cli` 工具来使用。
你可以在控制台输入以下命令来将 `source` 文件夹同步到 `dest`。

### sync

`keep watch <TARGET_DIRECTORY> <DESTINATION>`

~~~shell
keep sync /tmp/source /usr/local/dest
~~~

### watch

开启一个进程来监听目标文件, 被改动的文件(夹)会自动地实时同步到指定的位置。

`keep watch <TARGET_DIRECTORY> <DESTINATION>`

~~~shell
keep watch /tmp/source /usr/local/dest
~~~

## 完成

- [x] 支持文件(夹)
- [x] 支持覆盖
- [x] 支持过滤
- [x] 支持文件监听，实时同步

## 规划

- [ ] 使用 TypeScript 重写
- [ ] 支持 Windows
- [ ] 支持 glob 过滤
- [ ] 支持配置文件
