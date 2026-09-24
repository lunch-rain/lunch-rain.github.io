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

## 发布到 GitHub

1. 登录 `lunch-rain`，创建一个**公开**且空的仓库，名称必须是 `lunch-rain.github.io`。
2. 仓库 Settings → Pages → Build and deployment → Source 选择 **GitHub Actions**。
3. 在本机配置 Git 身份，并确保 Git 能向该仓库推送：

   ```powershell
   git config --global user.name "lunch-rain"
   git config --global user.email "你的 GitHub 邮箱"
   ```

4. 在管理器的「同步发布」页点击「构建并上传 GitHub」。管理器会先构建网站，然后提交并推送到 `https://github.com/lunch-rain/lunch-rain.github.io.git`。GitHub Actions 会构建并部署静态网站。
5. 部署完成后访问 <https://lunch-rain.github.io>。

管理器本身仅供本地使用，不会作为后台部署到 GitHub Pages。若 Git 推送要求登录，请按 Git 的提示完成浏览器或凭据管理器身份验证；不要把令牌写入项目文件。

## 发布到 Vercel

首次双击 `配置Vercel.bat`，依提示登录 Vercel 并关联或新建项目。配置完成后，在管理器「同步发布」中点击「构建并发布 Vercel」。管理器会先验证本地构建，再通过 Vercel CLI 部署生产环境。Vercel 的本地关联信息在 `.vercel/`，不会提交到 Git。若将同一 GitHub 仓库连接到 Vercel，推送 GitHub 也会触发 Vercel 自动部署。

部署到 Vercel 后，请把管理器「站点设置」中的站点网址改成实际对外域名，再重新发布，以便生成正确的 SEO 链接。

## 已有功能

- 文章新建、编辑、删除、草稿、置顶、分类与标签
- Markdown 预览，封面及正文图片上传
- 博客标题、简介、作者、头像、社交链接、横幅与公告设置
- 「全部内容与配置」中编辑主题配置、页面、样式，也可新建或删除 Markdown 内容文件
- 本地预览，分别上传 GitHub 和发布 Vercel

高级文件编辑区直接修改 Firefly 项目文件。配置或代码修改可能导致构建失败，发布按钮会在上传前先执行完整构建并显示错误。
