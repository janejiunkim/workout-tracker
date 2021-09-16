import React from "react";
import SquatTracker from "./SquatTracker";
import DeadliftTracker from "./DeadliftTracker";
import LungeTracker from "./LungeTracker";
import './Workout.css';

function WorkoutTracker(props) {
    return (
        <div className="workout">
            
            <SquatTracker />
            <DeadliftTracker />
            <LungeTracker />
        </div>

    );
}

export default WorkoutTracker;