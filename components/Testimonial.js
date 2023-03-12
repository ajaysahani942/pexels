
function Testimonial() {
    return (
        <div className="container mx-auto pt-16">
            <div className="xl:w-full w-11/12 mx-auto">
                <h1 className="text-gray-800 font-extrabold xl:text-5xl text-3xl mb-4 text-center xl:text-left md:text-left lg:text-left">Hear From Our Customers</h1>
                <p className="text-xl xl:text-left md:text-left lg:text-left md:w-full text-center xl:w-2/3 lg:w-2/3 w-11/12 mx-auto xl:mx-0 lg:mx-0 text-gray-600">Nature as a category is of course a very broad subject. In fact, every living species belongs to nature. And so do landscapes, natural phenomena like thunder and lightning, the galaxy, northern lights and so do many others.</p>
            </div>
            <div className="flex flex-wrap mt-10 justify-between w-full md:w-11/12 md:mx-auto xl:mx-0 xl:w-full">
                <div className="xl:w-3/4 lg:w-3/4 md:w-8/12 w-11/12 mx-auto xl:mx-0 lg:mx-0 md:ml-0 shadow-md border border-gray-200 p-8 rounded">
                    <p className="pb-8 text-base text-gray-800">If I have to limit myself to a few aspects of the untamed nature, here they are:
                    Flower power / A rainbow in black and white / Hunters and the hunted / The birds / Funny stories / The underwater world
                    
                    I didn't include macro photos of butterflies, frogs, flies and other creatures in my list. Of course these all belong to nature and they are to be seen on some gorgeous photographs.</p>
                    <p className="text-base text-gray-800">However, when looking at these photos I often wonder about their authenticity. Were they made without manipulation? Were the little creatures allowed to creep around freely when photographed, or were they captured and placed in a surrounding that suited the photographer?

                    I can't answer these questions if they are not addressed by the photographers in their description. However I think it would be best to be open about the making of the photo, as did  Florentin Vinogradof in the tutorials for his beautiful photos like  "The Hunter" and "Morimus Funereus".</p>
                    <div className="mt-8">
                        <p className="text-base text-gray-800 font-bold pb-1">- Andres Berlin</p>
                        <p className="text-sm text-gray-600 pl-2">VP, Talent Management</p>
                    </div>
                    <div className="flex items-center mt-8">
                        <div className="h-8 w-8">
                            <img src="https://cdn.tuk.dev/assets/marketing/page_sections/testimonials_section/testimonial6.jpg" alt className="h-full w-full object-cover rounded-md shadow" />
                        </div>
                        <p className="text-sm ml-2">Twitter Inc.</p>
                    </div>
                </div>
                <div className="xl:w-1/4 lg:w-1/4 md:w-1/4 flex items-end xl:justify-end lg:justify-end md:justify-end sm:justify-center justify-center xl:pl-8 lg:pl-8 w-11/12 mx-auto xl:mx-0 lg:mx-0 mt-2">
                    <div className="h-64 w-64">
                        <img src="https://cdn.tuk.dev/assets/photo-1567290329751-0700a37da0af.jfif" alt className="rounded h-full w-full object-cover shadow" />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap mt-10 xl:justify-between lg:justify-around md:justify-center justify-around xl:w-full lg:w-11/12 w-11/12 mx-auto xl:mx-0 lg:mx-auto">
                <button className="bg-white shadow mb-2 xl:mb-0 lg:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/adidas-gray.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/mini-gray.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/channel-gray.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/gs1-gray.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/Twitter.png" alt />
                </button>
                <button className="bg-white shadow mb-2 xl:mb-0 rounded flex items-center justify-center h-24 w-40 cursor-pointer border border-transparent focus:border-gray-300 focus:shadow-md focus:outline-none">
                    <img src="https://cdn.tuk.dev/assets/toyota-gray.png" alt />
                </button>
            </div>
        </div>
    );
}

export default Testimonial;
