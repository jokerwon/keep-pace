# keep-pace

`keep-pace` 是一个文件同步工具。最初的使用场景是在*双版本控制系统*下开发时，简化互相同步文件的操作。使用 `keep-pace`， 你可以很轻松地将一个或多个文件(夹)复制到指定的路径，来合并/替换目标文件(夹)。

> 此处的双版本控制系统，指的是使用 `git` 做代码版本控制，使用 `SVN` 来协助开发运维和交付。

## 安装

~~~shell
npm install keep-pace
~~~

## 使用

`keep-pace` 目前只支持以 `cli` 工具来使用。
你可以在控制台输入以下命令来将 `source` 文件夹同步到 `dest`。

~~~shell
keep sync /tmp/source /usr/local/dest
~~~