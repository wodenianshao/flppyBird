import Scene from '../base/scene'

//导入当前场景中的角色
import skyList from '../roles/running/sky'
import bird from '../roles/running/bird'
import pipeList from '../roles/running/pipe'
import landList from '../roles/running/land'
import databus from '../../databus'
export default new Scene({
    roles: [
        ...skyList,
        ...pipeList,
        ...landList,
        bird,
    ],
    bird,
    pipeList,
    click(e) {
        // console.log(this.roles[2])
        //提供一个向上的负速度
        this.bird.speed = -7
    },

    iscollisionDection(pipe, bird) {
        if (bird.x >= pipe.startX && bird.x <= pipe.endX && bird.y >= pipe.startY && bird.y <= pipe.endY) {
            return true
        }
        return false
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
    update(delta) {
        // console.log("发生碰撞",this.pipeList)
        if (this.collisionDection()) {
            databus.gameOver = true
        }
    }
})