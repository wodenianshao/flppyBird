//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'
export default new Sprite({
    img:'imgGather',
    x:100,
    y:100,
    width:178,
    height:48,
    render(ctx){
        let imgName = 'title'
        let dataIndex = config.fram.IMG_Frams_LIST.animations[imgName][0]
        let data =  config.fram.IMG_Frams_LIST.frames[dataIndex]
        /**
         * ctx.drawImage(param1,param2,param3,param4,param5,param6,param7,param8,param9)
         *  param1: 图片资源
         *  param2: 图片渲染的左上角x坐标
         *  param3: 图片渲染的左上角y坐标
         *  param4: 图片渲染的右下角x坐标
         *  param5: 图片渲染的右下角y坐标
         *  param6: 图片渲染的x坐标
         *  param7: 图片渲染的y坐标
         *  param8: 图片渲染的宽度
         *  param9: 图片渲染的高度
         *   11
         */
        ctx.drawImage(databus.resources.images[this.img],data[0], data[1], data[2], data[3],this.x,this.y,this.width,this.height)
    }
})