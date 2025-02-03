import { Link } from 'react-router-dom'
import f1store1 from '../assets/f1store1.svg' 

function NavBar() {
  return (
    <>
      <nav className='shadow-lg flex items-center'>
        <Link to="/" className="flex-shrink-0">
          <img src={f1store1} alt="" className="w-65 px-7 py-7"/>
        </Link>
        <div className="flex-grow items-center">
          <Link to="/" className="px-4">Shop</Link>
          <Link to="/" className="px-4">Teams</Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className="px-4">Sign In</Link>
          <Link to="/" className="px-4"><button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2">Sing Up</button></Link>
        </div>
      </nav>
    </>
  )
}
 
export default NavBar
