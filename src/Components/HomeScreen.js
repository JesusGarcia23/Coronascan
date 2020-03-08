import React, {useState} from 'react';
let myInterval;

const HomeScreen = (props) => {

    const [status, setStatus] = useState("");
    const [analysisStatus, setAnalysisStatus] = useState(false);
    const [analysisCounter, setAnalysisCounter] = useState(5)

    const startCounter = () => {
        console.log("Starting....");
        setAnalysisStatus(true);
    }

    const stopCounter = () => {
        setAnalysisStatus(false);
        setAnalysisCounter(5);
        clearInterval(myInterval);
    }

    if(analysisStatus){
        
            myInterval = setInterval(function(){
                if(analysisCounter >= 1){
                setAnalysisCounter(analysisCounter - 1);
            }
            }, 1000)
            if(analysisCounter <= 0){
                setAnalysisCounter(0);
                setAnalysisStatus(false);
                clearInterval(myInterval);
                setStatus("analyzing");
            }
      
    }

    if(status === "startAnalysis"){
        return (
            <div className='container'>
            <p className='container-text'>Press button and Hold for {analysisCounter} seconds</p>

            <button onMouseDown={() => startCounter()} onMouseUp={() => stopCounter()}>Press me!</button>
            </div>
        )
    }else if(status === "analyzing"){
        return (
            <div className='container'>
        <p className='container-text'>Coronavirus Scanner</p>
        
        <p  className='container-text'>Please press the button to start</p>

        <button onClick={e => {setStatus("startAnalysis")}}>Press me</button>
        
        </div>
           
        )
    }else{

    return(
        <div className='progressContainer'>
        <div className='progressBar'></div>
        <div className='progressBarDown'></div>
        </div>
    )
}
}

export default HomeScreen;



// MAIN SCREEN

// <div className='container'>
//         <p className='container-text'>Coronavirus Scanner</p>
        
//         <p  className='container-text'>Please press the button to start</p>

//         <button onClick={e => {setStatus("startAnalysis")}}>Press me</button>
        
//         </div>