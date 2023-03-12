
import react, { useState } from "react";

const Navbar = () => {
    const [menu, setMenu] = useState(false);
  return (
    <div>
    <section>
    <div className="w-full relative pb-10 px-6 xl:px-0">
       
        <nav className="lg:hidden relative z-40">
            <div className="flex py-6 justify-between items-center px-4">
                <div>
                  <span className="font-bold text-white">pexels</span>
                </div> 
                <div className="flex items-center">
                    <ul id="list" className={`${menu ? '' : 'hidden'} p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16`}>
                        <li className="flex cursor-pointer text-black text-sm leading-3 tracking-normal mt-2 py-2 hover:text-white focus:text-white focus:outline-none">
                            <a href="javascript:void(0)">
                                <span className="ml-2 font-bold">Discover</span>
                            </a>
                        </li>
                        <li className="flex flex-col cursor-pointer text- text-sm leading-3 tracking-normal py-2 hover:text-gray-600 focus:text-black-700 focus:outline-none flex justify-center" onclick="dropdownHandler(this)">
                            <a href="javascript:void(0)">
                                <span className="ml-2 font-bold">Portfolio</span>
                            </a>
                        </li>
                       
                    </ul>
                    <div className="xl:hidden">
                       <img  id="open" className={`${menu ? 'hidden' : '' } close-m-menu`} onClick={() => setMenu(!menu)}  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg1.svg" alt="menu" />
                        <div id="close" className={` ${menu ? '' : 'hidden' } close-m-menu`} onClick={() => setMenu(!menu)}>
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/right_aligned_with_searchbar_Svg2.svg" alt="cross" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    
        <nav  role="navigation" aria-label="Main" tabIndex="0" className="hidden relative z-10 w-full lg:flex justify-between items-center p-20">
            <div className="w-1/6">
                <a tabIndex="0" aria-label="we care company logo" href="javascript:void(0)">
                <span className="font-bold text-4xl text-white">pexels</span>
                </a>
            </div>
            <div className="w-5/6">
                <div className="flex items-center justify-end">
                    <ul className="text-gray-800 lg:space-x-8 flex items-center leading-none">
                        <li>
                            <a className="text-white hover:text-gray-600 text-lg focus:text-white-500" href="#">Discover</a>
                        </li>
                        <li className="ml-4 hover:text-white ">
                            <a className="text-white hover:text-gray-600 focus:text-whie text-lg" href="javascript:void(0)">Portfolio</a>
                        </li>
                      
                    </ul>
                
                </div>
            </div>
        </nav>
        <div className="pt-32 lg:flex items-center relative z-10 container mx-auto">
           
            <div  role="contentinfo"  className="w-full lg:w-1/2 h-full">
                <p tabIndex="0" className="text-white uppercase text-2xl mb-4">Welcome to pexels</p>
                <h1 tabIndex="0" className="text-white text-4xl lg:text-6xl font-black mb-8">Pexels Photographs</h1>
                <p tabIndex="0" className="text-white font-regular mb-8">Capturing moments from today…Creating memories for a lifetime</p>
                
            </div>
        </div>
    </div>
</section>

    <style>
        {`
    /* Top menu */
    .top-100 {
        animation: slideDown 0.5s ease-in-out;
    }
    @keyframes slideDown {
        0% {
            top: -50%;
        }
        100% {
            top: 0;
        }
    }
    * {
        outline: none !important;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
    }`}
    </style>
</div>
  );
};

export default Navbar;
