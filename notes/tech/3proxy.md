# 3proxy.cfg

```
#代理如果需要服务器解析，那么使用该dns解析并代理，我看官方的解释，默认是使用第一个的，如果第一个挂了才会使用第二个。如果不配置dns，则会使用服务器配置的dns地址，所以这里不是必须的，你可以注释掉
#nserver 8.8.4.4
#nserver 8.8.8.8
#域名解析最大的缓存条目 默认即可，也可以注释掉
#nscache 65536

#各项连接选项的超时时间
timeouts 1 5 30 60 180 1800 10 60     
#timeouts <BYTE_SHORT> <BYTE_LONG> <STRING_SHORT> <STRING_LONG> <CONNECTION_SHORT> <CONNECTION_LONG> <DNS> <CHAIN>  


#windows 用service ,  linux 用 deamon，这一项是必须的
service


#日志路径 参数D 是每天记录单独的日志文件  
#log c:/service/3proxy/logs/3proxy.log D
#日志内容格式
#logformat "L%d %H:%M %N-%p %C:%c %R:%r %O %I %h %T err:%E"
#保存最新的10个日志文件
#rotate 10


# 代理认证的用户名和密码，这里定义了两个用户，zdw的密码是777，user的密码是pass，CL代表明文密码，多条之间空格分隔
#users zdw:CL:777 user:CL:pass
# CL：代表明文密码
# CR：密码使用密文加密
# NT：密文加密


#代理认证类型
auth none
# none：不需要认证（默认类型）
# iponly：根据源IP地址进行ACL控制
# username：只验证用户名，用于Socks4代理
# nbname：认证基于NetBIOS （Windows系统）
# strong：基于弹窗用户名/密码认证，支持HTTP/POP3/FTP/SOCKSv5的代理类型
# cache：认证缓存，依赖authcache选项
#####  auth strong / auth iponly atrong  可以同时开启多项认证方式


#allow选项，允许这两个用户通过认证，用英文的逗号分隔
allow *

# allow <userlist> <sourcelist> <targetlist> <targetportlist> operationlist> <weekdayslist> <timeperiodslist>  allow选项的参数，选项支持 *匹配
# deny <userlist> <sourcelist> <targetlist> <targetportlist> <operationlist> <weekdayslist> <timeperiodslist>    deny选项的参数，选项支持 *匹配
#Operation is one of:  代理连接方式支持以下方式
#        CONNECT - establish outgoing TCP connection
#        BIND - bind TCP port for listening
#        UDPASSOC - make UDP association
#        ICMPASSOC - make ICMP association (for future use)
#        HTTP_GET - HTTP GET request
#        HTTP_PUT - HTTP PUT request
#        HTTP_POST - HTTP POST request
#        HTTP_HEAD - HTTP HEAD request
#        HTTP_CONNECT - HTTP CONNECT request
#        HTTP_OTHER - over HTTP request
#        HTTP - matches any HTTP request except HTTP_CONNECT
#        HTTPS - same as HTTP_CONNECT
#        FTP_GET - FTP get request
#        FTP_PUT - FTP put request
#        FTP_LIST - FTP list request
#        FTP_DATA - FTP data connection. Note: FTP_DATA requires access to dynamic
#        non-ptivileged (1024-65535) ports on remote side.
#        FTP - matches any FTP/FTP Data request
#        ADMIN - access to administration interface


#开启一个HTTP代理 端口是20001  -n：关闭windows NTML验证（使用上面定义的账号密码认证）
proxy -n -p20001
#开启一个socks代理 端口是20002
#socks -n -p20002

#某一项代理方式可以设置无需记录日志
nolog

#速度限制段
#首先，不限制zdw的速度
#nobandlimin zdw
#然后，其他用户整体限制到5m
#bandlimin 5120000 *

#bandlimin <rate> <userlist> <sourcelist> <targetlist> <targetportlist> <operationlist>   入相带宽限制
#bandlimout  <rate>  <userlist> <sourcelist> <targetlist> <targetportlist> <operationlist>  出向带宽限制
#nobandlimin   <userlist>  <sourcelist>  <targetlist>  <targetportlist>  <operationlist>  入带宽不限制
#nobandlimout <userlist> <sourcelist> <targetlist> <targetportlist> <operationlist>  出带宽不限制


#用来划分各代理区域的配置参数，比如你可以在配置文件中配置两个代理 一个HTTP代理 一个Socks5代理  那么到第二段Socks5代理的时候，由于配置文件语法格式的限制，所以需要隔离上一个代理选项的配置参数，这里就需要 flash选项来刷新下端即将出现的参数，用来覆盖上端重复的参数。
flush

#下面这两行不是必须的，你可以看着办
#代理服务器向外转发的时候绑定的IP地址
#external 10.0.0.14
#代理本地监听的IP地址
#internal 0.0.0.0
```



# Powershell

**运行**

打开控制台cmd/powershell**（管理员模式）**切换到解压目录**，**运行如下命令：

```text
.\3proxy.exe .\3proxy.cfg
```

如果没有报错、没有任何输出，则证明运行成功，可以在客户端安装支持sock5的代理程序验证是否可用

**注册为系统服务**

在保证上面步骤成功的情况下运行如下命令

```text
// 注册为服务并运行，默认使用3proxy.exe同路径下的3proxy.cfg配置文件
.\3proxy.exe --install

// 删除服务，删除服务前要停止服务，如下图所示
.\3proxy.exe --remove
```



