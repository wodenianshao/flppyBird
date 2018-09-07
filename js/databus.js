//状态管理器
/**
 * 1 提供公共的数据
 * 2 提供游戏状态
 */
export default {
    //游戏资源
    resources: {
        images: {},
        audios: {}
    },
    screenWdith: window.innerWidth,
    screenHeight: window.innerHeight,
    gameOver: false,
    //游戏积分
    score: 0,
    bestScore: 0,
    lastBestScore:0


}