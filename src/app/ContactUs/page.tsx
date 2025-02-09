import Header3 from "../component/header3";

export default function DesignPage() {
    const brands = [
        { id: 1, name: "Hooli", image: "/hooli.png" },
        { id: 2, name: "Lyft", image: "/lyft.png" },
        { id: 3, name: "Stripe", image: "/stripe.png" },
        { id: 4, name: "AWS", image: "/aws.png" },
        { id: 5, name: "Reddit", image: "slice.png" },
    ];

    return (
        <>
            <Header3 />
            <div className='ContactUsMain'>
    <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      <div className="text-center md:text-left">
        <p className="text-sm text-gray-500 uppercase tracking-wider">About Company</p>
        <h1 className="text-3xl md:text-5xl font-bold mt-2">About Us</h1>
        <p className="text-gray-600 mt-4">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
          Get Quote Now
        </button>
      </div>
      <div className="mt-8 md:mt-0 h-[546] w-[340]">
        <img
          src="/aboutus.png"
          alt="Shopping Illustration"
          className="w-full max-w-sm md:max-w-md"
        />
      </div>
    </div>
              </div>
              <div className="text-center py-16 px-4">
                <h2 className="text-3xl font-bold mb-4">Problems Trying</h2>
                <p className='font-bold text-xl sm:text-2xl mb-4'>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</p>
                <p className="text-lg text-gray-700 mb-8">Problems trying to resolve the conflict between the two major realms of classical physics: Newtonian mechanics...</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <p className="text-2xl font-bold">15K</p>
                        <p className="text-gray-700">Happy Customers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">150K</p>
                        <p className="text-gray-700">Monthly Visitors</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">15</p>
                        <p className="text-gray-700">Countries Worldwide</p>
                    </div>
                    <div className="text-center">
                        <p className="text-2xl font-bold">100+</p>
                        <p className="text-gray-700">Top Partners</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mb-16">
                <img src="Videocard.png" alt="Video card" className='w-full object-cover' />
            </div>

            <div className="text-center py-12 px-4">
                <h2 className="text-3xl font-extrabold">Meet Our Team</h2>
                <p className="text-gray-800 text-sm mt-4 leading-relaxed">Problems trying to resolve the conflict between <br />
                    the two major realms of classical physics: Newtonian mechanics</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                    {["team1.png", "team2.png", "team3.png"].map((team, idx) => (
                        <div key={idx} className="border rounded-lg overflow-hidden">
                            <img src={team} className="w-full h-56 object-cover" alt={`Team member ${idx + 1}`} />
                            <div className="p-4">
                                <h4 className="text-gray-800 text-base font-bold text-center">Username</h4>
                                <p className="text-gray-500 text-xs mt-1 font-bold text-center">Profession</p>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <img src="facebookB.png" alt="Facebook" />
                                    <img src="instaB.png" alt="Instagram" />
                                    <img src="twitterB.png" alt="Twitter" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='py-16 bg-gray-50'>
                <div className="text-center max-w-2xl mx-auto mb-8">
                    <h2 className="text-gray-800 text-3xl font-extrabold">Big Companies Are Here</h2>
                    <p className="text-gray-800 text-sm mt-4 leading-relaxed">Problems trying to resolve the conflict between <br />
                        the two major realms of classical physics: Newtonian mechanics</p>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    {brands.map((brand) => (
                        <div key={brand.id} className="w-24">
                            <img src={brand.image} alt={brand.name} className="object-contain h-16" />
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-between bg-blue-600 text-white py-16 px-4'>
                <div className="max-w-md mb-8 lg:mb-0">
                    <p className='text-xl font-bold mb-2'>WORK WITH US</p>
                    <h2 className="text-4xl font-bold mb-6">Now Let's Grow Yours</h2>
                    <p className="text-md mb-6">The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th century...</p>
                    <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded">Button</button>
                </div>
                <div className="max-w-lg">
                    <img src="contact-last.png" alt="Contact" className='w-full object-cover' />
                </div>
            </div>
        </>
    );
}
