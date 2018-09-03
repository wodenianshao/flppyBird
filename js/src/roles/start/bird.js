//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'
var index = 0
var num = 0
export default new Sprite({
    img: 'imgGather',
    ...config.gameInfo.bird,
    render(ctx) {
        if (num > config.gameInfo.bird.speed) {
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