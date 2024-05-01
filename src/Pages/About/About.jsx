import Statics from "../../Components/Statics/Statics";
import AboutBanner from "../../assets/Frame 4.jpg";
import img from "../../assets/img.png";
import img1 from "../../assets/img (1).png";

import line from "../../assets/Line 9.png";
import Rectangle from "../../assets/Rectangle 30.jpg";


const About = () => {
  return (
    <div>
      <div
        style={{
          background: `url(${AboutBanner})`,
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="max-w-[1240px] mx-auto overflow-hidden">
        <Statics />

        <div className="relative mb-9">
          <img className="max-w-[900px]" src={img} />
          <div className="bg-[#ECF5FF] max-w-[450px] p-6 absolute right-32 -bottom-[50px]">
            <p className="flex items-center">
              <img className="pr-5" src={line} alt="" /> Our Story
            </p>
            <h2 className="text-4xl text-black">
              Efficient and Transparent Home Buying Solutions
            </h2>
            <p className="text-[#6B7280] pt-5">
              In the symphony of bustling markets and serene landscapes,
              Heritage-Nest was born—a vision to
            </p>
          </div>
        </div>

        <div className="relative mb-9 flex justify-between items-start mt-40">
          <img className="max-w-[900px] order-last" src={img1} />
          <div className="bg-[#ECF5FF] max-w-[450px] p-6 absolute">
            <p className="flex items-center">
              <img className="pr-5" src={line} alt="" /> Our Story
            </p>
            <h2 className="text-4xl text-black">
              Efficient and Transparent Home Buying Solutions
            </h2>
            <p className="text-[#6B7280] pt-5">
              In the symphony of bustling markets and serene landscapes,
              Heritage-Nest was born—a vision to
            </p>
          </div>
        </div>
    

        <div className="flex justify-between items-center">
          <div className="max-w-[700px]">
            <p className="text-[#EE6611]">
              <img className="pr-5" src={line} />
              Meet the Team For Book Consultation
            </p>
            <h2>Meet the stewards of your heritage journey</h2>
            <p className="pt-5">
              each member an embodiment of expertise and warmth, dedicated to
              guiding you home, every step of the way.
            </p>
            <button className="py-2 px-2 bg-[#0059B1] text-white mt-5">
              Book Consultation Now
            </button>
          </div>
          <img src={Rectangle} />
        </div>
      </div>
    </div>
  );
};

export default About;
