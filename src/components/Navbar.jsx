function Navbar(){
    return(
        <nav className='nav'>
      <div className='logo-wrapper'>
          <h2>William Web Dev</h2>
      </div>
      <ul className='navbar'>
        <li className='navbar__item'>
          <a className='navbar__item__link' href="#">Home</a>
        </li>

        <li className='navbar__item'>
          <a className='navbar__item__link' href="#about">About me</a>
        </li>

        <li className='navbar__item'>
          <a className='navbar__item__link' href="#portfolio">Portfolio</a>
        </li>

        <li className='navbar__item'>
          <a className='navbar__item__link' href="#contact">Contact me</a>
        </li>
      </ul>

     </nav>
    )
}

export default Navbar;