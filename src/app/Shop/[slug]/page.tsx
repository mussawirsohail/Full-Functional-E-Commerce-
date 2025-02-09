type BlogProps = {
    params: { slug: string };
  };
  const blogData: Record<string, { title: string; price:number; img:string; department:string;originalPrice:number;}>  = {
    "Graphic-Design":{
        title: 'Graphic Design ',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo.png"
     },
     "Graphic-Design-2":{
        title: 'Graphic Design 2',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo2.png"
     },
      "Graphic-Design-3":{
        title: 'Graphic Design 3',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo3.png"
     },
     "Graphic-Design-4":{
        title: 'Graphic Design 4',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo4.png"
     },
     "Graphic-Design-5":{
        title: 'Graphic Design 5',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo5.png"
     },
     "Graphic-Design-6":{
        title: 'Graphic Design 6',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo6.png"
     },
     "Graphic-Design-7":{
        title: 'Graphic Design 7',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo7.png"
     },
     "Graphic-Design-8":{
        title: 'Graphic Design 8',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo8.png"
     },
     "Graphic-Design-9":{
        title: 'Graphic Design 9',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo9.png"
     },
     "Graphic-Design-10":{
        title: 'Graphic Design 10',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo10.png"
     },
     "Graphic-Design-11":{
        title: 'Graphic Design 11',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo11.png"
     },
     "Graphic-Design-12":{
        title: 'Graphic Design 12',
        department: 'English Department',
        originalPrice: 16.48,
        price: 6.48,
        img:"/photo12.png"
     },
  }
  export default function Product({params}: BlogProps) {
    const { slug } = params;
  const blogsection = blogData[slug];
    return (
   <div className="bg-[#FAFAFA] min-h-screen p-6 ]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#FAFAFA] p-6 h-[598px] w-[1050">
        <div>
          <img
            src={blogsection.img}
            alt="Floating Phone"
            className=" object-cover rounded- h-[350] w-[406px]"
          />
          
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{blogsection.title}</h1>
          <div className="flex items-center gap-2 my-2">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-gray-500 text-sm">(10 Reviews)</span>
          </div>
          <p className="text-2xl font-semibold text-gray-800">{blogsection.price}</p>
          <p className="text-green-600 font-semibold my-2">In Stock</p>
          <p className="text-gray-600 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="w-6 h-6 bg-[#23A6F0] rounded-full"></div>
            <div className="w-6 h-6 bg-green-500 rounded-full"></div>
            <div className="w-6 h-6 bg-[#E77C40] rounded-full"></div>
            <div className="w-6 h-6 bg-black rounded-full"></div>
          </div>
          <button className="mt-[180px] bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
      </div>
    
)
}
