//导入角色基类
import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'
import sceneManage from '../../scenes/sceneManage'
import music from '../../music/musicManage'
export default new Sprite({
    img: 'imgGather',
    ...config.gameInfo.replay,
    render(ctx) {
        let imgName = 'button_play'
        let dataIndex = config.fram.IMG_Frams_LIST.animations[imgName][0]
        let data = config.fram.IMG_Frams_LIST.frames[dataIndex]
        ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], this.x, this.y, this.width, this.height)
    },
    click(){
        if(databus.bestScore > databus.lastBestScore){
            databus.lastBestScore = databus.bestScore
        }
        music.stopMusic()
        sceneManage.changeScene('ready')
    }
})