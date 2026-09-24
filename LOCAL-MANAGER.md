# Firefly 博客与本地管理器

这是原版 [Firefly](https://github.com/CuteLeaf/Firefly) 博客，另加一个本地内容管理器。管理器的写作、保存和发布流程参考了 [XinghuisamaBlogs](https://github.com/heiehiehi/XinghuisamaBlogs)。Firefly 与 Fuwari 的原作者和许可证见 `LICENSE`。

## 本地启动

需要 Node.js 22.23+、pnpm 11、Git。Windows 下可直接双击 `启动管理器.bat`，它会检查依赖、启动管理器与博客预览，并打开浏览器。也可以在命令行运行：

```powershell
cd E:\博客\Firefly
pnpm install --frozen-lockfile
pnpm manager
```

- 管理器：<http://localhost:4174>
- Firefly 博客：<http://localhost:4321>

管理器只监听本机 `127.0.0.1`。文章保存在 `src/content/posts/`，上传的图片保存在 `public/uploads/`，个人信息保存在 `manager/site-settings.json`。草稿会保存到本地，但不会显示在公开博客。Firefly 的示例文章、动态、项目和其他人的个人资料已清空。站点运行时长从 `siteStartDate` 开始逐秒更新，可在站点设置中调整起点。

## 双轨发布到 GitHub Pages 和 Vercel

发布页参考 XinghuisamaBlogs 的双轨流程，默认共用 `lunch-rain/lunch-rain.github.io` 仓库：`gh-pages` 分支只放构建后的网页，`main` 分支放源码。可在管理器中修改两个仓库地址和分支。

1. 确保本机 Git 能推送目标仓库，并配置 Git 身份：

   ```powershell
   git config --global user.name "lunch-rain"
   git config --global user.email "你的 GitHub 邮箱"
   ```

2. 点击「编译并推静态页」。管理器本地构建后，将 `dist/` 里的网页推送到 `gh-pages` 分支。
3. GitHub 仓库 Settings → Pages → Build and deployment → Source 选择 **Deploy from a branch**，分支选择 `gh-pages`，目录选择 `/(root)`。部署完成后访问 <https://lunch-rain.github.io>。
4. 点击「同步源码到 GitHub」会提交本地改动并推送到 `main`。在 Vercel 中连接此仓库和分支后，源码推送会触发 Vercel 构建。

管理器本身仅供本地使用。若 Git 推送要求登录，请按 Git 的提示完成浏览器或凭据管理器身份验证；不要把令牌写入项目文件。

## 发布到 Vercel

如果不使用 Git 连接 Vercel，也可以首次双击 `配置Vercel.bat` 登录并关联项目，再在管理器中点击「直接发布 Vercel」。管理器会先验证本地构建，再通过 Vercel CLI 部署生产环境。Vercel 的本地关联信息在 `.vercel/`，不会提交到 Git。

部署到 Vercel 后，请把管理器「站点设置」中的站点网址改成实际对外域名，再重新发布，以便生成正确的 SEO 链接。

## 已有功能

- 文章新建、编辑、删除、草稿、置顶、分类与标签
- Markdown 预览，封面及正文图片上传
- 博客标题、简介、作者、头像、社交链接、横幅与公告设置
- 「全部内容与配置」中编辑主题配置、页面、样式，也可新建或删除 Markdown 内容文件
- 本地预览，静态页发布到 GitHub Pages、源码同步到 GitHub，以及直接发布 Vercel

高级文件编辑区直接修改 Firefly 项目文件。配置或代码修改可能导致构建失败，发布按钮会在上传前先执行完整构建并显示错误。
