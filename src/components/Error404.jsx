import { AlertTriangle} from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center text-center p-6 "
                style={{ height: '90vh', fontFamily: 'Formula1-Bold, sans-serif' }}>
        
            <img src="/public/error404.png" alt="" />
            <h1 className="text-4xl font-bold mt-4">¡Error 404!</h1>
            <p className="text-lg mt-2">¡Box, box! I think we are lost</p>
            <Link to="/"><button
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 w-full"
            >
                Go back to the pitlane
            </button></Link>
        </div>
    );
}
