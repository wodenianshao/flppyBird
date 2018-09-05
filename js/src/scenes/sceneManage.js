/**
 * 场景管理器
 * 1 管理游戏中的所有场景
 * 2 渲染场景
 * 3 切换场景
 * 4 处理当前场景的事件
 */
import start from './start'
import ready from './ready'
import running from './running'
import gameOver from './gameOver'
export default {
    //游戏场景集合
    scenesList:{
        ready,
        start,
        running,
        gameOver,
    },
    //当前场景
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
    changeScene(sceneName){
        //切换场景时决定是否复用上一个场景中的角色
        this.scenesList[sceneName].reuse(this.scenesList[this.currentSceneName].roles)
        this.scenesList[sceneName].init()
        this.currentSceneName = sceneName
    },
    /**
     * 触发当前场景的事件
     * @param {object} e 事件对象
     */
    click(e){
        this.scenesList[this.currentSceneName].click(e)
    }
}