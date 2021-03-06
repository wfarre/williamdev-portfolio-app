function Header(){
    return (
        <header className='header'>
          <span className='header__hello'>Hello, my name is</span>
          <h1 className='header__title'>William Farré.</h1>
          <h2 className='header__title--sub'>I love making websites!</h2>
          <p className='header__presentation'>I am a frontend web developper with a 
          previous<br/> background in customer service.</p>
          <a href='mailto:william.farre@gmail.com' className='btn btn-contact'>Contact Me</a>
        </header>
    )
}

export default Header;