import { useEffect, useState } from 'react';
import fondof1 from '/fondof1.png';

const User = ({ onLogin, user }) => {
    const [username, setUsername] = useState(user.username);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (oldPassword == '' && newPassword == '') {
            const updatedUser = { id: user.id, username, email: user.email, password: user.password, type: user.type, cart: user.cart };
            fetch(`http://localhost:5000/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });
            onLogin(updatedUser);
        } else if (oldPassword !== user.password) {
            document.getElementById('error').innerHTML = `<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <strong class="font-bold">Error!</strong>
                        <span class="block sm:inline">Your old password is wrong!</span>
                    </div>`;
        } else {
            const updatedUser = { username, email: user.email, password: newPassword, type: user.type, cart: user.cart };
            fetch(`http://localhost:5000/users/${user.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedUser),
            });
            onLogin(updatedUser);
        };
    }
    const [passwordsVisible, setPasswordsVisible] = useState(false);

    const togglePasswordsVisibility = () => {
        setPasswordsVisible(!passwordsVisible);
    };

    useEffect(() => {
        setUsername(user.username);
    }, [user]);

    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: `url(${fondof1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
            <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md mt-20">
                <h2 className="text-2xl font-bold text-center" style={{ fontFamily: 'Formula1-Bold, sans-serif' }}>Your Account</h2>
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
                            className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                        />
                    </div>
                    <button type="button" onClick={togglePasswordsVisibility} className="mt-6">
                        {passwordsVisible ? (
                            <div className="flex items-center">
                                <p>Want to change your password ?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p>Want to change your password ?</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        )}
                    </button>
                    <div className={`transition-all duration-400 ${passwordsVisible ? 'max-h-screen opacity-100 overflow-hidden' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="mb-8">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Old Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            />
                        </div>

                        <div className="my-8">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                New Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 w-full"
                    >
                        Edit Your Account
                    </button>
                </form>
                <div id="error">
                </div>
            </div>
        </div>
    );
};

export default User;
