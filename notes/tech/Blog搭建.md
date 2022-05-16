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

# Git

## 清除Github提交历史记录

1.将Repository使用git clone到本地，在终端使用"git log"查看提交记录。Github会为每一次commit操作生成哈希值，用这个哈希值来记录你的提交记录。

2.定位你误操作的那一个版本，我上传包涵敏感信息的操作是"0f6f7b72667830e407880271e6ebc24abba232c5"。我们取它之前的版本，就是哈希值为"8628628991470b26e698d98e986a54fa6b5f4352"的那一版本。

3.使用"git reset —hard 8628628991470b26e698d98e986a54fa6b5f4352"操作，将历史记录重置到这个版本。

4.使用"git push origin HEAD —force"，PUSH到github。