import fondof1 from '/fondo2f1.png';
import { Link } from 'react-router-dom';

function Teams() {

    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat -z-10" style={{ backgroundImage: `url(${fondof1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
            <div className="flex flex-col items-center justify-center">
                <div className='flex flex-center'>
                    <Link to="/team/1" className="px-4"><img src="/ferrari/ferrari-logo.png" className='w-30' /></Link>
                </div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Teams;