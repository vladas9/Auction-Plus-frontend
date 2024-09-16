import React, {useState, useEffect} from "react";
import styles from "./TimeBar.module.css"
const TimeBar = ({duration}) =>{
    const [time, setTime] = useState(duration);

    useEffect(()=>{
        if(time>0){
            const interval = setInterval(() =>{
                setTime(prevTime => {
                    if (prevTime>0){
                        return prevTime-1; 
                    }else{
                        clearInterval(interval);
                        return 0;
                    }
                });
            }, 1000)
            return()=>clearInterval(interval)
        }
    },[time])
    const percentage = (time/duration)*100;

    const formatTime = seconds => new Date(seconds * 1000).toISOString().slice(14, 19);

    return (
        <div className={styles.timerBarContainer}>
          <div className={styles.timerBar}>
            <div className={styles.progressBar} style={{ width: `${percentage}%` }}></div>
          </div>
          <span className={styles.timeLabel}>
            {formatTime(time)} / {formatTime(duration)}
          </span>
        </div>
      );
}
export default TimeBar;