import { useState, useEffect } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { useNavigate } from "react-router-dom";
import fondof1 from '/fondo2f1.png';

function Teams({ teams }) {
    const navigate = useNavigate();
    const [goToSlide, setGoToSlide] = useState(0);
    const [offsetRadius, setOffsetRadius] = useState(1);
    const [showArrows, setShowArrows] = useState(false);

    useEffect(() => {
        setOffsetRadius(3
            
        );
        setShowArrows(false);
    }, []);

    const slides = teams.map((team, index) => ({
        key: index,
        content: (
            <div 
                className="w-[25rem] h-140 bg-gray-200 rounded-lg flex flex-col items-center justify-center p-10 mx-4 cursor-pointer select-none" 
                onClick={() => {
                    setGoToSlide(index);
                    if (index === goToSlide) {
                        navigate(`/team/${team.id}`);
                    }
                }}
            >   
                <div className="w-[15rem]">
                    <img src={team.darkImg} className="w-full h-auto object-contain" alt={team.name} />
                </div>
                <h2 className="text-2xl text-center mt-6" style={{ fontFamily: "Formula1-Wide, sans-serif" }}>{team.name}</h2>
                <h2 className="text-xl text-center mt-4">{team.d1name}</h2>
                <h2 className="text-xl text-center">{team.d2name}</h2>
            </div>
        ),
        onClick: () => setGoToSlide(index)
    }));

    return (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat -z-10"
            style={{ backgroundImage: `url(${fondof1})`, backgroundSize: 'cover', height: '100vh', backgroundPosition: 'center' }}>
            <div style={{ width: "80vw", height: "60vh"}}>
                <Carousel
                    slides={slides}
                    goToSlide={goToSlide}
                    offsetRadius={offsetRadius}
                    showNavigation={showArrows}
                    animationConfig={config.gentle}
                />
            </div>
        </div>
    );
}

export default Teams;