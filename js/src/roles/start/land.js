//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'
//存储陆地角色的集合
const landList = []
for (var i = 0; i < 2; i++) {
    const landSprite = new Sprite({
        img: 'imgGather',
        ...config.gameInfo.land,
        x: i *config.gameInfo.land.width,
        render(ctx) {
            let imgName = 'land'
            let dataIndex = config.fram.IMG_Frams_LIST.animations[imgName][0]
            let data = config.fram.IMG_Frams_LIST.frames[dataIndex]
            ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], this.x, this.y, this.width, this.height)
        }
    })
    landList.push(landSprite)
}
export default landList