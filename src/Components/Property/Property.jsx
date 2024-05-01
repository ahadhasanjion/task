import propertypic from '../../assets/Rectangle 20.png'
import location from '../../assets/fi-bs-marker.png'
import Line from '../../assets/Line 9 (1).png'
import icon1 from '../../assets/Group 1.png'
import icon2 from '../../assets/Group 2 (1).png'
import icon3 from '../../assets//Group 2.png'

const Property = () => {
  return (
    <div>
      <div className='bg-[#F9FAFB] p-6 flex'>
        <img className='w-[164px]' src={propertypic}/>
        <div className='pl-5'>
            <div className='flex items-center'>
                <h2>3 BHK Builder Floor for Sale in Site Ram Bazar New Delhi</h2>
                <p className='pl-5'>$30000</p>
            </div>
            <div className='flex items-center justify-between pt-5'>
                <p className='flex items-center'><img className='pr-2' src={location}/>Meadowshire Park, Greenfield, USA</p>
                <button className='py-2 px-2 border'>Bid Property</button>
            </div>

            <p className='py-5 flex items-center'>Property details <img src={Line}/></p>

            <div className='grid grid-cols-3 gap-5 mt-5'>
                <div className='flex items-center'>
                    <img src={icon1}/>
                    <div className='pl-5'>
                        <p>Total Area</p>
                        <p>891 sqft</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={icon3}/>
                    <div className='pl-5'>
                        <p>Status</p>
                        <p>Ready To Move</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <img src={icon2}/>
                    <div className='pl-5'>
                        <p>Total Area</p>
                        <p>891 sqft</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Property
