import React, {useState} from "react";
import Sets from "./Sets";

const DeadliftTracker = (props) => {
    let i = 1;
    
    const [state, setState] = useState({
        repCount: 1,
        setCount: 1,
        setArr: []
    });

    let setHistory = state.setArr.map((set, index) => {
        return <Sets key={index} sets={set.setCount} reps={set.repCount} exercise={"deadlifts"}/>
    })

    const increaseRepCount = () => {
        setState({
            repCount: state.repCount+1,
            setCount: state.setCount,
            setArr: state.setArr
        });
    };

    const decreaseRepCount = () => {
        setState({
            repCount: state.repCount-1,
        });
    };

    

    const endSet = () => {
        let savedCount = state.repCount;
        let savedSet = state.setCount;
        const finishedSet = {
            repCount: savedCount,
            setCount: savedSet
        };

        const tempArr = state.setArr;
        tempArr.push(finishedSet);
        
        
        setState({
            repCount: 0,
            setCount: state.setCount +1,
            setArr: tempArr
        });
        
        console.log(state);
    }

    

    return (
        <div className="deadlifttracker">
            <h2>Deadlift Tracker</h2>
            <p>Set #: {state.setCount}</p>
            <p>{state.repCount} squats</p>
            <button onClick={increaseRepCount}>+</button>
            <button onClick={decreaseRepCount}>-</button>
            <button onClick={endSet}>End set</button>
            
            <h2>Past sets</h2>
            {setHistory}
        </div>
    )
}

export default DeadliftTracker;