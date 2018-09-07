//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'

const pipeList = []
for (let i = 0; i < 3; i++) {
    const pipeSprite = new Sprite({
        img: 'imgGather',
        ...config.gameInfo.pipe,
        //每个管道的x坐标
        scoreMark:false,
        x: databus.screenWdith + (config.gameInfo.pipe.width + config.gameInfo.pipe.horizontalGap) * i,
        bottomY: 0,
        init() {
            //重置X，Y坐标
            this.x = databus.screenWdith + (config.gameInfo.pipe.width + config.gameInfo.pipe.horizontalGap) * i,
            this.setPipeY()
            this.setPosition()
        },
        setPosition() {
            const position = {
                startX: this.x,
                startY: this.y,
                endX: this.x + this.width,
                endY: this.y + this.height
            }
            this.position = {
                top: position,
                bottom: { ...position, startY: this.bottomY, endY: this.bottomY + this.height }
            }
        },
        setPipeY() {
            const randomHeight = Math.random() * 200 + 120
            //上管道的y坐标
            this.y = randomHeight - this.height
            //下管道的y坐标
            // 48 - 150
            let verticalGap = this.verticalGap 
            if (databus.score >= 53115){
                verticalGap = Math.random() * 50 + 48
            }
            this.bottomY = randomHeight + verticalGap
        },
        /**
         * 绘制上下管道
         * @param {object} ctx 
         */
        render(ctx) {
            let upimgName = 'pipe_down'
            let dataIndex = config.fram.IMG_Frams_LIST.animations[upimgName][0]
            let data = config.fram.IMG_Frams_LIST.frames[dataIndex]
            ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], this.x, this.y, this.width, this.height)
            let downimgName = 'pipe2_up'
            let dataIndexs = config.fram.IMG_Frams_LIST.animations[downimgName][0]
            let datas = config.fram.IMG_Frams_LIST.frames[dataIndexs]
            ctx.drawImage(databus.resources.images[this.img], datas[0], datas[1], datas[2], datas[3], this.x, this.bottomY, this.width, this.height)
        },
        update() {
            if (!databus.gameOver) {
                this.x += this.speed
                if (this.x <= -(this.width + this.horizontalGap)) {
                    this.x += (this.width + this.horizontalGap) * 3
                    //管道重新进入时，再次设置管道Y坐标
                    this.setPipeY()
                    //重新设置积分标志
                    this.scoreMark = false
                }
                //记录管道坐标
                this.setPosition()
            }
        }
    })
    pipeList.push(pipeSprite)
}
export default pipeList