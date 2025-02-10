import { useState } from 'react';

function Product({ product }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className='p-4 rounded-lg shadow-md bg-gray-50 relative transition hover:scale-105'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!product.hoverImg == "" &&
                <div className='relative mx-auto w-50 h-70'>
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
            }
            {product.hoverImg == "" &&
                <img
                    src={product.img}
                    alt={product.name}
                    className='w-60 h-70 object-cover rounded-md mx-auto'
                />
            }
            <h3 className='text-xl font-bold my-2'>{product.name}</h3>
            <div className='flex felx-center'>
                <p className='text-gray-600 text-bold py-2 ms-2'>{product.price} €</p>
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 ms-33 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-6" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}


export default Product;
