function Cart({ products, user }) {

    return (
        <div className="m-10 flex flex-col lg:flex-row mx-4 lg:mx-40 justify-between gap-4 lg:gap-15">
            <div className="flex flex-col space-y-3">
                {user.cart.flatMap(id =>
                    products.filter(product => product.id === id).map(product =>
                        <div key={product.id} className="bg bg-gray-100 flex flex-col lg:flex-row p-4 rounded-lg border border-red-700" style={{ fontFamily: 'Formula1Regular, sans-serif' }}>
                            <img src={product.img} alt={product.name} className="w-full lg:w-[8rem] object-contain rounded-xl shadow-lg aspect-square" />
                            <div className="mt-4 lg:mt-0 lg:ml-4">
                                <h2 className="text-2xl">{product.name}</h2>
                                <p className="mt-2 lg:mt-0 lg:ml-4 lg:mr-20 font-sans">{product.description}</p>
                            </div>
                            
                            <div className="flex flex-col mt-4 lg:mt-0 lg:ml-auto justify-between">
                                <p>{product.price} €</p>
                                <span>Quantity</span>
                            </div>
                        </div>
                    )
                )}
            </div>
            <div className="flex flex-col bg bg-gray-100 rounded-xl p-4 my-auto w-full lg:w-140">
                <h2 className="text-2xl mb-3" style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Payment</h2>
                {user.cart.flatMap(id =>
                    products.filter(product => product.id === id).map(product =>
                        <div key={product.id} className="">
                            <div className="flex justify-between">
                                <p>{product.name}</p>
                                <p>{product.price} €</p>
                            </div>
                            <hr className="h-px my-2 bg-gray-400 border-0" />
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Cart;
