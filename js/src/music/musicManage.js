import databus from '../../databus'
const audios = databus.resources.audios
export default {
    currentMusicName: [],
    playMusicByName(name, isLoop) {
        audios[name].currentTime = 0
        audios[name].play()
        audios[name].loop = isLoop ? true : false
        let isHave = false
        this.currentMusicName.forEach(musicName => {
            if (musicName == name) {
                isHave = true
            }
        });
        if (!isHave) {
            this.currentMusicName.push(name)
        }
        // console.log(this.currentMusicName)
    },
    stopMusic() {
        const Length = this.currentMusicName.length
        for (let i = Length - 1; i >= 0; i--) {
            if (this.currentMusicName[i]) {
                audios[this.currentMusicName[i]].pause()
            }
            this.currentMusicName.pop()
        }
    }
}