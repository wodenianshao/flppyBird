/**
 * 场景管理器
 * 1 管理游戏中的所有场景
 * 2 渲染场景
 * 3 切换场景
 * 3 处理当前场景的事件
 */
import start from './start'
export default {
    //游戏场景集合
    scenesList:{
        start
    },
    currentSceneName: 'start',
    //渲染场景
    render(ctx,delta){
        //根据当前场景的名称，获取当前场景
        //并且渲染当前场景
        // console.log("渲染当前场景",this.currentSceneName,this.scenesList[this.currentSceneName])
        this.scenesList[this.currentSceneName].render(ctx,delta)
    },
    /**
     * 切换场景
     */
    changeScene(){

    }
}