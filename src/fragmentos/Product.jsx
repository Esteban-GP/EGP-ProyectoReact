function Product({ product }) {
    return (
        <div className='p-4 rounded-lg shadow-md bg-gray-50'>
            <img src={product.img} alt={product.name} className="w-full h-70 object-cover rounded-md" />
            <h3 className='text-xl font-bold mt-2'>{product.name}</h3>
            <p className='text-gray-600 text-right'>{product.price} €</p>
        </div>
    );
}


export default Product;
