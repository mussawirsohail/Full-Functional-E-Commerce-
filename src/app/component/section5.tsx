export default function Section5() {
    const posts = [
      {
        id: 1,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "/section5-pic1.png",
      },
      {
        id: 2,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "/section5-pic2.png",
      },
      {
        id: 3,
        title: "Loudest à la Madison #1 (L'integral)",
        description:
          "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        date: "22 April 2021",
        comments: 10,
        image: "/section5-pic3.png",
      },
    ];
  
    return (
      <div className="p-6 bg-gray-100 mt-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Featured Posts</h1>
          <p className="text-gray-600 text-sm md:text-base mt-2">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.
          </p>
        </div>
  
        {/* Posts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <img
                className="object-cover h-[200px] w-full"
                src={post.image}
                alt={post.title}
              />
              <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs text-blue-500 uppercase">New</span>
                <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{post.description}</p>
                <div className="flex justify-between items-center mt-auto text-gray-500 text-xs">
                  <span>{post.date}</span>
                  <span>{post.comments} comments</span>
                </div>
                <button className="mt-4 text-blue-500 text-sm hover:underline self-start">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
    