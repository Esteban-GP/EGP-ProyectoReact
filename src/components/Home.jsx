import { useState } from 'react';
import banderaf1 from '/banderaf1.gif';
import Product from "../fragmentos/Product"

const Home = () => {
    return (
        <div>
            <div className="inset-0 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banderaf1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
                <h2 className="text-7xl font-bold text-center" style={{ fontFamily: 'Formula1-Wide, sans-serif', color: '#ee0000' }}>The Official <br /> Formula 1 Store</h2> <br />
                <p className="text-center text-2xl" style={{ color: 'white' }}>The best place to buy your favorite F1 team's merchandise.</p>
            </div>
            
            <h2 className='text-5xl text-center mt-20' style={{ fontFamily: 'Formula1Regular, sans-serif'}}>Highlighted Products</h2>
            <hr className='mb-20 mt-6 w-100 mx-auto ring-1' />
        </div>
    );
};

export default Home;