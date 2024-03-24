import { Link, useNavigate } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { PiBrain } from "react-icons/pi";

const AppHeader = () => {

  const navigate = useNavigate();

  return (
    <div className='bg-sky-500 h-12 px-28 flex items-center shadow-lg  justify-between'>
      {/* Logo  */}
      <h1 className='font-bold text-white font-mono text-lg flex items-center  space-x-2' onClick={()=>navigate("/")}>
       <span className='flex items-center'> <PiBrain className='text-4xl'/>Brain</span>
        <span className='text-blue-900'>Tumor  </span> 
      </h1>

      {/* Menu  */}
      <ul className='flex space-x-8 items-center text-white text-xl'>
        <li className='hover:cursor-pointer hover:text-sky-900'>
          <Link to="/" className='flex items-center space-x-1'><FaHome /></Link>
        </li>
        <li className='hover:cursor-pointer hover:text-sky-900'>
          <Link to="/about"><MdPeopleAlt/></Link>
        </li>
        <li className='hover:cursor-pointer hover:text-sky-900'>
          <Link to="/contact"><MdEmail/></Link>
        </li>
      </ul>
      

    </div>
  )
}

export default AppHeader
