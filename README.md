# keep-pace (*WIP)

`keep-pace` is a file synchronization tool. The original use scenario was to simplify synchronizing files with each other when developing under *dual version control*. With keep-pace, you can easily copy one or more files(directories) to a specified path to merge/replace the target files or directories.

> The dual version control system here refers to the use of `git` for code version control and `SVN` for development, operation and delivery assistance.

## Installation

~~~shell
npm install -g keep-pace
~~~

## Usage

### sync

~~~shell
keep sync /tmp/source /usr/local/dest
~~~

### watch

start a progress to watch the source directory, and the changed files or directories will be synchronized to destination automatically on real time.

`keep watch <SOURCE_DIRECTORY> <DESTINATION>`

~~~shell
keep watch /tmp/source /usr/local/dest
~~~

## Feature

- [x] Support both directory and file
- [x] Support overwriting
- [x] Support filter
- [x] Support realtime synchronization

## Todo List

- [ ] TypeScript Supporting
- [ ] Windows Supporting
- [ ] Support filtering by glob
- [ ] Support customized config
