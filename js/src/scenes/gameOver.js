import Scene from '../base/scene'

//导入当前场景中的角色
import rePlay from '../roles/gameover/replay'
import gameover from '../roles/gameover/gameover'
import scorepanel from '../roles/gameover/scorepanel'
import news from '../roles/gameover/news'
import score from '../roles/gameover/score'
import bestscore from '../roles/gameover/bestscore'
import quality from '../roles/gameover/quality'
export default new Scene({
    roles:[
        gameover,
        scorepanel,
        rePlay,
        quality,
        news,
        score,
        bestscore,
    ],
    reuse(roles){
        // console.log("上一个场景的角色",roles)
        this.roles = [...roles,...this.roles] //先复用上一个场景的，再用自己场景的角色
    }
})