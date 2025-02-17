import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import fondosimetrico from "/fondosimetrico.jpeg";
import Product from "../fragmentos/Product";

function Team({ products, teams }) {
    const { id } = useParams();
    const [team, setTeam] = useState(null);

    useEffect(() => {
        if (teams && id) {
            const foundTeam = teams.find((p) => p.id === id);
            setTeam(foundTeam);
        }
    }, [id, teams]);

    if (!team) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className="inset-0 flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${fondosimetrico})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
                <div className='flex flex-center'>
                    <div className='mx-10'>
                        <img src={team.d1img} className='w-110'/>
                        <h2 className='text-2xl text-center mt-20 text-white' style={{ fontFamily: 'Formula1-Wide, sans-serif' }}>{team.d1name}</h2>
                    </div>
                   
                    <div key={team.id} className="text-center text-white w-200 mx-20">
                        <img src={team.img} alt={team.name} className="w-40 mx-auto mb-30" />
                        <p className="text-2xl">{team.description}</p>
                    </div>
                    <div className='mx-10'>
                        <img src={team.d2img} className='w-110' />
                        <h2 className='text-2xl text-center mt-20 text-white' style={{ fontFamily: 'Formula1-Wide, sans-serif' }}>{team.d2name}</h2>
                    </div>
                </div>

            </div>
            <h2 className='text-5xl text-center mt-20' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>{team.name} Products</h2>
            <hr className='mb-20 mt-6 w-100 mx-auto ring-1' />
            <div className='grid grid-cols-5 gap-4 mx-50 mb-50'>
                {products.map(product =>
                (product.team === team.nameId &&
                    <Product key={product.id} product={product} />))
                }
            </div>
        </div>
    );
};

export default Team;