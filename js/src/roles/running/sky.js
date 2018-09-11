//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'

const skyList = []
for (let i = 0; i < 2; i++) {
    const skySprite = new Sprite({
        img: 'imgGather',
        ...config.gameInfo.sky,
        x: i * config.gameInfo.sky.width,
        init(){
            this.x = i * config.gameInfo.sky.width
        },
        render(ctx) {
            let imgName = 'bg_night'
            let dataIndex = config.fram.IMG_Frams_LIST.animations[imgName][0]
            let data = config.fram.IMG_Frams_LIST.frames[dataIndex]
            ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], this.x, this.y, this.width, this.height)
        },
    
        update() {
            // this.x += this.speed
            if (this.x <= -this.width){
                this.x += this.width * 2
            }
        }
    })
    skyList.push(skySprite)
}
export default skyList