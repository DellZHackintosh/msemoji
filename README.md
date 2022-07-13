# Microsoft Emoji（msemoji)

<mark>注意：本文档需要修复大量细节。文档将在八月前更新。</mark>

## 关于 msemoji

这是一个基于 [Twemoji](https://github.com/twitter/twemoji) 修改的微软风格表情 Emoji。

## ~~如何使用~~

~~与 Twemoji 使用方法相同。请参见 Twemoji 的[官方说明](https://github.com/twitter/twemoji)。
但是，由于 msemoji 仅是一个资源库，因此必须使用参数设置默认表情库为 msemoji。~~

## 设置 msemoji 的资源库~~

1. ~~使用默认脚本：~~
   
   ```
   <script type="text/javascript">
   function getemoji() {
   document.getElementById('content').innerHTML =
    twemoji.parse(document.body,  {           //这将转换 body 内所有的 Emoji。
    base: 'https://DellZHackintosh.github.io',         // 这是我的表情仓库。
    folder: '/MSEmojis'        // 子目录，与上面的域名合成完整链接，即https://DellZHackintosh.github.io/MSEmojis。
   });
   }
   </script>
   ```

2. ~~（自创建 cdn）在 Release 中下载最新版本，然后将其解压并放置到您的网站上，并参考[此处]((https://github.com/twitter/twemoji#callback))以完成表情自定义路径的设置。~~

## 常见问题~~

##### 1.为什么这里面会有一些 Twitter 的表情？~~

~~微软每年更新 Emoji 的速度远没有其它平台快，一般新增表情都是随大版本更新的。今年的 Emoji 14.0 Twitter 已经更新了新的表情，但微软还没有，因此为了支持其它平台，现在只能用 Twitter 的表情先占位。等更新吧。~~

~~（另注：想要看看您最爱使用的 Emoji 是不是微软的？您可以在[这里](https://dellzhackintosh.github.io/emojitest.html)查询。~~

#### 2.为什么没有国家旗帜？~~

~~这有两个理由：~~

1. ~~微软本身就不打算添加国家旗帜 Emoji，因此也就没有必要加入了。~~

2. ~~出于政治原因。微软都有理由不添加国家旗帜，更何况我本人？另外，万一在什么时候某个国家更新了国旗，我没及时更新，那就......~~

~~敬请谅解。如果您认为添加国家旗帜很有必要，您可以自行下载并补充。~~

## 感谢

Microsoft，设计了表情集；

Twitter，提供了 Twemoji，并可修改、自定义。

Emojipedia，保存了全套表情集。

## 任务列表

- [ ] 1.增加 SVG 版本

- [ ] 2.由 Twemoji 脚本修改一份 MSemoji 脚本。
