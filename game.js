//小游戏入口
//小游戏必须提供game.js文件，否则无法运行
//游戏主入口
//入口中实例游戏对象 flappybird.js ,此时，会将所有的场景对象传入到游戏对象中
//创建场景对象，并创建场景对象中的角色
//游戏对象中，开启主循环，负责渲染当前场景
import './js/config/libs/weapp-adapter'
import Flappybird from './js/flappybird'
new Flappybird()