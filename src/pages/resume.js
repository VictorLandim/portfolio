import React, { useEffect } from 'react'
import 'paper-css/paper.min.css'
import '../components/resume/styles.scss'
import {
  FiLink2,
  FiAtSign,
  FiMapPin,
  FiPhone,
  FiGithub,
  FiLinkedin,
  FiChevronRight
} from 'react-icons/fi'

const resume = {
  name: 'Victor Landim',
  title: 'Full Stack Web Developer',
  about:
    "Passionate full stack web developer always experimenting with code and music. Believes in technology as a means to enhance and positively impact people's slives. Strives for both simplicity and efficiency, by using modern cutting-edge tools as swell as best practices. Always learning and adapting.",
  location: 'Brasília, Brazil',
  phone: '+55 61 9 93750707',
  email: 'hi@victorlandim.com',
  website: 'victorlandim.com',
  github: 'https://github.com/VictorLandim',
  linkedin: 'https://www.linkedin.com/in/victor-landim-95080b135/',
  skills: [
    {
      title: 'Front end',
      content: [
        'HTML5',
        'CSS3 / Sass / BEM',
        'Javascript / ES6',
        'jQuery',
        'React / Redux / Saga',
        'React Native'
      ]
    },
    {
      title: 'Back end',
      content: [
        'Node.js / Express.js',
        'RESTful APIs',
        'MongoDB',
        'PostgreSQL',
        'Parse Server',
        'Firebase'
      ]
    },
    {
      title: 'Deplpoyment',
      content: ['Gulp', 'Webpack', 'AWS / EB', 'Version control', 'Git', 'Bitbucket']
    },
    {
      title: 'Soft skills',
      content: ['Proactivity', 'Self-teaching', 'Empathy', 'Time management', 'Adaptability']
    }
  ],
  education: [
    {
      title: 'Engineer’s Degree in Computer Engineering',
      subtitle: 'University of Brasília',
      time: 'jan 2015 - dec 2020',
      content: ['Researched natural language processing on undergraduate dissertation.']
    }
  ],
  languages: ['Native portuguese', 'fluent english', 'intermediate japanese and spanish'],
  accomplishments: [
    {
      title: 'Workshop "Your first steps with React" | Speaker @ XIV SENE and IV IEEE Week',
      time: '2019',
      content:
        'Volunteered to teach an Intro to React workshop at the University of Brasília, using  original methodology and material.'
    },
    // {
    //   title: 'Hackathon INOVASBAC | Honorable Mention (2019)',
    //   content:
    //     'Collaborated with a multidisciplinary team to create a more efficient and scalable business model and tech stack to the FENASBAC Group.'
    // },
    {
      title: 'Hackathon Caixa | Winner',
      time: '2017',
      content:
        // 'Along with 2 partners, got first place and won $4k prize at the Hackathon hosted by brazilian Insurance company Caixa, by proposing the use of IBM’s Watson chatbot toolkit to support and increase insurance sales.'
        'Won $4k prize at the Hackathon hosted by brazilian Insurance company Caixa, by proposing the use of IBM’s Watson chatbot toolkit to support and increase insurance sales.'
    }
  ],
  experices: [
    {
      position: 'Full Stack Web Developer',
      company: 'Colmeia Tech LTDA',
      companyLink: 'https://aulascolmeia.com.br',
      time: 'feb 2017 - present',
      description: '(Prominent Brazilian startup that connects students to private tutors)',
      content: [
        'First employee at a successful startup in Brasília, from the MVP stage until it raised its first round of investment.',
        'Translated mockups and designs into reusable and efficient UI components and responsive pages.',
        'Participated in weekly sprint meetings, and worked closely with both the marketing and design teams.',
        'Led an effortthe initiative to replace Bootstrap with a custom styling framework developed with Sass and BEM, increasing the efficiency of the workflow with the designers.',
        'Crafted from the ground-up, with the MERN stack, the platform’s web backend, api and frontend pages which were used by thousands of monthly visitors.',
        'Successfully optimized both the website’s pageload speed and SEO, ultimately achieving top rankings on organic searches.',
        'Proposed and implemented state-of-the-art web technologies and practices such as React, React Native, unit testing and E2E testing.'
      ]
    },
    {
      // position: 'Freelance Web Developer',
      company: 'Self Employed Web Developer',
      time: 'feb 2017 - present',
      content: [
        'Collaborated with a designer partner to create and deliver digital products to multiple clients.',
        'Applied agile methodologies to optimize the projects development.',
        'Utilized cutting-edge technologies and industry standards to deliver the most reliable and functional products to the clients.'
      ]
    }
  ]
}

const ResumePage = () => {
  useEffect(() => document.querySelector('body').classList.add('A4'), [])

  const header = () => (
    <header className="cv__header">
      <h1 className="cv__header-title">{resume.name}</h1>
      <h3 className="cv__header-subtitle">{resume.title}</h3>
    </header>
  )

  const skills = () => (
    <>
      <h2 className="cv__title">Skills</h2>
      <div className="cv__skill-container">
        {resume.skills.map(e => (
          <div className="cv__skill">
            <h6 className="cv__skill-title">{e.title}:</h6>

            {/* <div className="cv__skill-content">{e.content.join(', ')}</div> */}
            {e.content.map(f => (
              <div className="cv__skill-content">{f}</div>
            ))}
          </div>
        ))}
      </div>
    </>
  )

  const experiences = () => (
    <>
      <h2 className="cv__title">Experiences</h2>
      {resume.experices.map(e => (
        <div className="cv__experience">
          <h5 className="cv__content-title">
            {e.position && `${e.position} | `}
            {e.companyLink ? (
              <a className="cv__company-link" href={e.companyLink}>
                {e.company}
              </a>
            ) : (
              e.company
            )}{' '}
            {<p className="cv__experience-time">({e.time})</p>}
          </h5>
          <h5 className="cv__content-subtitle">{e.description}</h5>

          {e.content.map(f => (
            <p className="cv__content">
              <FiChevronRight size={12} color="#303030" />
              {f}
            </p>
          ))}
        </div>
      ))}
    </>
  )

  const education = () => (
    <>
      <h2 className="cv__title">Education</h2>
      {resume.education.map(e => (
        <div className="cv__experience">
          <h5 className="cv__content-title">{e.title}</h5>
          <h5 className="cv__content-subtitle">
            {e.subtitle} <br /> ({e.time})
          </h5>

          {e.content.map(f => (
            <p className="cv__content">{f}</p>
          ))}
        </div>
      ))}
    </>
  )

  const languages = () => (
    <>
      <h2 className="cv__title">Languages</h2>

      <p className="cv__content">
        <FiChevronRight size={12} color="#303030" />
        {resume.languages.join(', ')}.
      </p>
    </>
  )

  const info = () => (
    <div className="cv__info">
      <h2 className="cv__info-title">+ info</h2>
      <ul className="cv__info-list">
        <li className="cv__info-item">
          <FiMapPin size={12} color={'#303030'} />
          {resume.location}
        </li>
        <li className="cv__info-item">
          <FiPhone size={12} color={'#303030'} />
          {resume.phone}
        </li>
        <li className="cv__info-item">
          <a href={`mailto:${resume.email}`}>
            <FiAtSign size={12} color={'#303030'} />
            {resume.email}
          </a>
        </li>

        <li className="cv__info-item">
          <a href={`https://${resume.website}`}>
            <FiLink2 size={12} color={'#303030'} />
            {resume.website}
          </a>
        </li>

        <li className="cv__info-item">
          <a href={resume.github}>
            <FiGithub size={12} color={'#303030'} />
            Github
          </a>
        </li>
        <li className="cv__info-item">
          <a href={resume.linkedin}>
            <FiLinkedin size={12} color={'#303030'} />
            Linkedin
          </a>
        </li>
      </ul>
    </div>
  )

  const about = () => (
    <>
      <h2 className="cv__title">About</h2>

      <p className="cv__content">{resume.about}</p>
    </>
  )

  const accomplishments = () => (
    <>
      <h2 className="cv__title">Accomplishments</h2>

      {resume.accomplishments.map(e => (
        <div className="cv__experience">
          <h5 className="cv__content-title">
            {e.title} {<p className="cv__experience-time">({e.time})</p>}
          </h5>

          <p className="cv__content">
            <FiChevronRight size={12} color="#303030" />
            {e.content}
          </p>
        </div>
      ))}
    </>
  )

  return (
    <section className="cv sheet padding-10mm">
      <div className="cv__top">
        <div className="cv__left">
          {header()}
          {about()}
        </div>
        <div className="cv__right">{info()}</div>
      </div>

      <div className="cv__top">
        <div className="cv__left">{skills()}</div>
        <div className="cv__right">{education()}</div>
      </div>

      {experiences()}
      {accomplishments()}
      {languages()}
    </section>
  )
}

export default ResumePage
