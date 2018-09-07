/**
 * 场景基类
 */
import databus from '../../databus'
export default class Scene{
    constructor(config){
        //游戏中所有的精灵
        //roles 是一个数组
        // this.roles = config.roles
        //为了传递进来的所有配置都能覆盖到，采用遍历config
        for(let k in config){
            this[k] = config[k]
        }
    }
    /**
     * 渲染当前场景
     * 遍历当前场景中所有的角色对象，分别调用每个角色的渲染自己的方法
     */
    update(delta){
        
    }

    render(ctx,delta){
        this.roles.forEach(role => {
            if(role.isCanRender()){
                role.render(ctx,delta)
            }
            if(!databus.gameOver){
                role.update()
            }
        });
        //roles 是对象的时候
        // for(let role in this.roles){
        //     this.roles[role].render(ctx)
        // }
        this.update(delta)
    }

    click(e){
        //点击点的坐标        
        // console.log(e)
        const clientX = e.touches[0].clientX
        const clientY = e.touches[0].clientY
        //遍历当前场景中的所有角色，分别触发每个角色的绑定事件
        this.roles.forEach( role =>{
            if (clientX >= role.x && clientX <= (role.x + role.width) && clientY >= role.y && clientY <= (role.y + role.height) ){
                //触发角色的点击事件
                role.click()
            }
        })
    }
    /**
     * 当前场景复用上一个场景的角色
     */
    reuse(roles){

    }
    /**
     * 初始化场景中所有角色的初始化坐标
     */
    init(){

    }
}