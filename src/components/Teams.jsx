import fondof1 from '/fondo2f1.png';
import { Link } from 'react-router-dom';

function Teams() {

    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: `url(${fondof1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
            {/* <div className="flex flex-col items-center justify-center space-y-7">
                <div className='flex flex-center align-center space-x-15'>

                    <button className="w-35 h-35 rounded-full flex items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <Link to="/team/5" className="px-4"><img src="/aston/aston-logo.svg" className='w-30' /></Link>
                    </button>

                    <button className="w-35 h-35 rounded-full flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <Link to="/team/3" className="px-4"><img src="/redbull/redbull-logo.svg" className='w-30' /></Link>
                    </button>

                    <button className="w-35 h-35 rounded-full flex items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <Link to="/team/2" className="px-4"><img src="/mercedes/mercedes-logo.png" className='w-30' /></Link>
                    </button>
                </div>

                <div className='flex flex-center align-center space-x-15'>
                    <button className="w-35 h-35 rounded-full flex items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <Link to="/team/4" className="px-4"><img src="/mclaren/mclaren-white.png" className='w-30' /></Link>
                    </button>

                    <button className="w-35 h-35 rounded-full flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <Link to="/team/1" className="px-4"><img src="/ferrari/ferrari-logo.png" className='w-30 opacity-100' /></Link>
                    </button>

                    <button className="w-35 h-35 rounded-full flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <Link to="/team/8" className="px-4"><img src="/williams/williams-logo.png" className='w-26' /></Link>
                    </button>

                    <button className="w-35 h-35 rounded-full flex items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <Link to="/team/7" className="px-4"><img src="/rb/rb-white.png" className='w-30' /></Link>
                    </button>
                </div>

                <div className='flex flex-center align-center space-x-15'>
                    <button className="w-35 h-35 rounded-full flex items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <Link to="/team/6" className="px-4"><img src="/alpine/alpine-white.png" className='w-30' /></Link>
                    </button>

                    <button className="w-35 h-35 rounded-full flex items-center justify-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full pe-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <Link to="/team/10" className="px-4"><img src="/haas/haas-logo.png" className='w-30' /></Link>
                    </button>

                    <button className="w-35 h-35 rounded-full flex items-center justify-center bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 transition duration-300 ease-in-out transform hover:scale-105">
                        <Link to="/team/9" className="px-4"><img src="/sauber/sauber-white.png" className='w-30' /></Link>
                    </button>


                </div>
            </div> */}

            <div className='container mx-auto bg-gray-200 rounded-lg w-100 h-160 mt-20 flex flex-col items-center justify-center p-10 hover:scale-105 transition duration-300 ease-in-out'>
                <img src="/ferrari/ferrari-logo.png"/>
                <h2 className='text-2xl text-center mt-20' style={{ fontFamily: 'Formula1-Wide, sans-serif' }}>Ferrari</h2>
                <h2 className='text-2xl text-center mt-10' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Charles Leclerc</h2>
                <h2 className='text-2xl text-center' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Lewis Hamilton</h2>
            </div>
            <div className='container mx-auto bg-gray-200 rounded-lg w-100 h-160 mt-20 flex flex-col items-center justify-center p-10 hover:scale-105 transition duration-300 ease-in-out'>
                <img src="/ferrari/ferrari-logo.png"/>
                <h2 className='text-2xl text-center mt-20' style={{ fontFamily: 'Formula1-Wide, sans-serif' }}>Ferrari</h2>
                <h2 className='text-2xl text-center mt-10' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Charles Leclerc</h2>
                <h2 className='text-2xl text-center' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Lewis Hamilton</h2>
            </div>
            <div className='container mx-auto bg-gray-200 rounded-lg w-100 h-160 mt-20 flex flex-col items-center justify-center p-10 hover:scale-105 transition duration-300 ease-in-out'>
                <img src="/ferrari/ferrari-logo.png"/>
                <h2 className='text-2xl text-center mt-20' style={{ fontFamily: 'Formula1-Wide, sans-serif' }}>Ferrari</h2>
                <h2 className='text-2xl text-center mt-10' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Charles Leclerc</h2>
                <h2 className='text-2xl text-center' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Lewis Hamilton</h2>
            </div>
        </div>
    );
};

export default Teams;