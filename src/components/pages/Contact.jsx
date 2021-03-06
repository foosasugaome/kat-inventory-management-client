export default function Contact(){
    return (
        <>
       <div className='flex-container'>
      <h3>Meet the team</h3>
    </div>
    <div className='profile-container'>

        <div className='profile-holder'>
          <div className='card-profile'>
              <img src='tkim.jpg' alt='' className='img-profile' width='200' />
          </div>
          <div className='profile-text'>
              <h3>Tae Kim</h3>
              <h4>Fullstack Developer</h4>
              <h5>
                I am a software engineer coming from a background in speech 
                language pathology and rehab. I take the problem solving, 
                quick adaptability, and strategic planning that I have learned 
                to help tackle and identify methodical solutions to complex 
                coding problems. I embrace the journey of learning and commit 
                to taking on new challenges each day.
              </h5>
              <p className='icon-holder'>
              <a href='https://www.taehkim.com' target='_blank' rel='noreferrer'><img src='portfolio.png' alt='portfolio logo' className='icon' /></a>
                <a href='https://github.com/taekim90'  target='_blank' rel='noreferrer'><img src='gitlogo.png' alt='github logo' className='icon' /></a>
                <a href='https://www.linkedin.com/in/taekim90/' target='_blank' rel='noreferrer'><img src='linkedin.png' alt='linkedin logo' className='icon' /></a>                
                </p>
          </div>                    
        </div>
          
        <div className='profile-holder'>
          <div className='card-profile justin'>
            <img src='jaquino.png' className='img-profile' alt=''  />
          </div>
          <div className='profile-text'>
            <h3>Justin Aquino</h3>
            <h4>Fullstack Developer</h4>
            <h5>
            I am a proactive and dedicated individual with a background in restaurant management, desiring to utilize full-stack development skills. My tenacity for learning and creating led me to pursue a career in tech with hopes of transferring my creativity in making menus and recipes over to creating something inclusive, that may help with the collective advancement of human technology.
            </h5>
            <p className='icon-holder'>
            <a href='https://akinodev.com' target='_blank' rel='noreferrer'><img src='portfolio.png' alt='akinodev.com' className='icon' /></a>
                <a href='https://github.com/justin-aquino'  target='_blank' rel='noreferrer'><img src='gitlogo.png' alt='https://github.com/justin-aquino' className='icon' /></a>
                <a href='https://www.linkedin.com/in/justinaquino-dev/' target='_blank' rel='noreferrer'><img src='linkedin.png' alt='https://www.linkedin.com/justinaquino-dev/' className='icon' /></a>                
                </p>
          </div>
          </div>
          <div className='profile-holder'>
            <div className='card-profile'>
              <img src='nteodoro.jpg' className='img-profile' alt='' />
            </div>
            <div className='profile-text'>
              <h3>Norman Teodoro</h3>
              <p>
              <h4>Git Manager</h4></p>
              <h5>
              I have worked in the fields of tech, insurance, manufacturing, and education, having held different roles like support, systems administration, and development. I am always looking for ways to maximize my potential by learning from my experiences and giving back to the community.                
              </h5>
              <p className='icon-holder'>
                <a href='https://www.findingnorman.ca/' target='_blank' rel='noreferrer'><img src='portfolio.png' alt='https://github.com/foosasugaome' className='icon' /></a>
                <a href='https://github.com/foosasugaome'  target='_blank' rel='noreferrer'><img src='gitlogo.png' alt='https://github.com/foosasugaome' className='icon' /></a>
                <a href='https://www.linkedin.com/in/normanteodoro/' target='_blank' rel='noreferrer'><img src='linkedin.png' alt='https://github.com/foosasugaome' className='icon' /></a>                
                </p>
            </div>
          </div>
        </div>

        
        </>
    )
}