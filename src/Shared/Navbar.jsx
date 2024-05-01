import Logo from "../assets/Hertiage Nest - Final LOGO (1) 1.png";
const Navbar = () => {
  return (
    <div className="bg-[#ECF5FF]">
      <div className="max-w-[1240px] px-28 mx-auto py-2">
        <div className="flex items-center justify-between">
          <div className="">
            <a href="" className="mr-5 hover:text-gray-900">Buy</a>
            <a href="" className="mr-5 hover:text-gray-900">Sell</a>
            <a href="" className="mr-5 hover:text-gray-900">Services</a>
          </div>
          <a href="">
            <img src={Logo} alt="Logo" />
          </a>

          <div>
            <a href="" className="mr-5 hover:text-gray-900">Manage Rentals</a>
            <a href="" className="mr-5 hover:text-gray-900">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
