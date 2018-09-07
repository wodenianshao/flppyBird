//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'
export default new Sprite({
    img: 'imgGather',
    ...config.gameInfo.new,
    render(ctx) {
        let imgName = 'new'
        let dataIndex = config.fram.IMG_Frams_LIST.animations[imgName][0]
        let data = config.fram.IMG_Frams_LIST.frames[dataIndex]
        ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], this.x, this.y, this.width, this.height)
    },
    isCanRender()
    {
        return databus.bestScore > databus.lastBestScore
    }
})