/**
 * 
 * 游戏中基本数据配置
 */
import databus from '../databus'
const screenWidth = databus.screenWdith
const screenHeight = databus.screenHeight
const IMG_NAME_LIST = [
    "imgGather.png",
]

const MUSIC_NAME_LIST = [
    "10549.mp3"
]

const IMG_Frams_LIST = {
    frames: [
        [292, 2, 288, 512],
        [2, 2, 288, 512],
        [242, 882, 48, 48],
        [242, 832, 48, 48],
        [574, 616, 48, 48],
        [552, 566, 48, 48],
        [552, 516, 48, 48],
        [524, 616, 48, 48],
        [502, 566, 48, 48],
        [502, 516, 48, 48],
        [474, 630, 48, 48],
        [198, 802, 32, 32],
        [306, 788, 10, 10],
        [294, 788, 10, 10],
        [282, 788, 10, 10],
        [424, 702, 126, 14],
        [242, 932, 80, 28],
        [524, 666, 80, 28],
        [324, 924, 26, 28],
        [280, 630, 116, 70],
        [398, 630, 74, 48],
        [314, 800, 26, 28],
        [164, 730, 116, 70],
        [232, 802, 80, 28],
        [414, 926, 24, 44],
        [414, 972, 16, 44],
        [410, 880, 24, 44],
        [410, 834, 24, 44],
        [410, 788, 24, 44],
        [388, 972, 24, 44],
        [388, 926, 24, 44],
        [384, 880, 24, 44],
        [384, 834, 24, 44],
        [384, 788, 24, 44],
        [164, 516, 336, 112],
        [338, 876, 44, 44],
        [338, 830, 44, 44],
        [292, 878, 44, 44],
        [292, 832, 44, 44],
        [434, 680, 32, 14],
        [352, 922, 12, 14],
        [370, 804, 12, 14],
        [370, 788, 12, 14],
        [356, 804, 12, 14],
        [356, 788, 12, 14],
        [342, 804, 12, 14],
        [342, 788, 12, 14],
        [510, 680, 12, 14],
        [496, 680, 12, 14],
        [482, 680, 12, 14],
        [468, 680, 12, 14],
        [416, 680, 16, 20],
        [406, 702, 16, 20],
        [398, 680, 16, 20],
        [388, 702, 16, 20],
        [370, 702, 16, 20],
        [352, 702, 16, 20],
        [334, 702, 16, 20],
        [316, 702, 16, 20],
        [298, 702, 16, 20],
        [280, 702, 16, 20],
        [110, 516, 52, 320],
        [110, 516, 52, 320],
        [56, 516, 52, 320],
        [2, 516, 52, 320],
        [2, 838, 238, 126],
        [2, 966, 204, 54],
        [282, 724, 196, 62],
        [208, 966, 178, 48],
        [164, 630, 114, 98],
        [164, 802, 32, 32]
    ],
    animations: {
        "bg_day": [0],
        "bg_night": [1],
        "bird0_0": [2],
        "bird0_1": [3],
        "bird0_2": [4],
        "bird1_0": [5],
        "bird1_1": [6],
        "bird1_2": [7],
        "bird2_0": [8],
        "bird2_1": [9],
        "bird2_2": [10],
        "black": [11],
        "blink_00": [12],
        "blink_01": [13],
        "blink_02": [14],
        "brand_copyright": [15],
        "button_menu": [16],
        "button_ok": [17],
        "button_pause": [18],
        "button_play": [19],
        "button_rate": [20],
        "button_resume": [21],
        "button_score": [22],
        "button_share": [23],
        "font_048": [24],
        "font_049": [25],
        "font_050": [26],
        "font_051": [27],
        "font_052": [28],
        "font_053": [29],
        "font_054": [30],
        "font_055": [31],
        "font_056": [32],
        "font_057": [33],
        "land": [34],
        "medals_0": [35],
        "medals_1": [36],
        "medals_2": [37],
        "medals_3": [38],
        "new": [39],
        "number_context_00": [40],
        "number_context_01": [41],
        "number_context_02": [42],
        "number_context_03": [43],
        "number_context_04": [44],
        "number_context_05": [45],
        "number_context_06": [46],
        "number_context_07": [47],
        "number_context_08": [48],
        "number_context_09": [49],
        "number_context_10": [50],
        "number_score_00": [51],
        "number_score_01": [52],
        "number_score_02": [53],
        "number_score_03": [54],
        "number_score_04": [55],
        "number_score_05": [56],
        "number_score_06": [57],
        "number_score_07": [58],
        "number_score_08": [59],
        "number_score_09": [60],
        "pipe2_down": [61],
        "pipe2_up": [62],
        "pipe_down": [63],
        "pipe_up": [64],
        "score_panel": [65],
        "text_game_over": [66],
        "text_ready": [67],
        "title": [68],
        "tutorial": [69],
        "white": [70]
    }
}

const gameInfo = {
    title: {
        x: (screenWidth - 178) / 2,
        y: 100,
        width: 178,
        height: 48,
    },
    sky: {
        x: 0,
        y: 0,
        width: screenWidth,
        height: screenHeight,
        speed:-2,
    },
    bird: {
        x: (screenWidth - 48) / 2,
        y: 180,
        width: 48,
        height: 48,
        wingSpeed: 13,
        a:9.8  //加速度
    },
    replay: {
        x: (screenWidth - 116) / 2,
        y: (screenHeight - 70) / 3 * 2,
        width: 116,
        height: 70,
    },
    land: {
        x: 0,
        y: screenHeight-112,
        width: 336,
        height: 112,
        speed:-2,
    },
    tap: {
        x: (screenWidth - 114) / 2,
        y: (screenHeight - 70) / 3 * 2,
        width: 114,
        height: 98,
    },
    getReady: {
        x: (screenWidth - 196) / 2,
        y: 100,
        width: 196,
        height: 62,
    },
    birdReady: {
        x: (screenWidth - 48) / 3,
        y: 100,
        width: 48,
        height: 48,
        wingSpeed: 13,
        a:9.8  //加速度
    },
    pipe: {
        x: 0,
        y: 0,
        width: 52,
        height: 320,
        verticalGap:150, //垂直间距
        horizontalGap:130, //水平间距
        speed:-2,
    },
    gameOver: {
        x: (screenWidth - 204) / 2,
        y: 100,
        width: 204,
        height: 54,
    },
}

const config = {
    //游戏资源
    resources: {
        IMG_NAME_LIST,
        MUSIC_NAME_LIST
    },
    fram: {
        IMG_Frams_LIST
    },
    gameInfo,
}
export default config