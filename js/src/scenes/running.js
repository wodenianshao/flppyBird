import Scene from '../base/scene'

//导入当前场景中的角色
import skyList from '../roles/running/sky'
import bird from '../roles/running/bird'
import pipeList from '../roles/running/pipe'
import landList from '../roles/running/land'
import score from '../roles/running/score'
import databus from '../../databus'
import sceneManage from '../scenes/sceneManage'
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

    //初始化当前场景中所有角色的坐标
    init() {
        this.roles.forEach(role => {
            role.init()
        });
    },

    click(e) {
        //提供一个向上的负速度
        if (!databus.gameOver) {
            this.bird.speed = -7
        }
    },

    /**
     * 是否与陆地碰撞
     */
    isLanded() {
        return this.bird.y >= this.land.y
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
            }
        })
    },

    update(delta) {
        // console.log("发生碰撞",this.pipeList)
        if (!databus.gameOver) {
            if (this.collisionDection()) {
                databus.gameOver = true
            }
            //积分
            this.setScore()
        }
        if (this.isLanded()) {
            databus.gameOver = true
            sceneManage.changeScene('gameOver')
        }
    }
})