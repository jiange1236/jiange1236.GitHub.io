# 硬链接

**Linux**

```
mount --bind /data/home/zhou/'Nutstore Files'/我的坚果云/工作 /home/zhou/Documents/Blog/jiange1236.GitHub.io/notes/work
```

<!-- vi /etc/fstab -->

```
/data/home/zhou/Nutstore\040Files/我的坚果云/工作 /home/zhou/Documents/Blog/jiange1236.GitHub.io/notes/work none defaults,bind 0 0
```

**Windows**

```
mklink /J F:\Blog\jiange1236.GitHub.io\notes\work F:\我的坚果云\工作
```

# PNPM

> 点击左下角开始，找到Windows PowerShell，点击右键找到更多，找到以管理员身份运行

> 输入命令：set-ExecutionPolicy RemoteSigned 然后回车
> 选择：输入A选择全是，或者输入Y选择是 都可以的
> 接着重新启动然后去运行就可以了

# Git

## 清除Github提交历史记录

1.将Repository使用git clone到本地，在终端使用"git log"查看提交记录。Github会为每一次commit操作生成哈希值，用这个哈希值来记录你的提交记录。

2.定位你误操作的那一个版本，我上传包涵敏感信息的操作是"0f6f7b72667830e407880271e6ebc24abba232c5"。我们取它之前的版本，就是哈希值为"8628628991470b26e698d98e986a54fa6b5f4352"的那一版本。

3.使用"git reset —hard 8628628991470b26e698d98e986a54fa6b5f4352"操作，将历史记录重置到这个版本。

4.使用"git push origin HEAD —force"，PUSH到github。

## 代理

**只对Github代理（推荐）**

```bash
#使用socks5代理（推荐）
git config --global http.https://github.com.proxy socks5://127.0.0.1:20170
#使用http代理（不推荐）
git config --global http.https://github.com.proxy http://127.0.0.1:20170
```