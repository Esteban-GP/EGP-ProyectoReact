import { useState, useEffect } from 'react';
import Product from "../fragmentos/Product"

function Shop() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [ferrariFilter, setFerrariFilter] = useState(false);
    const [mercedesFilter, setMercedesFilter] = useState(false);
    const [redbullFilter, setRedbullFilter] = useState(false);
    const [mclarenFilter, setMclarenFilter] = useState(false);
    const [astonFilter, setAstonFilter] = useState(false);
    const [alpineFilter, setAlpineFilter] = useState(false);
    const [rbFilter, setRbFilter] = useState(false);
    const [kickFilter, setKickFilter] = useState(false);
    const [haasFilter, setHaasFilter] = useState(false);
    const [williamsFilter, setWilliamsFilter] = useState(false);
    const [apparelFilter, setApparelFilter] = useState(false);
    const [collectablesFilter, setCollectablesFilter] = useState(false);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await fetch('http://localhost:5000/products');
                if (!response.ok) {
                    throw new Error('Error fetching products');
                }
                const data = await response.json();
                setProducts(data); // Assuming data is an array of products
            } catch (error) {
                console.error('Error:', error);
            }
        }
        getProducts();
    }, []);

    useEffect(() => {
        updateList();
    })

    useEffect(() => {
        updateList();
    }, [ferrariFilter, mercedesFilter, redbullFilter, mclarenFilter, astonFilter, alpineFilter, rbFilter, kickFilter, haasFilter, williamsFilter, apparelFilter, collectablesFilter]);

    function updateList() {
        let filtered = []
        filtered = products.filter(product => {
            if (ferrariFilter && product.team === "ferrari") return true;
            if (mercedesFilter && product.team === "mercedes") return true;
            if (redbullFilter && product.team === "redbull") return true;
            if (mclarenFilter && product.team === "mclaren") return true;
            if (astonFilter && product.team === "aston") return true;
            if (alpineFilter && product.team === "alpine") return true;
            if (rbFilter && product.team === "rb") return true;
            if (kickFilter && product.team === "kick") return true;
            if (haasFilter && product.team === "haas") return true;
            if (williamsFilter && product.team === "williams") return true;
            return false;
        });
        if (filtered.length === 0) filtered = products;
        let secondFilter = filtered.filter(product => {
            if (apparelFilter && product.type === "apparel") return true;
            if (collectablesFilter && product.type === "collectable") return true;
            return false;
        })
        if (secondFilter.length === 0) secondFilter = filtered;
        setFilteredProducts(secondFilter);
    };

    const [showCheckboxes, setShowCheckboxes] = useState(true);
    const [showTypes, setShowTypes] = useState(true);

    const showTeams = () => {
        setShowCheckboxes(!showCheckboxes);
    };
    const showType = () => {
        setShowTypes(!showTypes);
    };

    return (
        <div className="container mx-auto px-4">
            <h2 className='text-5xl text-center mt-10' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>Shop</h2>
            <hr className='mb-20 mt-6 w-full mx-auto ring-1' />
            <div className="flex flex-center">
                <div className='mb-4 w-50 ' style={{ fontFamily: 'Formula1Regular, sans-serif' }}>
                    <button onClick={showTeams} className="mt-2">
                        {showCheckboxes ? (
                            <div className="flex items-center">
                                <p>Filter by team</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p>Filter by team</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        )}
                    </button>
                    {showCheckboxes && (
                        <div className="mt-2 space-y-5">
                            <label className="flex items-center space-x-2"><input type="checkbox" value="ferrari" checked={ferrariFilter} onChange={() => setFerrariFilter(!ferrariFilter)} /><img src="ferrari/ferrari-logo.svg" alt="Ferrari" className="w-10"/> <span>Ferrari</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="mercedes" checked={mercedesFilter} onChange={() => setMercedesFilter(!mercedesFilter)} /><img src="mercedes/mercedes-logo.png" alt="Mercedes" className="w-9"/>  <span>Mercedes</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="redbull" checked={redbullFilter} onChange={() => setRedbullFilter(!redbullFilter)} /><img src="redbull/redbull-logo.svg" alt="Red Bull" className="w-10"/> <span>Red Bull</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="mclaren" checked={mclarenFilter} onChange={() => setMclarenFilter(!mclarenFilter)} /><img src="mclaren/mclaren-logo.svg" alt="McLaren" className="w-10"/> <span>McLaren</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="aston" checked={astonFilter} onChange={() => setAstonFilter(!astonFilter)} /><img src="aston/aston-logo.svg" alt="Aston Martin" className="w-10"/> <span>Aston Martin</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="alpine" checked={alpineFilter} onChange={() => setAlpineFilter(!alpineFilter)} /><img src="alpine/alpine-logo.png" alt="Alpine" className="w-9"/> <span>Alpine</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="rb" checked={rbFilter} onChange={() => setRbFilter(!rbFilter)} /><img src="rb/rb-logo.png" alt="RB Cash App" className="w-10"/> <span>RB Cash App</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="kick" checked={kickFilter} onChange={() => setKickFilter(!kickFilter)} /><img src="sauber/sauber-logo.png" alt="Kick Sauber" className="w-9"/> <span>Kick Sauber</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="haas" checked={haasFilter} onChange={() => setHaasFilter(!haasFilter)} /><img src="haas/haas-logo.png" alt="Haas" className="w-9"/> <span>Haas</span></label>
                            <label className="flex items-center space-x-2"><input type="checkbox" value="williams" checked={williamsFilter} onChange={() => setWilliamsFilter(!williamsFilter)} /><img src="williams/williams-logo.png" alt="Williams" className="w-9"/> <span>Williams</span></label>
                        </div>
                    )}
                    <button onClick={showType} className="mt-6">
                        {showTypes ? (
                            <div className="flex items-center">
                                <p>Filter by type</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <p>Filter by type</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        )}
                    </button>
                    {showTypes && (
                        <div className="mt-2 space-y-5">
                            <label htmlFor="apparel"><input type="checkbox" value="apparel" id="apparel" checked={apparelFilter} onChange={() => setApparelFilter(!apparelFilter)} className='mx-1 me-2'/>Apparel</label> <br />
                            <label htmlFor="collectables"><input type="checkbox" value="collectables" id="collectables" checked={collectablesFilter} onChange={() => setCollectablesFilter(!collectablesFilter)} className='mx-1 me-2'/>Collectables</label>
                        </div>
                    )}
                </div>
                <div className='flex flex-col mx-auto'>
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
                        {filteredProducts.map(product =>
                            <Product key={product.id} product={product} className="w-full" />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;