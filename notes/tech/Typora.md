第一步： 下载最新版本的Typora安装

第二部： 安装完后，进入typora的安装目录下的 \resources\page-dist\static\js 目录，找到 LicenseIndex开头的文件，我这里文件名如下：

Lisenselndex.180dd4c7.b98d5f1f.chunk.js

第三部：用文本编辑器打开该文件，搜索hasActivated="true"==e.hasActivated并将其替换为hasActivated="true"=="true"
（修改前，可将该文件备份一下，万一操作失误，可以进行恢复）