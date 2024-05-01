import Icon from "../../assets/icon.png";
import Icon1 from "../../assets/icon (1).png";

const Statics = () => {
  return (
    <section className="max-w-[1240px] mx-auto">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex  gap-8">
          <div className="p-6 md:w-1/4 sm:w-1/2 w-full bg-[#FDF0E7]">
            <h2 className="text-[#D95D0F] text-4xl">2k+</h2>
            <p>New Flat Listed</p>
            <div className="flex items-center justify-between pt-8 text-[#EE6611]">
              <a href="">View all</a>
              <img src={Icon} />
            </div>
          </div>
          <div className="p-6 md:w-1/4 sm:w-1/2 w-full bg-[#ECF5FF]">
            <h2 className="text-[#0051A1] text-4xl">2k+</h2>
            <p>New Flat Listed</p>
            <div className="flex items-center justify-between pt-8 text-[#0059B1]">
              <a href="">View all</a>
              <img src={Icon1} />
            </div>
          </div>
          <div className="p-6 md:w-1/4 sm:w-1/2 w-full bg-[#FDF0E7]">
            <h2 className="text-[#D95D0F] text-4xl">2k+</h2>
            <p>New Flat Listed</p>
            <div className="flex items-center justify-between pt-8 text-[#EE6611]">
              <a href="">View all</a>
              <img src={Icon} />
            </div>
          </div>
          <div className="p-6 md:w-1/4 sm:w-1/2 w-full bg-[#ECF5FF]">
            <h2 className="text-[#0051A1] text-4xl">2k+</h2>
            <p>New Flat Listed</p>
            <div className="flex items-center justify-between pt-8 text-[#0059B1]">
              <a href="">View all</a>
              <img src={Icon1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statics;
