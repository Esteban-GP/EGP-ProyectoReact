import { useState, useEffect } from 'react';

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
            const user = { id, username, email, password, type };
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

    return (
        <div>
            <h2 className='text-2xl mt-10 mx-12' style={{ fontFamily: 'Formula1Regular, sans-serif'}}>User Control</h2>
            <div className='p-4 rounded-lg shadow-md bg-gray-50 relative mx-10 mt-5'>
                {users.map(user =>
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
                </form>
                )}
            </div>

            <h2 className='text-2xl mt-10 mx-12' style={{ fontFamily: 'Formula1Regular, sans-serif'}}>Product Control</h2>
            <div className='p-4 rounded-lg shadow-md bg-gray-50 relative mx-10 mt-5 space-y-3'>
                <label className='ms-1 me-54 font-bold'>Name:</label>
                <label className='mx-1 me-17 font-bold'>Price:</label>
                <label className='mx-1 me-54 font-bold'>Image:</label>
                <label className='mx-1 me-42  font-bold'>Hover Image:</label>
                <label className='mx-1 me-36 font-bold'>Team:</label>
                <label className='mx-1 font-bold'>Type:</label>
                {products.map(product =>
                <form key={product.id}>
                    <input className="w-60 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="name" id={`name-${product.id}`} defaultValue={product.name} />
                    <input className="w-20 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="price" id={`price-${product.id}`} defaultValue={product.price} />
                    <input className="w-60 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="img" id={`img-${product.id}`} defaultValue={product.img} />
                    <input className="w-60 me-8 px-1 py-1 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200" type="text" name="hoverImg" id={`hoverImg-${product.id}`} defaultValue={product.hoverImg} />
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
                </form>
                )}
            </div>
        </div>
    );
};

export default Dashboard;