import Scene from '../base/scene'

//导入当前场景中的角色
import getready from '../roles/ready/getready'
import sky from '../roles/ready/sky'
import bird from '../roles/ready/bird'
import tap from '../roles/ready/tap'
import landList from '../roles/ready/land'
import sceneManage from '../scenes/sceneManage'
import databus from '../../databus'

export default new Scene({
    roles:[
        sky,
        getready,
        bird,
        tap,
        ...landList
    ],

    click(e){
        databus.gameOver = false
        sceneManage.changeScene('running')
    }
})