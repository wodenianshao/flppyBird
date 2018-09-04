## 2018年8月30日18:03:57
## Hxd

## 源码目录介绍
```
./js
├── src 
│   └── base                                   // 定义游戏开发基础类
│       ├── sprite.js                          // 游戏基本元素精灵基类
│       └── scenes.js                          // 游戏基本场景基类
│   └── roles                                  // 定义游戏角色
│       └── start                              // 开始场景游戏精灵
│             ├── bird.js                      // 小鸟角色
│             ├── birdtitle.js                 // 小鸟文字标题
│             ├── land.js                      // 陆地
│             ├── replay.js                    // 开始按钮
│             └── sky.js                       // 天空
│   └── scenes                                 // 定义游戏场景
│       └── sceneManage.js                     // 场景管理器
│       └── start.js                           // 开始场景
│       └── ready.js                           // 准备场景
├── config
│   └── libs
│       └──weapp-adapter.js                    // 小游戏适配器
│   └── config.js                              // 游戏中对象的基本常量配置
├── resfile
│   ├── images                                 // 图片资源
│   └── audio                                  // 音乐资源
├── databus.js                                 // 管控游戏状态
└── main.js                                    // 游戏入口主函数

```

## 小游戏 Adapter
- 小游戏的运行环境在 iOS 上是 JavaScriptCore，在 Android 上是 V8，都是没有 BOM 和 DOM 的运行环境，没有全局的 document 和 window 对象。因此当你希望使用 DOM API 来创建 Canvas 和 Image 等元素的时候，会引发错误。
- 适配层 [Adapter] (https://developers.weixin.qq.com/minigame/dev/tutorial/base/adapter.html)

## RenderingContext -渲染上下文支持说明 rct 
