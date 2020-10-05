import React, { useRef, useState, useEffect } from "react";
// import {useHistory} from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import AccessTimeIcon from '@material-ui/icons/AccessTime';

const useStyles = makeStyles(() => ({
    root:{
        // margin: "4%",
        marginTop: "5%",
        // maxWidth:"70%",
        // maxHeight:"100%",
        paddingLeft:"60px",
        paddingRight:"60px",
    }
}));

const TimerComponent = ({test, timeRemaining}) => {
    
    // const history = useHistory();
    const [testDuration, setTestDuration] = useState(60000);
    const [timeMins, setTimeMins] = useState('00');
    const [timeSeconds, setTimeSeconds] = useState('00');
    let interval = useRef();
    // console.log(timeRemaining.time)

    // const FetchTime = () => {
    //     fetch(`/showtest?testid=${testId}`,{
    //         method:"get",
    //         headers:{
    //             "Content-Type":"application/json"
    //         },
    //     })
    //     .then((res)=>res.json())
    //     .then((test)=>{
    //         // setTime(test.test.testDuration) ;
    //         debugger;
    //         console.log(test);
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     });
    // }

    const startTimer = () => {
        const countDownTime = Date.now() + testDuration ;
        // console.log( "countdown",countDownTime)
        
        interval = setInterval(() => {
            const now = new Date() ;
            // console.log("now ",now)

            const distance = countDownTime - now
            // console.log("distance ",distance)

            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / (1000));

            if(distance < 0){
                //stop timer 
                clearInterval(interval)
                setTimeMins('00')
                setTimeSeconds('00')
                alert("Times up!!")
                // history.push('/')
            } 
            else{
                //update timer
                setTimeMins(minutes);
                setTimeSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(()=>{
        // FetchTime();
        // setTestDuration(test.testDuration)
        startTimer();
        return ()=>{
            clearInterval(interval);
        }
    },[])

    const  classes = useStyles();
    return(
        <div className={classes.root}>
            <AccessTimeIcon /> : {timeMins}:{timeSeconds}
        </div>   
    );
    
}

export default TimerComponent;