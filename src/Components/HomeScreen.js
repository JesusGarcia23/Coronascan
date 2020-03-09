import React, {useState} from 'react';

const HomeScreen = (props) => {

    const [status, setStatus] = useState("");
    let myInterval, myTimeOut;
    let randomTime = Math.floor(Math.random() * (10000 - 6000 + 1) + 6000);

    const changeStatus = (event, theStatus) => {
        if(event){
        event.preventDefault();
        }
        setStatus(theStatus);
    }

    if(status === "analyzing"){
        setTimeout(function() {
        setStatus("finished");
        }, randomTime);
        return (
            <div className='progressContainer'>
            <div className='progressBar'></div>
            <div className='progressBarDown'></div>
            </div>
           
        )
    }else if(status === "finished"){
        clearTimeout(myTimeOut);
        return (
            <div className='container'>
            <p className='result-text'>NEGATIVE</p>
            <p className='icon-face'>&#9786;</p>

            <button onClick={ e => {changeStatus(e, "start")}} className='try-again'>Restart</button>
            </div>
        )
    }else{
    return(
        <div className='container'>
        <p className='container-text'>Coronavirus Scanner</p>
        
        <p  className='container-second-text'>Please press the fingerprint to start</p>

        <i onClick={ e => {changeStatus(e, "analyzing")}} class="material-icons" >fingerprint</i>
        
        </div>
    )
}
}

export default HomeScreen;



// VERSION 2 (ON PROGRESS)

// const [analysisStatus, setAnalysisStatus] = useState(false);
// const [analysisCounter, setAnalysisCounter] = useState(5);

// if(analysisStatus) {
//     if(analysisCounter >= 1) {
//           myInterval = setInterval(function(){
//                 if(analysisCounter >= 1){
//                 setAnalysisCounter(analysisCounter - 1);
//             }
//             }, 1000)
//     }else{
//         setAnalysisStatus(false);
//         clearInterval(myInterval);
//         setStatus("analyzing");
//     }

// }


// const startCounter = (e) => {
//     e.preventDefault();
//     setAnalysisStatus(true)

// }

// const stopCounter = (e) => {
//     e.preventDefault();
//     setAnalysisCounter(5);
//     setAnalysisStatus(false);
//     clearTimeout(myTimeOut);
//     clearInterval(myInterval);
// }

// if(status === "startAnalysis"){
//     return (
//         <div className='container'>
//         <p className='container-text'>Press button and Hold for {analysisCounter} seconds</p>

//         <button onMouseDown={(e) => startCounter(e)} onMouseUp={(e) => stopCounter(e)}>Press me!</button>
//         </div>
//     )
//     }else 

// function progressBar() {
//     myTimeOut =  setTimeout(function() {
//         clearInterval(myInterval);
//         setAnalysisCounter(5);
//         setStatus("finished");
//     }, 5000);
// }


// if(status === "startAnalysis"){
//     return (
//         <div className='container'>
//         <p className='container-text'>Press button and Hold for {analysisCounter} seconds</p>

//         <button onMouseDown={(e) => startCounter(e)} onMouseUp={(e) => stopCounter(e)}>Press me!</button>
//         </div>
//     )
// }else 

// <div className='container'>
//         <p className='container-text'>Coronavirus Scanner</p>
        
//         <p  className='container-text'>Please press the button to start</p>

//         <button onClick={e => {setStatus("startAnalysis")}}>Press me</button>
        
//         </div>


// if(analysisStatus){
        
//     myInterval = setInterval(function(){
//         if(analysisCounter >= 1){
//         setAnalysisCounter(analysisCounter - 1);
//     }
//     }, 1000)


//     if(analysisCounter <= 0){
//         clearInterval(myInterval);
//         setAnalysisStatus(false);
//         changeStatus(null, "analyzing");
//         setTimeout(function(){
//             setAnalysisCounter(5)
//         }, 100);
//     }

// }