import { useState } from 'react';
import fondof1 from '/fondof1.png';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    async function checkUser() {
        const users = await fetch('http://localhost:5000/users');
        const usersData = await users.json();
        const userExists = usersData.some(user => user.email === email);

        if (userExists) {
            document.getElementById('error').innerHTML = `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Error!</strong>
                        <span class="block sm:inline">User already exists.</span>
                    </div>`;
        } else {
            const newUser = { username, email, password, type: 'user' };
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (response.ok) {
                window.location.href = '/';
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== passwordRepeat) {
            document.getElementById('error').innerHTML = `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Error!</strong>
                        <span class="block sm:inline">Passwords do not match.</span>
                    </div>`;
        } else {
            localStorage.setItem('isLogged', true);
            localStorage.setItem('email', email);
            checkUser();
        };
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: `url(${fondof1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md ">
                <h2 className="text-2xl font-bold text-center" style={{ fontFamily: 'Formula1-Bold, sans-serif' }}>SIGN UP</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="my-8">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <div className="my-8">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <div className="my-8">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>

                    <div className="my-8">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Repeat your Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={passwordRepeat}
                            onChange={(e) => setPasswordRepeat(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 w-full"
                    >
                        Log In
                    </button>
                    <div className="my-8 mx-auto text-center">
                        <p>Already have an account?<Link to="/login" className="px-2 underline font-semibold">Log In</Link></p>
                    </div>
                </form>
                <div id="error">
                </div>
            </div>
        </div>
    );
};

export default Signup;