![Fluent Emoji](https://github.com/microsoft/fluentui-emoji/blob/main/art/readme_banner.webp)

# Microsoft Emoji（msemoji)

**简体中文** | [English](./README-EN.md)

‼️声明：我不生产表情，我只是表情的搬运工。请按照微软的条款合理使用它们，详情请见[此文档的“你是如何解决版权问题的？/我应该怎么合理的使用这些表情？”](#3%E4%BD%A0%E6%98%AF%E5%A6%82%E4%BD%95%E8%A7%A3%E5%86%B3%E7%89%88%E6%9D%83%E9%97%AE%E9%A2%98%E7%9A%84%E6%88%91%E5%BA%94%E8%AF%A5%E6%80%8E%E4%B9%88%E5%90%88%E7%90%86%E7%9A%84%E4%BD%BF%E7%94%A8%E8%BF%99%E4%BA%9B%E8%A1%A8%E6%83%85)。

## ℹ️关于 msemoji

这是一个微软风格表情 Emoji 存放仓库，并基于 [Twemoji](https://github.com/twitter/twemoji) 修改了其脚本以适配它们。

#### 🌟亮点

如同 Twemoji 一样，本项目也可以将网页上的 Emoji 换成图片，在所有平台上获得统一的表情。但是，只有一种选择未免太少，此项目使您可以获得另一种选择，用微软表情装点网页，生动地表达您的心情。

## 🚀快速入门

在您的 HTML `<head></head>` 中加入以下内容：

```
<script src="https://cdn.jsdelivr.net/gh/DellZHackintosh/msemoji@1.1.1/src/script/msemoji.min.js" crossorigin="anonymous"></script>
```

然后在 `<body></body>` 中加入这些内容：

```
<script>
var div = document.createElement('div');
div.textContent = 'I \u2764\uFE0F emoji!';
document.body.appendChild(div);
msemoji.parse(document.body);
</script>
```

结果应该如下：

[![v22N4I.jpg](https://s1.ax1x.com/2022/08/26/v22N4I.jpg)](https://imgse.com/i/v22N4I)（中国大陆可能看不到效果，不用担心，可以参考[此文档的“📋中国大陆补充”](#%E4%B8%AD%E5%9B%BD%E5%A4%A7%E9%99%86%E8%A1%A5%E5%85%85)。）

就是这么简单！msemoji 的执行函数就是`msemoji.parse()`。它可以通过两种方式转换表情为图片：

1. 转换指定的 HTML 元素内的表情，例如`document.body`。它将自动转换，无需其它操作。

2. 将输入的包含表情的内容输出为带有已转换表情的内容。这听起来有些复杂，不过很简单：
   
   ```
   msemoji.parse('I \u2764\uFE0F emoji!');      //或者是：msemoji.parse('I ❤️ emoji!');
   
   /*
   将会输出：
   I <img class="emoji" draggable="false" alt="❤️" src="https://xxx.xxx.com/emoji/2764.png"/> emoji!
   （图片地址仅为示例）
   */
   ```
   
   不过要注意，此方法不会像第一种方法一样自动更改某个元素的内容，它只是输出。如果要使用输出的内容，您还需要使用 JavaScript 将其输出的内容写入到一个元素内。此外，这个方法也没有第一种方法安全。

祝贺您！您已经了解了它的基本用法。但是，我们不能局限于此，往下看，了解它的自定义内容。

## 🆙进阶玩法

### ⚙️参数设置

msemoji 带有一些参数，可以让您获得更多选择。以下是一个例子。

```
msemoji.parse(document.body,{
    base: string,
    ext: string,
    className: string,
    folder: string,
    high_contrast: boolean
  });
```

参数讲解：

`base`指表情仓库的位置。例如，您可以指定其位置为：`https://example.com`，也可以带有子目录：`https://example.org/msemoji`。指定表情仓库的位置取决于它们所在的地方。通常来说，您不需要使用此参数，脚本会默认使用本仓库，除非您需要换一个仓库。

`ext`指文件的后缀名。所有的表情文件名称结构都为“对应的 Unicode+后缀名”。可供选择的后缀有`.png`和`.svg`，后文会讲讲它们。

`className`对控制表情的 CSS 起到作用。它们默认会设置为`emoji`。一般来说，不用设置此项，除非网页上已有相同的 CSS Class 类名时，才需要更改此项。

`folder`与文件后缀名相关，通过它来指定不同格式的表情。此参数会与您在`base`中指定的值（包括默认值）组合成完整目录，例如：`base` 值为`https://example.org/msemoji`，同时`folder`值为`/png`，则最终的链接为`https://example.org/msemoji/png`。默认值为`72x72`。此值取决于文件夹的名字。关于本仓库有哪些文件夹可供选择，请参阅后文。

`high_contrast`用于适配新的高对比度风格。使用`true`（无需引号）以开启。默认为`false`。**注意：** 仅在`1.1.0`版本及更新版本内可用。

`version`仅为一个变量，记录了当前版本。我们预先提供它以便不时之需。**注意：** 仅在`1.1.1`版本及更新版本内可用。

注：您现在所看到的是脚本支持的一部分参数，它们最为常用。如果希望了解脚本都有哪些参数和额外功能，请访问 [Twemoji 文档](https://github.com/twitter/twemoji#object-as-parameter)。

### 🔢表情种类介绍

本仓库提供了五种表情格式可供选择，您可以根据实际情况为您的网站选择合适的格式。

| 变体风格         | 2D                      | 3D                                              | Flat                      | Color                                                                            | High Contrast                                                                                                                 |
|:------------:|:-----------------------:|:-----------------------------------------------:|:-------------------------:|:--------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------:|
| 示例外观         | ![](./src/2D/1f600.png) | ![](./src/3D/1f600.png)                         | ![](./src/Flat/1f600.svg) | ![](./src/Color/1f600.svg)                                                       | ![](./src/High%20Contrast/1f600.svg)                                                                                          |
| 对应的`ext`值    | `.png`                  | `.png`                                          | `.svg`                    | `.svg`                                                                           | `.svg`                                                                                                                        |
| 对应的`folder`值 | `2D`                    | `3D`                                            | `Flat`                    | `Color`                                                                          | `High Contrast`                                                                                                               |
| 特点           | 大小为`72x72`像素。不可缩放。      | 大小为`256x256`，相对`2D`而言更清晰、立体与活泼。                 | 可缩放。风格与`2D`相同，体积较小。       | 可缩放。风格与`3D`相同。                                                                   | 可缩放。适用于残疾人士或希望使 Emoji 显示为黑白字体的人士。                                                                                             |
| 优点           | 兼容性佳，性能消耗少，加载快。         | 兼容性佳，性能消耗少，分辨率更大，更不易模糊。                         | 在任何情况下保持清晰。加载快。           | 在任何情况下保持清晰。                                                                      | 体积极小。使残疾人士能够更容易阅读。                                                                                                            |
| 缺点           | 不可缩放。在高分屏或以较大大小查看时较模糊。  | 不可缩放。在高分屏或以较大大小查看时可能会模糊。相对`2D`而言体积更大，可能会减慢加载速度。 | 兼容性略弱。大量使用可能会略微影响性能。      | 受限于特殊的位图光栅化方式，在某些设备上显示或缩放时可能有问题，在细节上不如`3D`风格。相对`Flat`体积更大，可能会减慢加载速度。大量使用可能会影响性能。 | 当前提供的`high_contrast`参数实现的功能略有问题，即某些肤色变体的 Emoji 无法正确显示（奇怪转码逻辑……），且尚无很好的解决方案。在此风格下避免使用非默认肤色的 Emoji。 |

### ✨调整表情的显示效果

现在让我们回顾一下快速入门。

[![v22N4I.jpg](https://s1.ax1x.com/2022/08/26/v22N4I.jpg)](https://imgse.com/i/v22N4I)

如此之大的表情显然不是我们想要的，那么应该如何调整它呢？我们需要`CSS`的帮助！

#### 🥇方案一（来自 Twitter）

```
img.emoji {
   height: 1em;
   width: 1em;
   margin: 0 .05em 0 .1em;
   vertical-align: -0.1em;
}
```

描述：

> 这将确保 Emoji 从与它们同一排的文本中获取与文本相同的宽度和高度。它还在 Emoji 前后增加了一点空间，并将它们向上移动一点，以更好的对齐文本。

优点：与文本对齐不会打断阅读的连贯，使它们看起来像是原生的字体。

#### 🥈方案二（来自 Flarum）

```
img.emoji {
    height: 1.5em;
    margin: 0 .1em;
    vertical-align: -.3em;
}
```

描述：

> 每个表情都会比同一排的文本略高一点，同时也会在每个 Emoji 前后增加一点空间。

优点：使用表情通常就是要表达自己的心情，这样的设置使表情略微突出，恰到好处地增加了用户对它的关注。另外，使表情略微加高一点点也使细节更为明显，优化了在低分屏的阅读体验。

#### 🥉方案三（来自百度贴吧）

```
img.emoji {
    width: 30px;
}
```

优点：想要您的表情最为突出吗？使用这个设置可以让人一眼就注意到它们。我们同时也建议将它们用于3D表情中，以突出它们的立体和动画效果。

### 💎特殊情况

如果您正在使用像 Flarum 这样的 Web 系统，则 Emoji 可能是以插件的形式嵌入系统内的（例如，Flarum 将 Twemoji 制作成核心插件加入系统内）。这种情况下，没有必要更改插件，可以使用动态修改图像链接的方式换用 msemoji。

这里提供一些思路，您也可以使用别的方式实现。

1. 使用 Nginx 的内置`sub_filter`函数。

2. 使用 JavaScript。

## 🤔常见问题

#### 1.为什么一些表情无法显示？

微软每年更新 Emoji 的速度不快，一般新增表情都是随大版本更新的。当发生此情况时，您只能等候更新。

（另注：想要看看您最爱使用的 Emoji 是不是微软的？您可以在[这里](https://dellzhackintosh.github.io/emojitest.html)查询。）

#### 2.为什么没有国家与地区旗帜？

这有两个理由：

1. 微软本身就不打算添加它们，因此也就没有必要加入了。

2. 出于政治原因。若某个国家更新了国旗，这里没及时更新，会引起不必要的麻烦。

敬请谅解。这些 Emoji 将显示成您使用的平台的样式。如果您认为添加国家旗帜很有必要，您可以自行寻找并补充。

#### 3.你是如何解决版权问题的？/我应该怎么合理的使用这些表情？

微软已开源 Fluent emoji。只需遵循其准则即可。请访问下面的链接了解更多。

https://github.com/microsoft/fluentui-emoji

另外，msemoji 的脚本修改自 twemoji，它的许可证继承 twemoji，为 MIT 许可证。

#### 4.我不喜欢这种风格！可以再添加一些其它风格的表情吗？

不能，原因是需要耗费大量的精力。另外，如项目名称一样，此项目是为 Microsoft Fluent Emoji 而生的。如果需要，您可以考虑 Fork 并自行修改。

#### 5.如何处理遇到的 Bug？

欢迎任何人通过 issue 反馈问题！反馈时请详细描述哪个文件有问题，格式是什么，遇到什么问题以及如何解决。如果可以，也欢迎您进行 Pull requests。

**注意：** 请先查看是否已提到您的问题。

## 📋中国大陆补充

`base`默认图像仓库地址为`https://raw.githubusercontent.com/DellZHackintosh/msemoji/main/src/`，可能会影响运行效果。如果出现这种问题，必须替换`base`默认值。下面提供一些可用的`base`值。

1. `https://cdn.jsdelivr.net/gh/DellZHackintosh/msemoji@1.1.1/src/`（推荐。不过要记得，有挂掉的可能......）

2. `https://raw.gitmirror.com/dellzhackintosh/dellzhackintosh.github.io/master/MSEmojis`（请遵守`7ed.net`的使用说明，特别是**不要滥用**！）

3. `https://gh.sourcegcdn.com/DellZHackintosh/msemoji/1.1.1/src/`（来自 [Source Global CDN](https://www.sourcegcdn.com/)）同样**不要滥用**，同时不允许空 Referer 请求。

如果是脚本本身加载失败，则可以考虑换用：

`<script src="https://dellzhackintosh.github.io/msemoji.min.js" crossorigin="anonymous"></script>`

或（[Source Global CDN](https://www.sourcegcdn.com/)）

`<script src="https://gh.sourcegcdn.com/DellZHackintosh/msemoji/1.1.1/src/script/msemoji.min.js"></script>`。

当然，您也可以自己建一个 CDN，可以从 Releases 中获取文件。

## ❤感谢

Microsoft，设计了表情集；

Twitter，提供了 Twemoji，并可修改、自定义。

## 📝任务列表

- [x] 1.增加 SVG 版本

- [x] 2.由 Twemoji 脚本修改一份 MSemoji 脚本。

- [ ] 3.每年更新至少一次。
