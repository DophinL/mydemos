## 组件

| 组件                      | 所属工程                   | 描述                                  | 原子性  | 依赖                                       | 第三方依赖              |
| ----------------------- | ---------------------- | ------------------------------------ | ---- | ---------------------------------------- | ------------------ |
| carousel                | component-slider       | 图片轮播组件                               | 是    | 无                                        |                    |
| carousel(wap)           | component-slider       | 图片轮播组件                               | 是    | 无                                        | hammer.js,swipe.js |
| sticky-switcher         | component-slider       | 特殊交互的切换组件，如果列表很长，切到最后，列表最右边会贴在容器最右边。 | 否    | switcher                                 |                    |
| sticky-switcher(wap)    | component-slider       | 特殊交互的切换组件，如果列表很长，切到最后，列表最右边会贴在容器最右边。 | 否    | switcher                                 | hammer.js          |
| switcher                | component-slider       | 切换组件。通过transform属性切换列表。              | 是    | 无                                        | 无                  |
| switcher(wap)           | component-slider       | 切换组件。通过transform属性切换列表。              | 是    | 无                                        | 无                  |
| sticky-tabs(wap)       | component-tabs         | 吸顶tabs。根据当前位置自动切换tab。                | 是    | 无                                        | 无                  |
| slideModal              | component-modal        | 滑动浮窗（从底部向上）                          | 是    | 无                                        | 无                  |
| slideModal(wap)         | component-modal        | 滑动浮窗（从底部向上）                          | 是    | 无                                        | 无                  |
| cascade                 | component-dropdown     | 级联组件                                 | 否    | dropdown                                 | 无                  |
| cascade                 | component-dropdown     | 级联组件                                 | 是    |                                          | hammer.js          |
| cascade-filter(wap)     | component-dropdown     | 过滤器形式的级联组件                           | 否    | dropdown                                 | 无                  |
| graffiti                | component-board        | 涂鸦板                                  | 是    | 无                                        | 无                  |
| photoPreviewer          | component-board        | 图片预览器，包含图片列表部分，支持删除。                 | 否    | photoViewer                              | 无                  |
| videoplayer progressbar | component-video-player | 播放器进度条                               | 是    | 无                                        | 无                  |
| videoplayer caption     | component-video-player | 播放器字幕                                | 是    | 无                                        | 无                  |
| area-select             | module-component       | 地区选择器                                | 否    | cascade                                  | 无                  |
| area-select(wap)        | module-component       | 地区选择器                                | 否    | cascade                                  | 无                  |
| dom2PicProxy            | k12-module-component   | dom转化为图片，适用于长按保存图片的场景。               | 是    | 无                                        | 无                  |
| exercise-commiter       | k12-module-component   | 作业提交器                                | 否    | slideModal,modal, photoPreviewer, sticky-switcher | 无                  |
| async-button-export     | component-button       | 异步导出文件组件                             | 否    | button,hover                             |                    |
| import                  | k12-module-component   | 带轮询的导入组件                             | 是    | 无                                        | 无                  |
| breadcrumb (vue)        | front-kada-campus      | 根据路由动态生成的面包屑组件                       | 是    | vue-router                               | 无                  |



## 工具

| 工具名称                                     | 描述                                     |
| ---------------------------------------- | -------------------------------------- |
| edu-front-util/util                      | 实用工具函数                                 |
| generator-k12                            | k12脚手架                                 |
| sentry                                   | 异常监控平台接入                               |
| scss异常查找工具                               | 在打包阶段，通过正则匹配发现scss编译报错，以防止线上异常         |
| 自动sync文件工具                               | 由于nej模块引用路径的问题，需要把一些模块文件从lib里同步到指定的目录下 |
| 多行添加省略号scss mixin [demo](https://codepen.io/Dophin/pen/ZxbdqG) | 多行添加省略号scss mixin                      |



## 最佳实践

| 名称                                       |
| ---------------------------------------- |
| [teach权限及业务线配置梳理](http://7xokyg.com1.z0.glb.clouddn.com/teach%E6%9D%83%E9%99%90%E5%8F%8A%E4%B8%9A%E5%8A%A1%E7%BA%BF%E9%85%8D%E7%BD%AE%E6%A2%B3%E7%90%86.pdf) |
| [异步导出业务](http://7xokyg.com1.z0.glb.clouddn.com/%E5%BC%82%E6%AD%A5%E5%AF%BC%E5%87%BA%E4%B8%9A%E5%8A%A1.pdf) |
| [导入业务梳理](http://7xokyg.com1.z0.glb.clouddn.com/%E5%AF%BC%E5%85%A5%E4%B8%9A%E5%8A%A1%E6%A2%B3%E7%90%86.pdf) |
| [任务业务梳理](http://7xokyg.com1.z0.glb.clouddn.com/%E4%BB%BB%E5%8A%A1%E4%B8%9A%E5%8A%A1%E6%A2%B3%E7%90%86.pdf) |
| [用眼休息及帧动画](http://7xokyg.com1.z0.glb.clouddn.com/%E7%94%A8%E7%9C%BC%E4%BC%91%E6%81%AF%E5%8F%8A%E5%B8%A7%E5%8A%A8%E7%94%BB.pdf) |
| [vue面包屑组件](http://7xokyg.com1.z0.glb.clouddn.com/vue%E9%9D%A2%E5%8C%85%E5%B1%91%E7%BB%84%E4%BB%B6.pdf) |
| [长按分享业务](http://7xokyg.com1.z0.glb.clouddn.com/%E9%95%BF%E6%8C%89%E5%88%86%E4%BA%AB%E4%B8%9A%E5%8A%A1.pdf) |



## 其它

| 名称                                       | 描述                         |
| ---------------------------------------- | -------------------------- |
| [cache-im](https://dophinl.github.io/mydemos/intro/done/cache-im/) | 聊天室消息分发器                   |
| k12-cache-config                         | k12 公共平台差异化配置及常量（专题）       |
| k12-base                                 | k12 公共工具函数、cache配置、公共样式、常量 |

