//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'
var index = 0
var num = 0
export default new Sprite({
    img: 'imgGather',
    ...config.gameInfo.birdReady,
    speed: 0,
    render(ctx, delta) {
        //小鸟下落，采用 匀加速直线运动
        // S = V * t + 1/2 * t * t
        // V = v0 + a * t
        this.speed = this.speed + config.gameInfo.birdReady.a * delta
        this.y += (this.speed * delta + (1 / 2) * delta * delta) * 10
        if (this.y > 120) {
            this.speed = -4.5
        }
        if (this.y > 120){
            this.y = 100
        }   
        /**
        * 播放小鸟飞行动画
        */
        if (num > config.gameInfo.birdReady.wingSpeed) {
            num = 0
            index += 1
            if (index > 2) {
                index = 0
            }
        }
        num += 1
        let imgName = 'bird' + index + '_' + index
        let dataIndex = config.fram.IMG_Frams_LIST.animations[imgName][0]
        let data = config.fram.IMG_Frams_LIST.frames[dataIndex]
        ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], this.x, this.y, this.width, this.height)
    }
})