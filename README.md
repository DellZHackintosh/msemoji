# Microsoft Emoji（msemoji)

‼️声明：我不生产表情，我只是表情的搬运工。

## ℹ️关于 msemoji

这是一个基于 [Twemoji](https://github.com/twitter/twemoji) 修改的微软风格表情 Emoji。

#### 🌟亮点

如同 Twemoji 一样，本项目也可以将网页上的 Emoji 换成图片，在所有平台上获得统一的表情。但是，只有一种选择未免太少，此项目使你可以获得另一种选择，用微软表情装点网页，生动地表达你的心情。

## 🚀快速入门

在您的 HTML <head></head> 中加入以下内容：

```
<script src="https://cdn.jsdelivr.net/gh/DellZHackintosh/msemoji@0.1-beta/src/script/msemoji.min.js" crossorigin="anonymous"></script>
```

然后在 <body></body> 中加入这些内容：

```
<script>
var div = document.createElement('div');
div.textContent = 'I \u2764\uFE0F emoji!';
document.body.appendChild(div);
msemoji.parse(document.body);
</script>
```

结果应该如下：

![](./data/Get-started.jpg)

祝贺您！您已经了解了它的基本用法，即`msemoji.parse()`。但是，我们不能局限于此，往下看，了解它的自定义内容。

## 🆙进阶玩法

### ⚙️参数设置

msemoji 带有一些参数，可以让您获得更多选择。以下是一个例子。

```
msemoji.parse(document.body,{
    base: string,
    ext: string,
    className: string,
    folder: string
  });
```

参数讲解：

`base`指表情仓库的位置。例如，你可以指定其位置为：`https://example.msemoji.text`，也可以带有子目录：`https://helloemoji.io/msemoji`。指定表情仓库的位置取决于它们所在的地方。通常来说，你不需要使用此参数，脚本会默认使用本仓库，除非你需要换一个仓库。

`ext`指文件的后缀名。所有的表情文件名称结构都为“对应的 Unicode+后缀名”。可供选择的后缀有`.png`和`.svg`，后文会讲讲它们。

`className`对控制表情的 CSS 起到作用。它们默认会设置为`emoji`。一般来说，不用设置此项，除非网页上已有相同的 CSS Class 类名时，才需要更改此项。

`folder`与文件后缀名相关，通过它来指定不同格式的表情。此参数会与您在`base`中指定的值（包括默认值）组合成完整目录，例如：`base` 值为`https://helloemoji.io/msemoji`，同时`folder`值为`/png`，则最终的链接为`https://helloemoji.io/msemoji/png`。默认值为`72x72`。此值取决于文件夹的名字。关于本仓库有哪些文件夹可供选择，请参阅后文。

### 🔢表情种类介绍



### ✨调整表情的显示效果



## 🤔常见问题

#### 1.为什么这里面会有一些 Twitter 的表情？

微软每年更新 Emoji 的速度远没有其它平台快，一般新增表情都是随大版本更新的。今年的 Emoji 14.0 Twitter 已经更新了新的表情，但微软还没有，因此为了支持其它平台，现在只能用 Twitter 的表情先占位。等更新吧。

（另注：想要看看您最爱使用的 Emoji 是不是微软的？您可以在[这里](https://dellzhackintosh.github.io/emojitest.html)查询。）

#### 2.为什么没有国家旗帜？

这有两个理由：

1. 微软本身就不打算添加国家旗帜 Emoji，因此也就没有必要加入了。

2. 出于政治原因。微软都有理由不添加国家旗帜，更何况我本人？另外，万一在什么时候某个国家更新了国旗，我没及时更新，那就......

敬请谅解。如果您认为添加国家旗帜很有必要，您可以自行下载并补充。

## ❤感谢

Microsoft，设计了表情集；

Twitter，提供了 Twemoji，并可修改、自定义。

Emojipedia，保存了全套表情集。

## 📝任务列表

- [ ] 1.增加 SVG 版本

- [ ] 2.由 Twemoji 脚本修改一份 MSemoji 脚本。

- [ ] 3.每年更新至少一次。
