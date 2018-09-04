import Scene from '../base/scene'

//导入当前场景中的角色
import flappyBirdTitle from '../roles/start/birdtitle'
import sky from '../roles/start/sky'
import bird from '../roles/start/bird'
import rePlay from '../roles/start/replay'
import landList from '../roles/start/land'

export default new Scene({
    roles:[
        sky,
        flappyBirdTitle,
        bird,
        rePlay,
        ...landList
    ]
})