# onlynor's site

基于 [Astro](https://astro.build) 与 [Fuwari](https://github.com/saicaca/fuwari) 主题搭建的个人网站。

## 本地开发

```sh
pnpm install
pnpm dev
```

## 常用命令

| 命令 | 作用 |
|:--|:--|
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 构建生产站点到 `./dist/` |
| `pnpm preview` | 本地预览构建产物 |
| `pnpm check` | 检查代码错误 |
| `pnpm format` | 使用 Biome 格式化代码 |
| `pnpm new-post <filename>` | 新建一篇文章 |

## 自定义

编辑 `src/config.ts` 修改站点标题、语言、头像、社交链接等信息。

文章位于 `src/content/posts/`，使用 Markdown 编写。

## 许可协议

项目源码基于 MIT 协议；文章内容默认采用 CC BY-NC-SA 4.0 协议。