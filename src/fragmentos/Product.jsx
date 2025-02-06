import React, { useState } from 'react';

function Product({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className='p-4 rounded-lg shadow-md bg-gray-50 relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='relative w-full h-70'>
                <img 
                    src={product.img} 
                    alt={product.name} 
                    className={`absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-700 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                />
                <img 
                    src={product.hoverImg} 
                    alt={product.name} 
                    className={`absolute top-0 left-0 w-full h-full object-cover rounded-md transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} 
                />
            </div>
            <h3 className='text-xl font-bold mt-2'>{product.name}</h3>
            <p className='text-gray-600 text-right text-bold'>{product.price} €</p>
        </div>
    );
}


export default Product;
