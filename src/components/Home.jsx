import { useState, useEffect } from 'react';
import banderaf1 from '/banderaf1.gif';
import Product from "../fragmentos/Product"

function Home({ products }) {
    const highlightedProducts = ["1", "2", "3", "4", "5"];
    
    return (
        <div>
            <div className="inset-0 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banderaf1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
                <h2 className="text-7xl font-bold text-center" style={{ fontFamily: 'Formula1-Wide, sans-serif', color: '#ee0000' }}>The Official <br /> Formula 1 Store</h2> <br />
                <p className="text-center text-2xl" style={{ color: 'white' }}>The best place to buy your favorite F1 teams merchandise.</p>
            </div>
            
            <h2 className='text-5xl text-center mt-20' style={{ fontFamily: 'Formula1Regular, sans-serif'}}>Highlighted Products</h2>
            <hr className='mb-20 mt-6 w-100 mx-auto ring-1' />
            <div className='grid grid-cols-1 mx-50 mb-50 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5'>
                {products.map(product => 
                    (highlightedProducts.includes(product.id) &&
                        <Product key={product.id} product={product} />))
                }
            </div>
        </div>
    );
};

export default Home;