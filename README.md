# 🏡 Airbnb中国版项目

## 📖 项目简介

这是一个基于React开发的Airbnb中国版前端项目，使用现代前端技术栈，实现了Airbnb的主要功能和UI界面。项目包含首页、房源列表页、房源详情页等多个页面，支持响应式布局，提供了良好的用户体验。

## ✨ 主要特点

- 🎨 精美UI设计，高度还原Airbnb官方界面
- 📱 响应式布局，适配不同设备尺寸
- 🔄 数据状态管理，使用Redux实现全局状态管理
- 🖼️ 高级图片浏览器，支持全屏查看和轮播切换
- 🔍 动态搜索功能，支持多条件筛选
- 📑 分页加载，优化性能体验
- 🧩 组件化开发，代码复用率高

## 🛠️ 技术栈

- **前端框架**: React, React Hooks
- **路由管理**: React Router
- **状态管理**: Redux, Redux-Thunk
- **样式解决方案**: Styled-Components
- **UI组件库**: Ant Design, Material-UI
- **动画效果**: React Transition Group
- **工具库**: Classnames, Axios等

## 📋 功能模块

### 🏠 首页
- 主页Banner展示
- 房源推荐展示
- 目的地推荐
- 长租特惠区域
- 顶部透明导航栏

### 🔎 房源列表页
- 筛选条件
- 分页加载更多房源
- 房源卡片展示
- 房源预览轮播图

### 📝 房源详情页
- 房源详细信息展示
- 房源图片全屏浏览
- 预订日历选择
- 房东信息
- 设施与规则介绍
- 评价系统展示

### 👤 公共组件
- 顶部导航栏
- 底部版权信息栏
- 图片浏览器
- 房间卡片
- 指示器组件

## 🚀 如何运行

### 环境要求
- Node.js 12.0+
- npm 6.0+

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm start
```
访问 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产环境代码
```bash
npm run build
```

## 📁 项目结构

```
src/
├── assets/         # 静态资源
│   ├── css/        # 全局样式
│   ├── data/       # 模拟数据
│   ├── img/        # 图片资源
│   └── theme/      # 主题配置
├── base-ui/        # 基础UI组件
│   └── indicator/  # 指示器组件
├── components/     # 公共组件
│   ├── app-header/ # 应用头部
│   ├── picture-browser/ # 图片浏览器
│   ├── room-item/  # 房间项目卡片
│   └── section-*   # 各类区域组件
├── hooks/          # 自定义Hooks
├── router/         # 路由配置
├── services/       # API服务
├── store/          # Redux状态管理
│   └── modules/    # 状态模块
├── utils/          # 工具函数
└── views/          # 页面组件
    ├── detail/     # 详情页
    ├── entire/     # 房源列表页
    └── home/       # 首页
```

## 🌟 项目亮点

### 1. 组件化开发
项目采用组件化开发方式，将UI拆分为可复用的组件，提高了代码复用率和可维护性。

### 2. 主题定制
使用styled-components和主题配置，实现了统一的样式管理和主题切换功能。

```javascript
const theme = {
  color: {
    primaryColor: '#FF385C',
    secondaryColor: '#00848A'
  },
  textColor: {
    primaryTextColor: '#484848',
    secondaryTextColor: '#222222'
  },
  mixin: {
    boxshow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 2px 5px rgb(0, 0, 0, .18);
    }`
  }
}
```

### 3. 高级轮播图实现
实现了自定义的轮播图组件，支持多种交互方式：

- 鼠标悬停显示控制按钮
- 指示器动态跟踪
- 键盘方向键控制
- 平滑过渡动画

### 4. 全屏图片浏览器
实现了模拟Airbnb的全屏图片浏览功能：

- 支持键盘导航
- 缩略图预览和切换
- 动画过渡效果
- 显示/隐藏缩略图列表

### 5. 智能搜索框
实现了动态变化的搜索框：

- 滚动时自动收起/展开
- 多种搜索条件切换
- 平滑过渡动画

## 📚 学习资源

- [React官方文档](https://reactjs.org/)
- [Redux官方文档](https://redux.js.org/)
- [Styled-Components文档](https://styled-components.com/)

## 📝 注意事项

- 本项目仅用于学习和展示，非商业用途
- 项目中的图片和数据仅作为示例，版权归原作者所有
- 如需部署到生产环境，请确保配置正确的API接口

## 👨‍💻 贡献指南

1. Fork 本仓库
2. 创建您的特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交您的改动 (`git commit -m 'Add some amazing feature'`)
4. 将您的改动推送到分支 (`git push origin feature/amazing-feature`)
5. 提交Pull Request

## 📄 许可证

本项目使用 MIT 许可证

---

🙏 感谢使用本项目，如有问题请提交Issue或Pull Request！

找到具有 1 个许可证类型的类似代码