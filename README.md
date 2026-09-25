# RainLove の blog

> 记录生活、学习与灵感，也收藏值得分享的 AI 工具和开源项目。

[访问博客](https://www.rainlove.work/) · [关于我](https://www.rainlove.work/about/) · [最新动态](https://www.rainlove.work/dynamic/) · [订阅 RSS](https://www.rainlove.work/rss.xml)

这是 RainLove 的个人博客，基于 [Firefly](https://github.com/CuteLeaf/Firefly) 构建，并加入了可在 Windows 本地启动的内容管理器。你可以先在电脑上写作和预览，确认效果后再发布到 GitHub Pages 或 Vercel。

## 博客里有什么

- **文章与动态**：长文保存在文章归档，简短的日常和想法发布到动态页；支持 Markdown、封面和正文图片。
- **相册与图片库**：按相册整理图片，也能在管理器中创建文件夹、上传和删除素材。
- **灵境**：用更有趣的方式浏览文章与动态。
- **书签与 RSS**：整理常用网站，并订阅 AI 与 GitHub 项目相关信息。
- **音乐、评论与看板娘**：侧边栏音乐播放器、Giscus 留言，以及左下角的 Live2D 模型。
- **独立的桌面与手机壁纸**：分别设置多张图片，在首页轮播。

站点仍会持续更新。这里的内容和功能以[线上博客](https://www.rainlove.work/)为准。

## 在 Windows 本地运行

需要 **Node.js 22.23 或更新版本**、**pnpm 11** 和 **Git**。下载或克隆仓库后，双击项目根目录的 **`启动管理器.bat`**。脚本会在需要时安装依赖，并启动管理器与博客预览。

也可以在项目目录中手动运行：

```powershell
git clone https://github.com/lunch-rain/lunch-rain.github.io.git
cd lunch-rain.github.io
pnpm install --frozen-lockfile
pnpm manager
```

| 地址 | 用途 |
| --- | --- |
| <http://localhost:4174> | 本地内容管理器 |
| <http://localhost:4321> | 本地博客预览 |

管理器仅监听本机地址。关闭启动它的命令窗口即可停止服务。若预览没有显示刚保存的内容，可在管理器的「同步发布」页点击「刷新本地预览」。

## 用管理器更新内容

管理器提供文章管理、动态发布、图片管理、相册管理、站点设置，以及「全部内容与配置」编辑区。

1. 在管理器中创建或修改内容，先保存到本地。
2. 打开博客预览，检查文字、图片和页面效果。
3. 在「同步发布」中上传静态页与源码；动态编辑器也提供「保存并发布」。

常用内容的位置：

| 内容 | 项目路径 |
| --- | --- |
| 文章 | `src/content/posts/` |
| 动态 | `src/content/dynamic/` |
| 关于我 | `src/content/spec/about.md` |
| 上传图片 | `public/uploads/` |
| 个人资料、横幅和站点信息 | `manager/site-settings.json` |
| 主题和页面配置 | `src/config/` |

「全部内容与配置」可编辑更多源码文件。保存后先查看本地预览；发布静态页时会重新构建网站。更详细的操作和首次发布设置见 [本地管理器说明](LOCAL-MANAGER.md)。

## 发布到 GitHub Pages 和 Vercel

当前默认使用 [lunch-rain/lunch-rain.github.io](https://github.com/lunch-rain/lunch-rain.github.io) 仓库：`main` 保存源码，`gh-pages` 保存构建后的静态网页。目标仓库和分支可在管理器的「同步发布」中调整。

- **GitHub Pages**：点击「编译并推静态页」，将本地构建结果推送到 `gh-pages`。仓库 Pages 设置需要选择相应的发布方式和分支。
- **Vercel 自动部署**：点击「同步源码到 GitHub」，将本地修改提交并推送到 `main`。如果 Vercel 已连接该仓库和分支，会自动开始部署。
- **Vercel 直接部署**：首次双击 `配置Vercel.bat` 登录并关联项目，然后在管理器中点击「直接发布 Vercel」。

发布前需要让本机 Git 能推送目标仓库。管理器的源码同步会提交当前项目中的本地修改，请先确认要发布的文件。更多设置和排错方法见 [LOCAL-MANAGER.md](LOCAL-MANAGER.md)。

## 常用命令

```powershell
pnpm manager  # 启动管理器和博客预览
pnpm check    # 检查 Astro 文件
pnpm build    # 构建静态网站到 dist/
pnpm preview  # 预览构建结果
```

## 致谢

博客主题来自 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly)，管理器的写作与双轨发布流程参考了 [XinghuisamaBlogs](https://github.com/heiehiehi/XinghuisamaBlogs)，看板娘模型参考了 [Mizuki](https://github.com/matsuzaka-yuki/Mizuki)。原作者及许可证信息见 [LICENSE](LICENSE)。
