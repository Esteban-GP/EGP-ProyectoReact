import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FullProduct({ products, user }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(products.find((p) => p.id === id));
    }, [products, id]);

    async function addToCart(){
        user.cart.push(product.id)
        const response = await fetch(`http://localhost:5000/users/${user.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
    }

    return (
        <div className='bg-gray-100 flex flex-col flex-grow mx-auto' style={{ minHeight: 'calc(100vh - 89px)' }}>
            {product && (
                <div className='my-auto mx-15 mt-15 mx-auto flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-10'>
                    <div className="flex flex-wrap justify-center gap-10 w-full md:w-auto">
                        {product.hoverImg ? (
                            <>
                                <div className="max-w-[350px] md:max-w-[600px] md:ms-10">
                                    <img src={product.img} alt="" className='object-contain w-full h-auto border border-red-700 rounded-xl shadow-lg aspect-square' />
                                </div>
                                <div className="max-w-[350px] md:max-w-[600px] md:ms-10">
                                    <img src={product.hoverImg} alt="" className='object-contain w-full h-auto border border-red-700 rounded-xl shadow-lg aspect-square' />
                                </div>
                            </>
                        ) : (
                            <div className="max-w-[350px] md:max-w-[600px] md:ms-10">
                                <img src={product.img} alt="" className='object-contain w-full h-auto border border-red-700 rounded-xl shadow-lg bg-gray-50 p-2 aspect-square' />
                            </div>
                        )}
                    </div>

                    <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                        <h2 className='text-4xl font-bold mb-5'>{product.name}</h2>
                        <h2 className='text-2xl text-gray-800 mb-7'>{product.price} €</h2>
                        <h2 className='w-96 md:w-[500px] text-lg mb-5'>{product.description}</h2>

                        <button className="focus:outline-none text-white mb-20 transition bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-12 py-3 mt-8 mb-2"
                        onClick={addToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FullProduct;
