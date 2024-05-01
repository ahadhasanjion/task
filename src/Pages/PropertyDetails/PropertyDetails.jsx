import Amenities from "../../Components/Amenities/Amenities ";
import OtherServices from "../../Components/OtherServices/OtherServices";
import  Location from '../../assets/fi-bs-marker.png'
import Beds from '../../assets/bed.png'
import Bath from '../../assets/bathtub.png'
import Balcony from '../../assets/balcony.png'
import Fully from '../../assets/shelves.png'
import rec from '../../assets/Rectangle 21 (1).png'

import rec1 from '../../assets/Rectangle 21.png'
import rec2 from '../../assets/Frame 134.png'
import rec3 from '../../assets/Rectangle 21 (1).png'
import rec4 from '../../assets/Rectangle 27.png'
import Property from "../../Components/Property/Property";


const PropertyDetails = () => {
  return (
    <div className="max-w-[1240px] mx-auto">
      <div className="border-b">
        <div className="flex items-center ">
        <h2>3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad</h2>
        <h2 className="pl-5"> $300k</h2>
        </div>
        <p className="flex items-center"><img src={Location}/>Meadowshire Park, Greenfield, USA</p>
      </div>
      <div className="flex gap-4">
        <div>
          <div className="mt-5">
            <img className="w-full" src={rec2}/>
            <div className="flex items-center gap-[1.2rem] mt-5">
            <img className="w-[32%]" src={rec1}/>
            <img className="w-[32%]" src={rec}/>
            <img className="w-[32%]" src={rec3}/>

            </div>
          </div>
          <div className="bg-[#E5E7EB] p-6 mt-5">
            <h2>Overview</h2>
            <div className="bg-[#CAC7C7] grid grid-cols-4 gap-6 py-4 px-4 my-4">
              <div className="flex items-center">
                <img src={Beds} />
                <p className="pl-4">Beds</p>
              </div>
              <div className="flex items-center">
                <img src={Bath} />
                <p className="pl-4">Bath</p>
              </div>
              <div className="flex items-center">
                <img src={Balcony} />
                <p className="pl-4">Balcony</p>
              </div>
              <div className="flex items-center">
                <img src={Fully} />
                <p className="pl-4">Fully Furnished</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-6">
              <div>
                <p>Carpet Area</p>
                <p>2000sqft</p>
              </div>
              <div>
                <p>Floor</p>
                <p>Second (Out of 6th floor)</p>
              </div>
              <div>
                <p>Transaction Type</p>
                <p>Ready to move</p>
              </div>
              <div>
                <p>Lift</p>
                <p>1</p>
              </div>
              <div>
                <p>Facing</p>
                <p>North - East</p>
              </div>
              <div>
                <p>Additional Rooms</p>
                <p>1 servant room & 1 gust room</p>
              </div>
              <div>
                <p>Age of construction</p>
                <p>New Construction</p>
              </div>
            </div>
          </div>
        </div>
        <div>
      
          <div className="bg-[#ECF5FF] p-6">
            <p>Property Value</p>
            <p>$300k-$310k</p>
            <p>Your bid can not be than 10% of the property Minimum value.</p>
            <div>
              <label>Min</label>
              <input type="text"/>
              <label>Max</label>
              <input type="text"/>
            </div>
            <button className="bg-[#0059B1] py-3 px-3 text-center mt-5 text-white">Bid Property</button>
          </div>
          <div>
            <img src={rec4}/>
          </div>
        </div>
      </div>
      <Property/>
        <Amenities/>
      <OtherServices />
    </div>
  );
};

export default PropertyDetails;
