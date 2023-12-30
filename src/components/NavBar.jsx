import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants/index'
const NavBar = () => {
  return (
   <header className='padding-x py-8 absolute z-10 w-full'>
    <nav className='flex justify-between items-center max-container'>
      <a href='/'>
        <img
          src={headerLogo}
          alt='logo'
          width={130}
          height={29}
        />
      </a>
      {/* Navigation Links */}
      <ul className='flex-1 flex
      justify-center items-center gap-16 max-lg:hidden'>
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a
              href={item.href}
              className={item.href === "#Sign-in" ? 'font-bold-300 font-montserrat leading-normal text-lg text-slate-gray-600 hover:underline transition-colors duration-200' :
             'font-montserrat leading-normal text-lg text-slate-gray hover:text-black transition-colors duration-200'}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div>

      </div>
      <div>
        <img
          src={hamburger}
          alt='Hamburger'
          width={25}
          height={25}
          className='hidden max-lg:block cursor-pointer'
        />
      </div>
    </nav>
   </header>
  )
}

export default NavBar
