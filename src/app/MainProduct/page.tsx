import Header3 from "../component/header3";
//ye jo folder he mainproduct ye dosre wali folder me sirf product se bana howa he 
export default function Team() {
  return (
    <>
      <Header3 />
      <div className="min-h-screen bg-gray-100">
        <div className="text-center py-16 bg-white shadow-sm">
          <h3 className="text-sm text-gray-500 uppercase tracking-wide">What We Do</h3>
          <h1 className="text-4xl font-bold mt-2">Innovation tailored for you</h1>
          <nav className="mt-4 text-sm text-gray-500">
            <span>Home</span> <span className="mx-2">/</span> <span className="font-semibold">Team</span>
          </nav>
        </div>
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-5">
              <img
                src="/destop1.png"
                alt="Fashion 1"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-2">
                <img
                  src="/destop2.png"
                  alt="Fashion 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-2">
                <img
                  src="/destop3.png"
                  alt="Fashion 3"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-2">
                <img
                  src="/destop4.png"
                  alt="Fashion 4"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="overflow-hidden rounded-lg shadow-lg aspect-w-4 aspect-h-2">
                <img
                  src="/destop5.png"
                  alt="Fashion 5"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="font-sans">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-gray-800 text-3xl font-extrabold">Meet Our Team</h2>
              <p className="text-gray-800 text-sm mt-4 leading-relaxed">
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics
              </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-12">
              {Array(9)
                .fill(0)
                .map((_, idx) => (
                  <div key={idx} className="border rounded-lg overflow-hidden">
                    <div className="aspect-w-4 aspect-h-5">
                      <img
                        src={`/our${idx + 1}.png`}
                        alt={`Team Member ${idx + 1}`}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h4 className="text-gray-800 text-base font-bold">Username</h4>
                      <p className="text-gray-500 text-xs font-bold mt-1">Profession</p>
                      <div className="flex justify-center space-x-4 mt-4">
                        <img src="facebookB.png" alt="Facebook" className="w-6 h-6" />
                        <img src="instaB.png" alt="Instagram" className="w-6 h-6" />
                        <img src="twitterB.png" alt="Twitter" className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="bg-white py-10">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold mb-4">Start your 14 days free trial</h2>
            <p className="text-gray-500 mb-6">
              Met minim Mollie non desert Alamo est sit cliquey dolor <br /> do met sent. RELIT official
              consequent.
            </p>
            <button className="bg-[#23A6F0] text-white px-6 py-2 rounded-md hover:bg-blue-600">
              Try it free now
            </button>
            <div className="flex justify-center gap-6 mt-6">
              <img src="twitterB.png" alt="Twitter" className="w-6 h-6" />
              <img src="facebookDB.png" alt="Facebook" className="w-6 h-6" />
              <img src="instaBlack.png" alt="Instagram" className="w-6 h-6" />
              <img src="linkedin.png" alt="LinkedIn" className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
