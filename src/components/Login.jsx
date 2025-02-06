import { useState } from 'react';
import fondof1 from '/fondof1.png';
import { Link } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function checkUser() {
        const users = await fetch('http://localhost:5000/users');
        const usersData = await users.json();
        const user = usersData.find(user => user.email === email && user.password === password);

        if (user) {
            if (user.type === 'admin') {
                localStorage.setItem('isAdmin', true);
            }
            localStorage.setItem('isLogged', true);
            localStorage.setItem('email', email);
            window.location.href = '/';
        } else {
            document.getElementById('error').innerHTML = `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">Either the email or password is wrong.</span>
        </div>`;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        checkUser()
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: `url(${fondof1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md ">
                <h2 className="text-2xl font-bold text-center" style={{ fontFamily: 'Formula1-Bold, sans-serif' }}>LOGIN</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 w-full"
                    >
                        Log In
                    </button> <br />
                    <div className="my-8 mx-auto text-center">
                        <p>Don't have an account?<Link to="/signup" className="px-2 underline font-semibold">Sing Up</Link></p>
                    </div>
                </form>
                <span id="error"></span>
            </div>
        </div>
    );
};

export default Login;