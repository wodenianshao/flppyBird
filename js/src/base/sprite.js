/**
 * 精灵基类 提供公共属性和方法
 */
//导入databus
import databus from '../../databus'
export default class Sprite{
    constructor(config){
        //图片属性  this[k] = config[k]
        // this.img = config.img
        // this.x = config.x
        // this.y = config.y
        // this.width = config.width
        // this.height = config.height

        //使用for-in循环来遍历传进来的config参数
        //将config参数中的所有参数，添加给this
        for (var k in config) {
            this[k] = config[k]
        }
    }

    //渲染自己的方法
    render(ctx){
        // console.log(databus.resources.images,this.img)
        ctx.drawImage(databus.resources.images[this.img],this.x,this.y,this.width,this.height)
    }
}