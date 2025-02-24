import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="shadow-[0px_-4px_10px_rgba(0,0,0,0.3)]  bg-white">
            <div className="footer-content flex flex-center bg bg-red-700 px-120 py-10 justify-between">
                <div className="flex flex-col my-auto">
                    <img src="/f1store1-white.png" alt="F1-Store" className="w-80" /><br />
                    <p className="text-gray-300 text-xs">This is a website for educational purposes, please dont sue me :)</p>
                </div>
                <div className="flex flex-col text-white">
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/teams">Teams</Link>
                    <Link to="/game">Game</Link>
                </div>
                <div className="flex flex-col text-white">
                    <h2 className='text-xl' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Socials</h2>
                    <div className='flex flex-center space-x-2 pt-1'>
                        <a href="https://www.instagram.com/f1"><FaInstagram size={35}/></a>
                        <a href="https://twitter.com/F1"><FaTwitter size={35}/></a>
                        <a href="https://www.facebook.com/Formula1"><FaFacebook size={35}/></a>
                        <a href="https://www.youtube.com/channel/UCB_qr75-ydFVKSF9Dmo6izg"><FaYoutube size={35}/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;