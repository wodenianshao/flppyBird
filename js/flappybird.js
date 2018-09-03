/**
 * 游戏主对象
 * 作用：
 * 1 加载游戏中的所有资源
 * 2 等资源加载完成，开启游戏主循环
 */
/**
 * 导入游戏配置文件
 */
/**
 * ./当前目录下的XX文件
 * ../上一级目录下的XX文件
 */
import config from '../js/config/config'
import databus from './databus'
import sceneManage from './src/scenes/index'
// 获取到绘制上下文
const ctx = canvas.getContext('2d')
export default class Flappybird {
  constructor() {
    this.render = this.render.bind(this)
    this.start()
  }

  start() {
    this
      .loadReasources()
      .then(() => {
        //加载完成
        // console.log(databus.resources)
        window.requestAnimationFrame(this.render)
      })
  }

  render() {
    // console.log("render")
    //1 渲染当前场景
    sceneManage.render(ctx)
    window.requestAnimationFrame(this.render)
  }

  loadReasources() {
    //加载资源
    //放在数组中方便判断资源有没有加载完成
    // console.log(config.resources)
    const resourcesList = [
      ...config.resources.IMG_NAME_LIST,
      ...config.resources.MUSIC_NAME_LIST
    ]

    let resource = null
    //加载完成的游戏资源数量
    let loadCount = 0
    return new Promise((resolv, reject) => {
      resourcesList.forEach(resName => {
        if (resName.endsWith('.png')) {
          resource = new Image()
          //图片路径需要是绝对路径
          resource.src = `js/resfile/images/${resName}`
          databus.resources.images[resName.slice(0, -4)] = resource
        } else if (resName.endsWith('.mp3')) {
          resource = new Audio()
          resource.src = `js/resfile/audio/${resName}`
          databus.resources.audio[resName.slice(0, -4)] = resource
        }
        //监听加载资源完成的事件
        resource.addEventListener('load', () => {
          loadCount += 1
          if (loadCount === resourcesList.length) {
            resolv()
          }
        })
        resource.addEventListener('error', () => {
          reject()
        })
      })
    })

  }
}