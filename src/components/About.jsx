function About(){
    return(
        <section id="about" className='section section--about section--right'>


        <div className="container container--section">
        <div className='decoration'>
                <h2 className='decoration__text'>自己紹介</h2>
            </div>

            <div className="section__body">

            <header className='section__body__header'>
            <h3 className='section__body__header__title'>About me</h3>
          </header>

          <div className='section__body__content'>
            <p>Hello World! My name is William and I enjoy web development. I have always been interested by programming 
            but I didn't know where I should start, until I discovered programming for the web back in December 2020. Since then, 
            I haven't stopped programming and trying to intergrate different designs into a website.</p>

            <p>I worked for ten years in customer service, including four years in hospitality in Japan. 
            I can speak French, Japanese and English. However, I thought I needed a new skills, that's why I started learning web development.
            I do think coupling my previous background and my new skills will be a big strength in the future.</p>

            <p>Here are the technologies I am using recently:</p>
            <ul className='list list--technology'>
              <li className='list--technology__item'>HTML/CSS</li>
              <li className='list--technology__item'>Javascript</li>
              <li className='list--technology__item'>Sass</li>
              <li className='list--technology__item'>React</li>
              <li className='list--technology__item'>Bootstrap</li>
            </ul>
          </div>


            </div>
        </div>
         


        </section>
    )
}

export default About;