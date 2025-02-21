import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Dashboard({ user }) {
    const [products, setProducts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (user.type !== "admin") {
            window.location.href = '/';
        }

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

        async function getUsers() {
            try {
                const response = await fetch('http://localhost:5000/users');
                if (!response.ok) {
                    throw new Error('Error fetching users');
                }
                const data = await response.json();
                setUsers(data); // Assuming data is an array of users
            } catch (error) {
                console.error('Error:', error);
            }
        }

        getUsers();
        getProducts();
    }, []);

    function editUser(id) {
        return async () => {
            const users = await fetch('http://localhost:5000/users');
            const usersData = await users.json();
            const user1 = usersData.find(user => user.id === id);

            const password = user1.password;
            const username = document.getElementById(`username-${id}`).value;
            const email = document.getElementById(`email-${id}`).value;
            const type = document.getElementById(`type-${id}`).value;
            const user = { id, username, email, password, type, cart: user1.cart};
            const response = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });

            if (response.ok) {
                window.location.reload();
            }
        };
    }

    function editProduct(id) {
        return async () => {
            const products = await fetch('http://localhost:5000/products');
            const productsData = await products.json();
            const product = productsData.find(product => product.id === id);

            const name = document.getElementById(`name-${id}`).value;
            const price = document.getElementById(`price-${id}`).value;
            const img = document.getElementById(`img-${id}`).value;
            const hoverImg = document.getElementById(`hoverImg-${id}`).value;
            const description = document.getElementById(`description-${id}`).value;
            const team = document.getElementById(`team-${id}`).value;
            const type = document.getElementById(`type-${id}`).value;
            const product1 = { id, name, price, img, hoverImg, description, team, type };
            const response = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product1),
            });

            if (response.ok) {
                window.location.reload();
            }
        };
    }

    function deleteUser(id) {
        return async () => {
            const response = await fetch(`http://localhost:5000/users/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                window.location.reload();
            }
        };
    }

    function deleteProduct(id) {
        return async () => {
            const response = await fetch(`http://localhost:5000/products/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                window.location.reload();
            }
        };
    }

    function newProduct() {
        return async () => {
            const response = await fetch(`http://localhost:5000/products/`, {
                method: 'POST',
            });

            if (response.ok) {
                window.location.reload();
            }
        };
    }
    

    const [currentPageUsers, setCurrentPageUsers] = useState(1);
    const [currentPageProducts, setCurrentPageProducts] = useState(1);
    const usersPerPage = 5;
    const productsPerPage = 5;

    const totalPagesUsers = Math.ceil(users.length / usersPerPage);
    const totalPagesProducts = Math.ceil(products.length / productsPerPage);

    const currentUsers = users.slice(
        (currentPageUsers - 1) * usersPerPage,
        currentPageUsers * usersPerPage
    );

    const currentProducts = products.slice(
        (currentPageProducts - 1) * productsPerPage,
        currentPageProducts * productsPerPage
    );

    const nextPageUsers = () => setCurrentPageUsers(prev => Math.min(prev + 1, totalPagesUsers));
    const prevPageUsers = () => setCurrentPageUsers(prev => Math.max(prev - 1, 1));

    const nextPageProducts = () => setCurrentPageProducts(prev => Math.min(prev + 1, totalPagesProducts));
    const prevPageProducts = () => setCurrentPageProducts(prev => Math.max(prev - 1, 1));

    return (
        <div>
            <h2 className='text-2xl mt-10 mx-12' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>User Control</h2>
            <div className='p-4 rounded-lg shadow-md bg-gray-50 relative mx-10 mt-5'>
                {currentUsers.map(user =>
                    <form key={user.id}>
                        <label className='mx-3 font-bold' htmlFor={`username-${user.id}`}>Username:</label>
                        <input className="w-60 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="username" id={`username-${user.id}`} defaultValue={user.username} />

                        <label className='mx-3 ms-6 font-bold' htmlFor={`email-${user.id}`}>Email:</label>
                        <input className="w-80 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="email" name="email" id={`email-${user.id}`} defaultValue={user.email} />

                        <label className='mx-3 font-bold' htmlFor={`type-${user.id}`}></label>
                        <select className="w-40 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" name="type" id={`type-${user.id}`} defaultValue={user.type}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>

                        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-6" type="button" onClick={editUser(user.id)}>Edit</button>
                        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-6" type="button" onClick={deleteUser(user.id)}>Delete</button>
                    </form>
                )}
                <div className='flex justify-center mt-4'>
                    <button onClick={prevPageUsers} disabled={currentPageUsers === 1} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-1'>
                        <HiChevronLeft fontSize="1.5em"/>
                    </button>
                    <span className='px-3 py-1'>{currentPageUsers} / {totalPagesUsers}</span>
                    <button onClick={nextPageUsers} disabled={currentPageUsers === totalPagesUsers} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-1'>
                        <HiChevronRight fontSize="1.5em"/>
                    </button>
                </div>
            </div>

            <h2 className='text-2xl mt-10 mx-12' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Product Control</h2>
            <div className='p-4 rounded-lg shadow-md bg-gray-50 relative mx-10 mt-5 space-y-3'>
                <label className='ms-1 me-54 font-bold'>Name:</label>
                <label className='mx-1 me-17 font-bold'>Price:</label>
                <label className='mx-1 me-54 font-bold'>Image:</label>
                <label className='mx-1 me-42  font-bold'>Hover Image:</label>
                <label className='mx-1 me-44 font-bold'>Description:</label>
                <label className='mx-1 me-36 font-bold'>Team:</label>
                <label className='mx-1 font-bold'>Type:</label>
                {currentProducts.map(product =>
                    <form key={product.id}>
                        <input className="w-60 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="name" id={`name-${product.id}`} defaultValue={product.name} />
                        <input className="w-20 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="price" id={`price-${product.id}`} defaultValue={product.price} />
                        <input className="w-60 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="img" id={`img-${product.id}`} defaultValue={product.img} />
                        <input className="w-60 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="hoverImg" id={`hoverImg-${product.id}`} defaultValue={product.hoverImg} />
                        <input className="w-60 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="hoverImg" id={`description-${product.id}`} defaultValue={product.description} />
                        <select className="w-40 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" name="team" id={`team-${product.id}`} defaultValue={product.team}>
                            <option value="ferrari">Ferrari</option>
                            <option value="mercedes">Mercedes</option>
                            <option value="redbull">Red Bull</option>
                            <option value="aston">Aston Martin</option>
                            <option value="mclaren">McLaren</option>
                            <option value="alpine">Alpine</option>
                            <option value="haas">Haas</option>
                            <option value="sauber">Kick Sauber</option>
                            <option value="rb">Visa CashApp RB</option>
                            <option value="williams">Williams</option>
                        </select>

                        <select className="w-40 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" name="type" id={`type-${product.id}`} defaultValue={product.type}>
                            <option value="apparel">Apparel</option>
                            <option value="collectable">Collectable</option>
                        </select>

                        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-6" type="button" onClick={editProduct(product.id)}>Edit</button>
                        <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-6" type="button" onClick={deleteProduct(product.id)}>Delete</button>
                    </form>
                )}

                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-6" type="button" onClick={newProduct()}>New Product</button>

                <div className='flex justify-center mt-4'>
                    <button onClick={prevPageProducts} disabled={currentPageProducts === 1} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-'>
                        <HiChevronLeft fontSize="1.5em"/>
                    </button>
                    <span className='px-3 py-1'>{currentPageProducts} / {totalPagesProducts}</span>
                    <button onClick={nextPageProducts} disabled={currentPageProducts === totalPagesProducts} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 ms-1'>
                        <HiChevronRight fontSize="1.5em"/>
                    </button>
                </div>
            </div>
        </div>
    );

};

export default Dashboard;