import { Link } from 'react-router-dom';
import f1store1 from '/f1store1.svg';
import { useEffect, useState } from 'react';

function NavBar() {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsLogged(localStorage.getItem('isLogged'));
    setIsAdmin(localStorage.getItem('isAdmin'));
  }, []);

  return (
    <nav className="shadow-lg flex items-center relative z-10 bg-white p-1 shadow-md" style={{ fontFamily: 'Formula1Regular, sans-serif' }}>
      <Link to="/" className="flex-shrink-0">
        <img src={f1store1} alt="Logo" className="w-65 px-7 py-7" />
      </Link>
      <div className="flex-grow flex items-center">
        <Link to="/" className="px-4">Shop</Link>
        <Link to="/" className="px-4">Teams</Link>
        {isAdmin && <Link to="/" className="px-4">Dashboard</Link>}

      </div>
      <div className="flex items-center">
        {!isLogged && (
          <div>
            <Link to="/login" className="px-4">Login</Link>
            <Link to="/signup" className="px-4">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mt-2"
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
        {isLogged && (
          <div className='flex items-center'>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ms-6 me-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
              onClick={() => {
                localStorage.removeItem('isLogged');
                localStorage.removeItem('email');
                localStorage.removeItem('isAdmin');
                setIsLogged(false);
                window.location.href = '/';
              }}
            >
              Log Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
