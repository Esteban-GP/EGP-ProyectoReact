import React, { useState, useRef } from "react";
import "./ReactionGame.css";
import fondoGame from '/fondoGame.png';

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
        <>
            <div id="app" className="text-red-600 bg-no-repeat shadow-xl"
                style={{ backgroundImage: `url(${fondoGame})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center', fontFamily: 'Formula1-Bold, sans-serif' }}>
                <div id="lights-container" onClick={onClick}>
                    <div id="connector"></div>
                    {activeLights.map((state, index) => (
                        <LightStrip key={index} state={state} />
                    ))}
                </div>

                <h1 className="time mt-5">{result !== null ? result : ""}</h1>
                <div>Your best: {format(best)}</div>
            </div>

            <div class="max-w-2xl mx-auto my-20">

                <h2 class="text-2xl font-bold text-gray-800 mb-4">Average Human Reaction Time vs. F1 Drivers</h2>

                <p class="text-gray-700 mb-4">
                    The <span class="font-semibold">average human reaction time</span> for visual stimuli is around
                    <span class="text-blue-600 font-medium"> 250 milliseconds (0.25 seconds)</span>. This means that, on average,
                    it takes a quarter of a second for a person to respond to something they see. Reaction time can be
                    influenced by factors such as <span class="italic"> age, fatigue, distractions, and training</span>.
                </p>

                <p class="text-gray-700 mb-4">
                    In contrast, <span class="font-semibold"> elite athletes</span>, especially Formula 1 drivers, train extensively
                    to sharpen their reflexes. One of the fastest recorded reaction times in F1 history belongs to
                    <span class="text-red-600 font-medium"> Valtteri Bottas</span>, who managed an astonishing
                    <span class="text-green-600 font-bold"> 0.04-second</span> reaction time during a race start. This is
                    over six times faster than the average person’s response time!
                </p>

                <p class="text-gray-700">
                    Bottas’ incredible reaction showcases the <span class="font-semibold">elite level of reflexes</span> required in
                    F1, where <span class="italic">split-second decisions</span> can mean the difference between winning and losing.
                    While genetics play a role, F1 drivers also undergo <span class="font-semibold">intense training</span>,
                    including reaction drills with lights, reflex-testing machines, and high-speed simulations, allowing them to push
                    the limits of human performance.
                </p>
            </div>

        </>
    );
};

export default ReactionGame;