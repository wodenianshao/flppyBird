import Sprite from '../../base/sprite'
import databus from '../../../databus'
import config from '../../../config/config'

export default new Sprite({
    img: 'imgGather',
    ...config.gameInfo.gameOverBestScore,
    render(ctx) {
        let score = databus.bestScore
        let numList = []
        if (score == 0) {
            numList.push(score)
        }
        while (score >= 1) {
            numList.push(Math.floor(score % 10))
            score = score / 10
        }
        let numTotalLength = (this.width * numList.length + ((numList.length - 1) * this.gap)) / 2
        for (let i = numList.length - 1; i >= 0; i--) {
            let x = (this.x - numTotalLength + this.width / 2) + (this.gap + this.width) * (numList.length - 1 - i)
            let imgname = config.resultScoreImg[numList[i]]
            let dataIndex = config.fram.IMG_Frams_LIST.animations[imgname][0]
            let data = config.fram.IMG_Frams_LIST.frames[dataIndex]
            ctx.drawImage(databus.resources.images[this.img], data[0], data[1], data[2], data[3], x, this.y, this.width, this.height)
        }
    }
})