import PB from '../../assets/powerbackuppng.png'
import Gym from '../../assets/gym.png'
import lift from '../../assets/lift.png'
import ch from '../../assets/clubhouse.png'
import Park from '../../assets/park.png'
import ReservedParking from '../../assets/reserved.png'
import laundry from '../../assets/Laundry.png'
import dth from '../../assets/dth.png'
import learning from '../../assets/learning.png'
import security from '../../assets/security.png'
import garden from '../../assets/garden.png'
import gsa from '../../assets/gas.png'
import goods from '../../assets/goodslift.png'
import maintenance from '../../assets/maintenence.png'
import shoe from '../../assets/show.png'
import badminton from '../../assets/badminton.png'
import wifi from '../../assets/wifi.png'
import water from '../../assets/water.png'
import waste from '../../assets/waste.png'
import visitor from '../../assets/visitor.png'
import kids from '../../assets/kids.png'
import tennis from '../../assets/tennie.png'
import vaastu from '../../assets/vaastu.png'
import intercom from '../../assets/internet.png'





const Amenities  = () => {
  return (
    <div>
        <div className="bg-[#E5E7EB] max-w-[1240px] mx-auto">
          <h3 className='pl-6 pt-6 '>Amenities</h3> 
          <div className='grid grid-cols-4 gap-8 p-6'>
            <div className='flex items-center'>
                <img src={PB}/>
                <p className='pl-4'>Power Backup</p>
            </div>
            <div className='flex items-center'>
                <img src={lift}/>
                <p className='pl-4'>Lift</p>
            </div>
            <div className='flex items-center'>
                <img src={ch}/>
                <p className='pl-4'>Club House</p>
            </div>
            <div className='flex items-center'>
                <img src={Gym}/>
                <p className='pl-4'>Gymnasium</p>
            </div>
            <div className='flex items-center'>
                <img src={Park}/>
                <p className='pl-4'>Park</p>
            </div>
            <div className='flex items-center'>
                <img src={ReservedParking}/>
                <p className='pl-4'>Reserved Parking</p>
            </div>
            <div className='flex items-center'>
                <img src={security}/>
                <p className='pl-4'>Security</p>
            </div>
            <div className='flex items-center'>
                <img src={water}/>
                <p className="pl-4">Water Storage</p>
            </div>
            <div className='flex items-center'>
                <img src={garden}/>
                <p className="pl4">Private Terrace/Garden</p>
            </div>
            <div className='flex items-center'>
                <img src={vaastu}/>
                <p className="pl4">Vaastu Compliant</p>
            </div>
            <div className='flex items-center'>
                <img src={goods}/>
                <p className='pl-4'>Service/Goods Lift</p>
            </div>
            <div className='flex items-center'>
                <img src={visitor}/>
                <p className='pl-4'>Visitor Parking</p>
            </div>
            <div className='flex items-center'>
                <img src={intercom}/>
                <p className='pl-4'>Intercom Facility</p>
            </div>
            <div className='flex items-center'>
                <img src={maintenance}/>
                <p className='pl-4'>Maintenance Staff</p>
            </div>
            <div className='flex items-center'>
                <img src={waste}/>
                <p className='pl-4'>Waste Disposal</p>
            </div>
            <div className='flex items-center'>
                <img src={laundry}/>
                <p className='pl-4'>Laundry Service</p>
            </div>
            <div className='flex items-center'>
                <img src={wifi}/>
                <p className='pl-4'>Internet/Wi-Fi Connectivity</p>
            </div>
            <div className='flex items-center'>
                <img src={dth}/>
                <p className='pl-4'>DTH Television Facility</p>
            </div>
            <div className='flex items-center'>
                <img src={gsa}/>
                <p className='pl-4'>Piped Gas</p>
            </div>
            <div className='flex items-center'>
                <img src={shoe}/>
                <p className='pl-4'>Jogging and Strolling Track</p>
            </div>
            <div className='flex items-center'>
                <img src={tennis}/>
                <p className='pl-4'>Outdoor Tennis Courts</p>
            </div>
            <div className='flex items-center'>
                <img src={learning}/>
                <p className='pl-4'>Early Learning Centre</p>
            </div>
            <div className='flex items-center'>
                <img src={kids}/>
                <p className='pl-4'>Kids Play Area</p>
            </div>
            <div className='flex items-center'>
                <img src={badminton}/>
                <p className='pl-4'>Indoor Squash & Badminton Courts</p>
            </div>

          </div>   
        </div>      
    </div>
  )
}

export default Amenities 
