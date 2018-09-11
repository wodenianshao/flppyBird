import Scene from '../base/scene'

//导入当前场景中的角色
import skyList from '../roles/running/sky'
import bird from '../roles/running/bird'
import pipeList from '../roles/running/pipe'
import landList from '../roles/running/land'
import score from '../roles/running/score'
import databus from '../../databus'
import sceneManage from '../scenes/sceneManage'
import music from '../music/musicManage'
import config from '../../config/config';
export default new Scene({
    roles: [
        ...skyList,
        ...pipeList,
        ...landList,
        bird,
        score,
    ],
    bird,
    pipeList,
    land: landList[0],
    count: 0,
    //初始化当前场景中所有角色的坐标
    init() {
        this.roles.forEach(role => {
            role.init()
        });
        // 0 - 2
        let index = Math.ceil(Math.random() * 1)
        // console.log(index)
        music.playMusicByName(config.backBgMusic[index], true)
    },

    click(e) {
        //提供一个向上的负速度
        if (!databus.gameOver) {
            music.playMusicByName('birdFly')
            this.bird.speed = -7
        }
    },

    /**
     * 是否与陆地碰撞
     */
    isLanded() {
        return this.bird.y >= this.land.y
    },

    isFlyTooHeight() {
        return this.bird.y <= 0
    },
    /**
     * 碰撞检测
     */
    collisionDection() {
        //遍历所有的管道对象，判断小鸟中心点坐标在不在管道内
        // console.log("遍历所有的管道对象，判断小鸟中心点坐标在不在管道内")
        return this.pipeList.some(pipe => {
            return this.iscollisionDection(pipe.position.top, this.bird) || this.iscollisionDection(pipe.position.bottom, this.bird)
        })
    },

    iscollisionDection(pipe, bird) {
        if (bird.x >= pipe.startX && bird.x <= pipe.endX && bird.y >= pipe.startY && bird.y <= pipe.endY) {
            return true
        }
        return false
    },

    /**
     * 
     * @param {游戏积分} delta 
     */
    setScore() {
        this.pipeList.forEach(pipe => {
            if (!pipe.scoreMark && this.bird.x >= (pipe.x + pipe.width)) {
                pipe.scoreMark = true
                databus.score += 1
                if (databus.score > databus.bestScore) {
                    databus.bestScore = databus.score
                }
            }
        })
    },
    /**
     * 1 当小鸟处于中间位置时开启检测(小鸟与下一个管道间距<=horizontalGap/2)
     * 2 计算出精确的小鸟与下一个管道的距离，已知管道速度，计算出管道达到的时间
     * 3 计算出小鸟当前的坐标和管道中心点坐标的垂直距离，由上一步得出的时间到的上升或者下降的速度
     */
    getNextPipe() {
        let nextPipe = null
        this.pipeList.forEach(pipe => {
            if (!pipe.autoMark && pipe.x - this.bird.x >= 0 && (pipe.x - this.bird.x <= 110)) { //config.gameInfo.pipe.horizontalGap * 2 / 3
                nextPipe = pipe
                pipe.autoMark = true
            }
        })
        return nextPipe
    },

    getSpeed(pipe) {
        // let s_j = pipe.x - this.bird.x
        // let a = 9.8
        // if (s_j > 0) {
        //     a = -9.8
        // }
        // let t1 = s_j / Math.abs(config.gameInfo.pipe.speed)  //刚开始时小鸟距离钢管的时间
        // let s_u = (pipe.position.top.middle - this.bird.y) / 30
        // let t2 = Math.sqrt(Math.abs(s_u / (1 / 2 - a)))      //上升的时间
        // let v0 = a * t2
        // let s_max_h = s_j + Math.abs(config.gameInfo.pipe.speed) * (t2 + t1)
        // return v0
    },

    update(delta) {
        // console.log("发生碰撞", this.pipeList)
        if (!databus.gameOver) {
            if (this.collisionDection()) {
                databus.gameOver = true
                music.playMusicByName('fail')
            }
            //积分
            this.setScore()
            let nextPipe = this.getNextPipe()
            if (nextPipe) {
                // this.bird.speed = this.getSpeed(nextPipe)
            }
        }
        if (this.isFlyTooHeight()) {
            databus.gameOver = true
        }
        if (this.isLanded()) {
            if (!this.collisionDection()) {
                music.playMusicByName('fail')
            }
            databus.gameOver = true
            sceneManage.changeScene('gameOver')
        }
    }
})