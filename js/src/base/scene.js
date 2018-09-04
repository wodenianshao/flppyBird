/**
 * 场景基类
 */
export default class Scene{
    constructor(config){
        //游戏中所有的精灵
        //roles 是一个数组
        this.roles = config.roles
    }
    /**
     * 渲染当前场景
     * 遍历当前场景中所有的角色对象，分别调用每个角色的渲染自己的方法
     */
    update(){
        this.roles.forEach(role => {
            role.update()
        });
    }

    render(ctx,delta){
        this.roles.forEach(role => {
            role.render(ctx,delta)
        });
        //roles 是对象的时候
        // for(let role in this.roles){
        //     this.roles[role].render(ctx)
        // }
        this.update()
    }
}