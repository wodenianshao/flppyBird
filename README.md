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
```js
    // 获取到绘制上下文
    const ctx = canvas.getContext('2d')
```

## 事件处理
- 说明: canvas 整体是一个对象，所以，如果需要给canvas中的某个具体的角色绑定事件需要自己处理
- 给cavas中特定角色绑定事件的原理:
 - 1 得到这个角色的坐标（startX,startY,endX,endY）
 - 2 判断点击处坐标是不是在角色坐标内部
 ```js
    const clientX = e.touches[0].clientX
    const clientY = e.touches[0].clientY
    //遍历当前场景中的所有角色，分别触发每个角色的绑定事件
    this.roles.forEach( role =>{
        if (clientX >= role.x && clientX <= (role.x + role.width) && clientY >= role.y && clientY <= (role.y + role.height) ){
            //触发角色的点击事件
            role.click()
        }
    })
 ```

 ## 碰撞检测
 - 小鸟与管道碰撞的处理思路:
   - 1 
     - 1 取小鸟的中心点
     - 2 为了提高精确度，将小鸟抽象成一个正方形取四个点
     - 3 像素碰撞 https://blog.csdn.net/nzb329/article/details/52054252
   - 2 获取所有(上下)管道的四个点
     - 1 (上)-->(this.x,this.y,this.x + this.width, this.y + this.height)
     - 2 (下)-->(this.x,this.bottomY,this.x + this.width,this.bottomY + this.height )
   - 3 判断小鸟中心点是否与管道有包含(碰撞)

