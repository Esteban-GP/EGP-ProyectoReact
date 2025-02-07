import { useState, useEffect } from 'react';
import banderaf1 from '/banderaf1.gif';
import Product from "../fragmentos/Product"

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch('http://localhost:5000/products');
                if (!response.ok) {
                    throw new Error('Error fetching products');
                }
                const data = await response.json();
                setProducts(data); // Assuming data is an array of products
            } catch (error) {
                console.error('Error:', error);
            }
        }

        getProducts();
    }, []);

    return (
        <div>
            <div className="inset-0 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${banderaf1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
                <h2 className="text-7xl font-bold text-center" style={{ fontFamily: 'Formula1-Wide, sans-serif', color: '#ee0000' }}>The Official <br /> Formula 1 Store</h2> <br />
                <p className="text-center text-2xl" style={{ color: 'white' }}>The best place to buy your favorite F1 team's merchandise.</p>
            </div>
            
            <h2 className='text-5xl text-center mt-20' style={{ fontFamily: 'Formula1Regular, sans-serif'}}>Highlighted Products</h2>
            <hr className='mb-20 mt-6 w-100 mx-auto ring-1' />
            <div className='grid grid-cols-5 gap-4 mx-50 mb-50'>
                {products.map(product => 
                    <Product key={product.id} product={product} />)}
            </div>
        </div>
    );
};

export default Home;