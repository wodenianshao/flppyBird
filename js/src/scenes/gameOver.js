import Scene from '../base/scene'

//导入当前场景中的角色
import rePlay from '../roles/gameover/replay'
import gameover from '../roles/gameover/gameover'

export default new Scene({
    roles:[
        gameover,
        rePlay,
    ],
    reuse(roles){
        // console.log("上一个场景的角色",roles)
        this.roles = [...roles,...this.roles] //先复用上一个场景的，再用自己场景的角色
    }
})