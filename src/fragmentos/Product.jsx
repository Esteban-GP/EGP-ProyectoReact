import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            className='p-4 rounded-lg shadow-md bg-gray-50 relative transition hover:scale-105'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => navigate(`/product/${product.id}`)}
        >
            {!product.hoverImg == "" &&
                <div className='relative mx-auto w-60 h-70'>
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
                    className='w-60 h-70 object-contain rounded-md mx-auto'
                />
            }
            <h3 className='text-xl font-bold my-2'>{product.name}</h3>
            <div className='flex felx-center'>
                <p className='text-gray-600 text-bold py-2 ms-2'>{product.price} €</p>
            </div>
        </div>
    );
}


export default Product;
