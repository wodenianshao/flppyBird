//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'
var index = 0
var num = 0
//最大角度
const MAX_ANGLE = 90
const MAX_SPEED = 12
// 当前速度 / 最大速度 = 当前角度 / 最大角度
const MAX_Height = databus.screenHeight - config.gameInfo.land.height
export default new Sprite({
    img: 'imgGather',
    ...config.gameInfo.birdReady,
    speed: 0,
    init(){
        this.x = config.gameInfo.birdReady.x
        this.y = config.gameInfo.birdReady.y
        this.speed = 0
    },
    render(ctx, delta) {
        //小鸟下落，采用 匀加速直线运动
        // S = V * t + 1/2 * t * t
        // V = v0 + a * t
        this.speed = this.speed + config.gameInfo.birdReady.a * delta
        this.y += (this.speed * delta + (1 / 2) * delta * delta) * 30
        if (this.y >= MAX_Height) {
            this.y = MAX_Height
        }
        //保存状态
        ctx.save()
        /**
         * 旋转
         * 1 先平移
         * 2 再旋转
         */
        //平移 把当前坐标从(0,0)移动到小鸟的位置
        ctx.translate(this.x, this.y)
        let curAngle = this.speed / MAX_SPEED * MAX_ANGLE
        if (curAngle > MAX_ANGLE){
            curAngle = MAX_ANGLE
        }
        ctx.rotate(curAngle / 180 * Math.PI)
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
        //因为中心点移动了，所以小鸟渲染的点也要相应发生对应变化
        // this.x --> -1 / 2 * this.height
        // this.y --> -1 / 2 * this.width
        ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], -1 / 2 * this.height, -1 / 2 * this.width, this.width, this.height)

        //重置，恢复到上一次保存的位置
        ctx.restore()
    }
})