---
date: 2022-05-15
---

## 硬链接

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
mklink /J E:\GitHub\jiange1236.GitHub.io\notes\work E:\我的坚果云\工作
mklink /J E:\GitHub\jiange1236.GitHub.io\notes\finance E:\我的坚果云\理财
mklink /J E:\GitHub\jiange1236.GitHub.io\notes\fun E:\我的坚果云\娱乐
mklink /J E:\GitHub\jiange1236.GitHub.io\notes\photo E:\我的坚果云\摄影
mklink /J E:\GitHub\jiange1236.GitHub.io\notes\study E:\我的坚果云\学习
mklink /J E:\GitHub\jiange1236.GitHub.io\notes\tech E:\我的坚果云\计算机
mklink /J E:\GitHub\jiange1236.GitHub.io\notes\others E:\我的坚果云\其它
```

## NodeJS
### 镜像源

**npm**
```
## 查询当前使用的镜像源
npm get registry
 
## 设置为淘宝镜像源
npm config set registry https://registry.npmmirror.com/
 
## 还原为官方镜像源
npm config set registry https://registry.npmjs.org/
```
**yarn**
```
## 查询当前使用的镜像源
yarn config get registry
 
## 设置为淘宝镜像源
yarn config set registry https://registry.npmmirror.com/
 
## 还原为官方镜像源
yarn config set registry https://registry.yarnpkg.com/
```
**pnpm**
```
## 查询当前使用的镜像源
pnpm get registry
 
## 设置为淘宝镜像源
pnpm config set registry https://registry.npmmirror.com/
 
## 还原为官方镜像源
pnpm config set registry https://registry.npmjs.org/
```

### PNPM

> 点击左下角开始，找到Windows PowerShell，点击右键找到更多，找到以管理员身份运行

> 输入命令：set-ExecutionPolicy RemoteSigned 然后回车
> 选择：输入A选择全是，或者输入Y选择是 都可以的
> 接着重新启动然后去运行就可以了

```
npm install pnpm -g
pnpm install
pnpm i --frozen-lockfile

#列出所有过期依赖
pnpm outdated
#更新依赖
pnpm update --latest

```

**自动安装peer依赖**：如果出现peer依赖问题，可以通过设置`pnpm config set auto-install-peers true`来自动安装缺失的peer依赖

**清理存储**：如果使用pnpm，可以通过执行`pnpm store prune`来清理存储，移除过时的包

## Git

### 清除Github提交历史记录

1.将Repository使用git clone到本地，在终端使用"git log"查看提交记录。Github会为每一次commit操作生成哈希值，用这个哈希值来记录你的提交记录。

2.定位你误操作的那一个版本，我上传包涵敏感信息的操作是"0f6f7b72667830e407880271e6ebc24abba232c5"。我们取它之前的版本，就是哈希值为"8628628991470b26e698d98e986a54fa6b5f4352"的那一版本。

3.使用"git reset —hard 8628628991470b26e698d98e986a54fa6b5f4352"操作，将历史记录重置到这个版本。

4.使用"git push origin HEAD —force"，PUSH到github。

### 代理

**只对Github代理（推荐）**

```bash
#使用socks5代理（推荐）
git config --global http.https://github.com.proxy socks5://127.0.0.1:20170
#使用http代理（不推荐）
git config --global http.https://github.com.proxy http://127.0.0.1:20170
```