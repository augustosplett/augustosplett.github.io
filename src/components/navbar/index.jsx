import { useState, useEffect, useRef } from 'react';
import RoutesMenu from '../routesMenu';
import CurlyBracketsLeft from '@/assets/curly-brackets-left.svg';
import CurlyBracketsRight from '@/assets/curly-brackets-right.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <div className="dropdown" ref={dropdownRef}>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <label className="btn btn-circle swap swap-rotate">
              <input type="checkbox" checked={isOpen} onClick={toggleMenu} readOnly />
              <svg
                className="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
              </svg>
              <svg
                className="swap-on fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512">
                <polygon
                  points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
              </svg>
            </label>
          </div>
          {isOpen && (
            <RoutesMenu
              tabIndex={0}
              cssClasses="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow" 
            />
          )}
        </div>
        <CurlyBracketsLeft className="fill-current" width={50} height={50}/>
          <strong><h1 className='text-xl' style={{fontSize: '2rem'}}>Augusto.Splett</h1></strong>
        <CurlyBracketsRight className="fill-current" width={50} height={50}/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <RoutesMenu 
          cssClasses="menu menu-horizontal px-1"
        />
      </div>
    </div>
  );
}