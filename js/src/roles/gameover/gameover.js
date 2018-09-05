//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'
export default new Sprite({
    img: 'imgGather',
    ...config.gameInfo.gameOver,
    render(ctx) {
        let imgName = 'text_game_over'
        let dataIndex = config.fram.IMG_Frams_LIST.animations[imgName][0]
        let data = config.fram.IMG_Frams_LIST.frames[dataIndex]
        ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], this.x, this.y, this.width, this.height)
    }
})