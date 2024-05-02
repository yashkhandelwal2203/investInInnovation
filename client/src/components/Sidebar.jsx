import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun } from '../assets';
import { navlinks } from '../constants';


const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div  className={`w-[48px] h-[48px] rounded-[10px]  ${isActive && isActive === name && 'bg-[white]'} flex justify-center items-center ${!disabled && 'cursor-pointer ' } ${styles}`} onClick={handleClick}>
     {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2 bg-#99cccc" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2  ${isActive !== name && '#99cccc'}`} />
    )}
  </div>
)



const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-between items-center flex-col sticky top-4 h-[93vh] ">
      <Link to="/">
        <Icon styles="w-[76px] h-[68px]  bg-[#669999]" imgUrl={logo} />
      </Link>

      <div className="flex-1 flex flex-col justify-between text-[white] items-center bg-[#669999] rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon className="text:[white] " styles=" shadow-secondary bg-[#99cccc]" 
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        <Icon styles=" shadow-secondary bg-[#99cccc] " imgUrl={sun} />
      </div>
    </div>
  )
}

export default Sidebar