import Icon from "../../assets/Icons.png";
const OtherServices = () => {
  return (
 <section className="">
  <div className="container px-5 py-5 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-5">Other Services
      
    </h1>
    <div className="flex gap-8">
      <div className="p-6 md:w-1/3 flex bg-[#ECF5FF]">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
        <img src={Icon}/>
        </div>
        <div className="flex-grow pl-5">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Advanced Property Search</h2>
          <p className="leading-relaxed text-base">Effortlessly find your dream property with advanced search filters.</p>
        
        </div>
      </div>
      <div className="p-6 md:w-1/3 flex bg-[#ECF5FF]">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
        <img src={Icon}/>
        </div>
        <div className="flex-grow pl-5">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Virtual Tours and Multimedia</h2>
          <p className="leading-relaxed text-base">Explore properties through immersive virtual tours and HD photos.</p>
        </div>
      </div>
      <div className="p-6 md:w-1/3 flex bg-[#ECF5FF]">
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
        <img src={Icon}/>
        </div>
        <div className="flex-grow pl-5">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">Secure Online Transactions</h2>
          <p className="leading-relaxed text-base">Ensure secure transactions and e-sign documents seamlessly online.</p>

        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default OtherServices;
