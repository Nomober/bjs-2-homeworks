class AlarmClock {
    constructor(){
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(addedTime, act){
        if (!addedTime || !act){
            throw new Error('Отсутствуют обязательные аргументы');
        }
        
        if (this.alarmCollection.some((element) => element.time === addedTime)){
            console.warn('Уже присутствует звонок на это же время')
        }

        this.alarmCollection.push({
            callback: act, 
            time: addedTime, 
            canCall: true,
    })
    }

    removeClock(timeToDelete){
        this.alarmCollection = this.alarmCollection.filter((element) => element.time !== timeToDelete) 
    }

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString([], {
             hour: "2-digit", minute: "2-digit" 
            })
    }

    start(){
        let mayCall = () => {
            this.alarmCollection.forEach(alarm => {
                if( alarm.time === this.getCurrentFormattedTime() && alarm.canCall === true){
                    alarm.canCall = false;
                    alarm.callback();
                }
            })
        }
       
        if(this.intervalId !== null){
            return
        }
        
        this.intervalId = setInterval((mayCall), 1000);
        
    }

    stop(){
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls(){
        this.alarmCollection.forEach((element) => element.canCall = true)
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}