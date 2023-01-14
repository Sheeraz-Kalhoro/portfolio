import Contact from './Contact';
import { Player } from '@lottiefiles/react-lottie-player';
export default function Main(props){
    return(
        <main>
        <section className='home'>
          <div className='text-box'>
            <p>Hey, there I'm</p>
            <h1>Sheeraz Kalhoro</h1>
            <h3>UX/UI Designer & Front-End Developer</h3>
            <details className='toggle'>
                <summary>User Experience (UX)</summary>
                <p>User experience (UX) design is the process design teams use to create products that provide meaningful and relevant experiences to users.</p>
            </details>
            <details className='toggle' >
                <summary>User Interface (UI)</summary>
                <p>User interface (UI) design is the process designers use to build interfaces in software or computerized devices, focusing on looks or style.</p>
            </details>
            <details className='toggle'>
                <summary>Front-End Development</summary>
                <p>Front-end web development is the development of the graphical user interface of a website, through the use of HTML, CSS, and JavaScript, so that users can view and interact with that website.</p>
            </details>
          </div>
            <div className='image-box'>
            {/* <img src={props.coderImage} alt='coder'/> */}
            <Player 
            src='https://assets10.lottiefiles.com/packages/lf20_p1qiuawe.json'
            loop
            className="player"
            autoplay
            />
            </div>
        </section>
        <h4 id='education'>Education</h4>
        <section className='main-education'>
          {props.education}
        </section>
        <h4 id='skills'>Skills</h4>
        <section className='skills'>
          {props.skills}
        </section>
        <h4 id='contact'>Contact Form</h4>
        <div className='contact-section'>
        <Contact />
        <Player
          src='https://assets4.lottiefiles.com/private_files/lf30_ssbiwdab.json'
          loop
          autoplay
          />
          </div>
      </main>
    )
}