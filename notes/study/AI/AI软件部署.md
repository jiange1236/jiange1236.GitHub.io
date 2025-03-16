## Ollama

### [自定义Ollama安装路径](https://www.cnblogs.com/LaiYun/p/18696931 "发布于 2025-02-02 17:33")

　　由于Ollama的exe安装软件双击安装的时候默认是在C盘，以及后续的模型数据下载也在C盘，导致会占用C盘空间，所以这里单独写了一个自定义安装Ollama安装目录的教程。

　　Ollama官网地址：https://ollama.com

- **手动创建Ollama安装目录**　　

　　首先在你想安装的路径下**创建好一个新文件夹，并把Ollama的安装包放在里面**。比如我的是：D:\Ollama

 　　在文件路径上输入CMD回车后会自动打开命令窗口
 　　
- **输入命令符安装** 　　

　　然后在CMD窗口输入：`OllamaSetup.exe /DIR=D:\Ollama`

　　**语法：软件名称 /DIR=这里放你上面创建好的Ollama指定目录**

　　然后Ollama就会进入安装，点击Install后，可以看到Ollama的安装路径就变成了我们指定的目录了，这样大模型数据包也会默认下载在指定目录中。
　　**到这里Ollama自定义目录安装就完结了。**

　　最后再讲个特例，就是有些小伙伴的Ollama已经安装在C盘了，但是又不想重新安装Ollama，只想把大模型资源包不要默认下载到C盘。

- **手动创建大模型存储目录**

　　首先先在你想要存储的盘符下创建好存储目录，比如我想存到E盘下面，我这里就创建了该目录：E:\MySoftware\Ollama
　　
- **增加环境变量**

　　然后鼠标右键我的电脑-->属性-->高级系统设置-->环境变量

 　　新建一个环境变量

　　**OLLAMA_MODELS** ：`D:\Ollama\models` 
　　
- **复制转移大模型存储目录**

　　创建完环境变量后，把Ollama停止，然后进入C盘-->用户-->你自己的电脑名称-->.ollama-->复制整个models到刚刚上面新建的存储目录下。**复制完成后要删除C盘目录下的models文件夹。**
　　
　　复制到新创建的目录下

　　**重启电脑**，打开CMD输入**Ollama list**，查看大模型资源包是否能正常显示，显示正常则迁移完成，也可以直接和大模型进行提问，能回复说明也正常。

### 下载模型

```
ollama run modelscope.cn/unsloth/DeepSeek-R1-Distill-Qwen-7B-GGUF
```

## Cherry Studio

```
mklink /J "C:\Users\JKYDesk\AppData\Roaming\CherryStudio" "D:\AppData\CherryStudio"
```