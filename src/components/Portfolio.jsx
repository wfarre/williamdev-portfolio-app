import Fisheye from '../assets/screenshots/fisheye.png';
import Ohmyfood from '../assets/screenshots/ohmyfood.png';
import Splitter from '../assets/screenshots/splitter.png';
import Crowdfund from '../assets/screenshots/crowdfunding.png';
import GameOn from '../assets/screenshots/gameOn.png'



function Portfolio(){
    return(
        <section id='portfolio' className='section section--portfolio'>

        <div className='container container--section'>
            <div className='section__body'>
            <header className='section__body__header'>
          <h3 className='section__body__header__title'> Portfolio</h3>
        </header>

        <div className='section__body__content'>

        <div className='container'>
          <a href='https://front-end-fisheye.vercel.app/' className='card'>
            <div className='image-wrapper'>
              <img src={Fisheye}></img>
            </div>

            <div className='card__body'>
            <div className='card__body__header'>
              <h4 className='card__body__header__title'>
                Fisheye  - OpenClassrooms project
              </h4>
              <div className='card__body__header__tags'>
                <ul className='tag-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>Accessibility</li>
                  <li>Sass</li>
                </ul>
              </div>
            </div>
            <div className='card__body__content'>
              Here is a design I intergrated as a project when I was studying at OpenClassrooms. The main purpose of this project
              was to develop a website accessible to everyone by meeting the accessibility rules.
            </div>

            </div>

          </a>

          <a href='https://p3-ohmyfood.vercel.app/' className='card'>
            <div className='image-wrapper'>
              <img src={Ohmyfood}></img>
            </div>

            <div className='card__body'>
            <div className='card__body__header'>
              <h4 className='card__body__header__title'>
                Ohmyfood - OpenClassrooms project
              </h4>
              <div className='card__body__header__tags'>
                <ul className='tag-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Sass</li>
                </ul>
              </div>
            </div>
            <div className='card__body__content'>
              The main purpose of this project was to practice animations without using any Javascript or framework.
            </div>

            </div>

          </a>

          <a href='https://tip-calculator-np57w2pld-wfarre.vercel.app/' className='card'>
            <div className='image-wrapper'>
              <img src={Splitter}></img>
            </div>

            <div className='card__body'>
            <div className='card__body__header'>
              <h4 className='card__body__header__title'>
                Splitter - frontendmentor.io
              </h4>
              <div className='card__body__header__tags'>
                <ul className='tag-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>Sass</li>
                </ul>
              </div>
            </div>
            <div className='card__body__content'>
              Here is a design from frontendmentor.io that I used to practice my Javascript and Css skils.
            </div>

            </div>

          </a>

          <a href='https://crowdfunding-challenge.vercel.app/' className='card'>
            <div className='image-wrapper'>
              <img src={Crowdfund}></img>
            </div>

            <div className='card__body'>
            <div className='card__body__header'>
              <h4 className='card__body__header__title'>
                Crowdfund - frontendmentor.io
              </h4>
              <div className='card__body__header__tags'>
                <ul className='tag-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                  <li>Sass</li>
                </ul>
              </div>
            </div>
            <div className='card__body__content'>
              Here is a design from frontendmentor.io that I used to practice my Javascript and Css skils.
            </div>

            </div>

          </a>

          <a href='https://game-on-website-fr.vercel.app/' className='card'>
            <div className='image-wrapper'>
              <img src={GameOn}></img>
            </div>

            <div className='card__body'>
            <div className='card__body__header'>
              <h4 className='card__body__header__title'>
                GameOn - OpenClassrooms
              </h4>
              <div className='card__body__header__tags'>
                <ul className='tag-list'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JS</li>
                </ul>
              </div>
            </div>
            <div className='card__body__content'>
             As a part of my course in OpenClassrooms, I had to develop a contact form for the website GameOn using Javascript.
            </div>

            </div>

          </a>

          </div>
        </div>
                
            </div>


            <div className='decoration'>
                <h2 className='decoration__text'>ポートフォリオ</h2>
            </div>
        </div> {/* .container--section */}




      
      </section>
    )
}

export default Portfolio;