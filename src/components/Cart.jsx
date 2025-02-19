import { useState, useMemo } from "react";

function Cart({ products, user }) {
    const [checkedProds, setCheckedProds] = useState([]);

    const productQuantities = useMemo(() => {
        const counts = {};
        user.cart.forEach(id => {
            counts[id] = (counts[id] || 0) + 1;
        });
        return counts;
    }, [user.cart]);

    const calculateTotal = useMemo(() => {
        return Object.keys(productQuantities).reduce((total, id) => {
            const product = products.find(product => product.id === id);
            return total + (product.price * productQuantities[id]);
        }, 0);
    }, [productQuantities, products]);

    function addProd(id) {
        return () => {
            setCheckedProds([...checkedProds, id]);
        };
    }

    function elimProd(id) {
        return () => {
            const index = checkedProds.indexOf(id);
            if (index > -1) {
                setCheckedProds(checkedProds.filter(prodId => prodId !== id));
            }
        };
    }

    return (
        <div className="m-10 flex flex-col lg:flex-row mx-4 lg:mx-40 justify-between gap-4 lg:gap-15">
            {/* Lista de productos en el carrito */}
            <div className="flex flex-col space-y-3">
                {Object.keys(productQuantities)
                    .filter(id => !checkedProds.includes(id)) // Evita renderizar productos ya marcados
                    .map(id =>
                        products
                            .filter(product => product.id === id)
                            .map(product => (
                                <div key={product.id} className="bg-gray-100 flex flex-col lg:flex-row p-4 rounded-lg border border-red-700" style={{ fontFamily: 'Formula1Regular, sans-serif' }}>
                                    <img src={product.img} alt={product.name} className="w-full lg:w-[8rem] object-contain rounded-xl shadow-lg aspect-square" />
                                    <div className="mt-4 lg:mt-0 lg:ml-4">
                                        <h2 className="text-2xl">{product.name}</h2>
                                        <p className="mt-2 lg:mt-0 lg:ml-4 lg:mr-20 font-sans">{product.description}</p>
                                    </div>

                                    <div className="flex flex-col lg:mt-0 lg:ml-auto justify-between">
                                        <p>{product.price} €</p>
                                        <div className="flex flex-col">
                                            <span className="mb-1">Quantity: </span>
                                            <div className="flex bg bg-gray-300 rounded-full justify-between h-7 items-center">
                                                <button className="bg bg-red-600 w-7 h-7 rounded-full text-white" onClick={elimProd(product.id)}>-</button>
                                                <span>{productQuantities[id]}</span>
                                                <button className="bg bg-red-600 w-7 h-7 rounded-full text-white" onClick={addProd(product.id)}>+</button>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            ))
                    )
                }
            </div>

            {/* Sección de Pago */}
            <div className="flex flex-col bg-gray-100 rounded-xl p-4 h-full w-full lg:w-140">
                <h2 className="text-2xl mb-3" style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Payment</h2>
                {Object.keys(productQuantities).map(id =>
                    products.filter(product => product.id === id).map(product => (
                        <div key={product.id} className="">
                            <div className="flex justify-between">
                                <p>{product.name}</p>
                                <p>{productQuantities[id]} x {product.price} €</p>
                            </div>
                            <hr className="h-px my-2 bg-gray-400 border-0" />
                        </div>
                    ))
                )}
                <div className="flex flex-center space-x-3 items-center ms-auto">
                    <h2 className="text-xl mb-0.5" style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Total:</h2>
                    <p>{calculateTotal} €</p>
                </div>
                
                <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-20 w-full"
                    >
                        Pay Up
                </button>
            </div>
        </div>
    );
}

export default Cart;
