import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FullProduct({ products }) {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        setProduct(products.find((p) => p.id === id));
    }, [products, id]);

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

                        <form className="w-full max-w-xs space-y-3">
                            <label htmlFor="size" className="text-xl">Size</label>
                            <select id="size" className="border border-gray-300 bg-white text-gray-900 text-lg rounded-lg w-full p-2">
                                <option value="">Choose your size</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </form>

                        <button className="focus:outline-none text-white mb-20 bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-lg px-12 py-3 mt-8 mb-2">
                            Add to Cart
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FullProduct;
