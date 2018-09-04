import Scene from '../base/scene'

//导入当前场景中的角色
import skyList from '../roles/running/sky'
import bird from '../roles/running/bird'
import pipeList from '../roles/running/pipe'
import landList from '../roles/running/land'

export default new Scene({
    roles:[
        ...skyList,
        ...pipeList,
        bird,
        ...landList
    ]
})