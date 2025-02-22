import React, { useState, useRef } from "react";
import "./ReactionGame.css";
import fondof1 from '/fondo2f1.png';

const LIGHT_ON_INTERVAL = 1000;
const IDLE = "idle";
const RUNNING = "running";
const WAITING = "waiting";

const LightStrip = React.forwardRef(({ state }, ref) => {
    return (
        <div className="light-container">
            {[0, 1, 2, 3].map((lightId) => (
                <div
                    key={lightId}
                    className={`light ${state === "red" ? "on" : state === "green" ? "green" : "off"}`}
                ></div>
            ))}
        </div>
    );
});

const ReactionGame = () => {
    const [state, setState] = useState(IDLE);
    const [activeLights, setActiveLights] = useState(["off", "off", "off", "off", "off"]);
    const [result, setResult] = useState("00.000");
    const [startTime, setStartTime] = useState(null);
    const [best, setBest] = useState(0);
    const timerId = useRef(null);
    const fuzzerId = useRef(null);

    const start = () => {
        setActiveLights(["red", "off", "off", "off", "off"]);
        setResult("00.000");
        setStartTime(null);

        let step = 1;
        timerId.current = setInterval(() => {
            if (step < 5) {
                setActiveLights((prev) => prev.map((light, index) => (index < step ? "red" : "off")));
                step++;
            } else {
                clearInterval(timerId.current);
                fuzzedLightsOut();
            }
        }, LIGHT_ON_INTERVAL);
    };

    const fuzzedLightsOut = () => {
        const fuzzyInterval = Math.random() * 1800 + 2400;
        fuzzerId.current = setTimeout(() => {
            setActiveLights(["green", "green", "green", "green", "green"]);
            setStartTime(Date.now());
            setState(WAITING);
        }, fuzzyInterval);
    };

    const onClick = () => {
        if (state === RUNNING) {
            setState(IDLE);
            setResult("JUMP START!");
            setActiveLights(["off", "off", "off", "off", "off"]);
            clearInterval(timerId.current);
            clearTimeout(fuzzerId.current);
        } else if (state === IDLE) {
            setState(RUNNING);
            start();
        } else if (state === WAITING) {
            setState(IDLE);
            const timeDiff = Date.now() - startTime;
            setResult(format(timeDiff));
            const newBest = best === 0 ? timeDiff : Math.min(best, timeDiff);
            setBest(newBest);
            setTimeout(() => {
                setActiveLights(["off", "off", "off", "off", "off"]);
            }, 2000);
        }
    };

    const format = (ms) => {
        const secs = (ms / 1000).toFixed(3);
        return `${parseInt(secs) < 10 ? "0" : ""}${secs}`;
    };

    return (
        <div id="app"  className="text-white bg-no-repeat -z-10" 
        style={{ backgroundImage: `url(${fondof1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center', fontFamily: 'Formula1-Bold, sans-serif' }}>
            <div id="lights-container" onClick={onClick}>
                <div id="connector"></div>
                {activeLights.map((state, index) => (
                    <LightStrip key={index} state={state} />
                ))}
            </div>

            <h1 className="time">{result !== null ? result : ""}</h1>
            <div>Your best: {format(best)}</div>
        </div>
    );
};

export default ReactionGame;