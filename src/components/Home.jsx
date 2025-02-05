import { useState } from 'react';
import banderaf1 from '/banderaf1.gif';

const Home = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: `url(${banderaf1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center', filter: 'brightness(70%)' }}>
            <h2 className="text-7xl font-bold text-center text-red-500" style={{ fontFamily: 'Formula1-wIDE, sans-serif' }}>The Official <br /> Formula 1 Store</h2> <br />
            <p className="text-center text-2xl" style={{ color: 'white' }}>The best place to buy your favorite F1 team's merchandise.</p>
        </div>
    );
};

export default Home;