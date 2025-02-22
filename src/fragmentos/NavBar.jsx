import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import f1store1 from '/f1store1.svg';
import { IoCartOutline } from "react-icons/io5";

function NavBar({ onLogout, user, products }) {
  const [isHovered, setIsHovered] = useState(false);
  const [itemNumbers, setItemNumbers] = useState(0);

  useEffect(() => {
    if (user && user.cart) {
      setItemNumbers(user.cart.length);
    }
  }, [user]);

  return (
    <nav className="sticky shadow-lg flex items-center relative z-50 bg-white p-1 shadow-md top-0" style={{ fontFamily: 'Formula1Regular, sans-serif' }}>
      <Link to="/" className="flex-shrink-0">
        <img src={f1store1} alt="Logo" className="w-65 px-7 py-7" />
      </Link>
      <div className="flex-grow flex items-center">
        <Link to="/shop" className="px-4">Shop</Link>
        <Link to="/teams" className="px-4">Teams</Link>
        <Link to="/game" className="px-4">Game</Link>
        {user && user.type == "admin" && <Link to="/dashboard" className="px-4">Dashboard</Link>}

      </div>
      <div className="flex items-center">
        {!user && (
          <div>
            <Link to="/login" className="px-4">Login</Link>
            <Link to="/signup" className="px-4">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 mt-2 cursor-pointer"
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
        {user && (
          <div className='flex items-center h-full'>
            <Link to="/cart"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className='h-16 flex items-center'>

              <div className='me-5 relative'>
                <span className='absolute ms-3 mb-2 w-5 h-5 left-1/2 -top-1.5 -translate-x-1/2 bg-red-600 text-white rounded-full pt-0.5 text-center text-xs'>
                  {itemNumbers}
                </span>
                <IoCartOutline size={30} />
              </div>


              {isHovered && (
                <div className="absolute top-full right-30 mt-2 w-70 overflow-hidden">
                  {user.cart == [] && (
                    <p className="p-2">Your cart is empty</p>
                  )}
                  {!user.cart == [] && (
                    <div className="flex flex-col bg bg-gray-100 rounded-xl p-4 my-auto w-70 overflow-hidden">
                      <h2 className="mb-3" style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Cart content</h2>
                      {user.cart.flatMap((id, index) =>
                        products.filter(product => product.id === id).map(product =>
                          <div key={`${product.id}-${index}`} className="font-sans">
                            <div className="flex justify-between">
                              <p>{product.name}</p>
                              <p>{product.price} €</p>
                            </div>
                            <hr className="h-px my-2 bg-gray-400 border-0" />
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              )}
            </Link>

            <div>
              <Link to="/user" className='me-8'>{user.username}</Link>
            </div>

            <button
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-b focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 cursor-pointer"
              onClick={onLogout}
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
