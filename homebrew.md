# Homebrew入门介绍

Homebrew到底是什么个东西？

linux系统有个让人头疼的通病，那就是软件包依赖，好在当前主流的两大发行版本都自带了解决方案，CentOS、Red hat有yum，Ubuntu有apt-get。那么我们用Mac OSx系统怎么办？别担心，这一切Homebrew可以帮你搞定。

Homebrew是一款Mac OS平台下的软件包管理工具，拥有安装、卸载、更新、查看、搜索等很多实用的功能。简单的一条指令，就可以实现包管理，而不用你关心各种依赖和文件路径的情况，十分方便快捷。

```
Homebrew简称brew，是Mac OSX上的软件包管理工具，能在Mac中方便的安装软件或者卸载软件，可以说Homebrew就是mac下的apt-get、yum神器
```
## Homebrew安装
Homebrew的安装非常简单:

第一步：打开终端复制、粘贴以下命令，

ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
第二步：回车，就等待终端执行完毕，一切就搞定了，Homebrew就装好了。

二、简单使用
安装任意包
$ brew install <packageName>

示例：安装 wget
$ brew install wget

卸载任意包
$ brew uninstall <packageName>

示例：卸载Git
$ brew uninstall git

查询可用包
$ brew search <packageName>

查看已安装包列表
$ brew list

查看任意包信息
$ brew info <packageName>

更新Homebrew
$ brew update

查看Homebrew版本
$ brew -v

Homebrew帮助信息
$ brew -h

对于Homebrew基本这些就够了，如果想深入研究，请到Homebrew官网进行学习。
官网地址：http://brew.sh/index_zh-cn.html