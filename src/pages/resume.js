import 'paper-css/paper.min.css'
import React, { useEffect } from 'react'
import {
  FiAtSign,
  FiChevronRight,
  FiGithub,
  FiLink2,
  FiLinkedin,
  FiMapPin,
  FiPhone,
} from 'react-icons/fi'
import '../components/resume/styles.scss'
import SEO from '../components/seo'

const resume = {
  name: 'Victor Landim',
  title: 'Front-end Engineer',
  about:
    "I'm a front-end engineer passionate about code and music. I believe in technology as a means to enhance and positively impact people's lives. Concerned with efficiency and user experience, I utilize cutting-edge tools to deliver functional digital experiences. <br/> I'm constantly learning and adapting.",
  location: 'Brazil (UTC -3)',
  phone: '+55 61 9 93750707',
  email: 'hi@victorlandim.com',
  website: 'victorlandim.com',
  github: 'https://github.com/VictorLandim',
  linkedin: 'https://www.linkedin.com/in/victor-landim/?locale=en_US',
  skills: [
    {
      title: 'Front-end',
      content: [
        'HTML5',
        'CSS3',
        'Sass',
        'SEO',
        'Typescript',
        'Javascript',
        'ES6',
        'React',
        'Redux',
        'Next.js',
        'Gatsby',
        'Storybook',
        'Jest',
        'Cypress',
      ],
    },
    {
      title: 'Back-end',
      content: ['Node.js', 'Express.js', 'Nest.js', 'REST', 'Graphql', 'MongoDB', 'PostgreSQL'],
    },
    {
      title: 'Deployment',
      content: ['Docker', 'Babel', 'AWS', 'EB', 'EC2', 'Git'],
    },
    {
      title: 'Familiar with',
      content: ['Go', 'Elixir', 'Python', 'Kubernetes', 'Microservices'],
    },
    {
      title: 'Soft skills',
      content: ['Proactivity', 'Self-teaching', 'Empathy', 'Time management', 'Adaptability'],
    },
  ],
  education: [
    {
      title: "Bachelor's degree in <br /> Computer Engineering",
      content: [
        {
          subtitle: 'University of Brasília, Brazil',
          time: 'dec 2021',
          text: ['Researched natural language processing on undergraduate dissertation.'],
        },
        {
          subtitle: 'University of Algarve, Portugal',
          time: 'jan 2020',
          text: ['Top student selected to participate in exchange program for a semester.'],
        },
      ],
    },
  ],
  languages: ['Native portuguese', 'fluent english', 'intermediate japanese and spanish'],
  accomplishments: [
    {
      title: 'Workshop "Your first steps with React" @ IV IEEE Week',
      position: 'Speaker',
      url: 'https://www.sene.unb.br/index.html#speakers',
      time: '2019',
      content: `Volunteered to teach an Intro to React workshop at University of Brasília. Used original methodology and material. (<a target="_blank" href="https://github.com/VictorLandim/workshop-sene-react" class="cv__external-link">github</a>)`,
    },
    // {
    //   title: 'Hackathon INOVASBAC | Honorable Mention (2019)',
    //   content:
    //     'Collaborated with a multidisciplinary team to create a more efficient and scalable business model and tech stack to the FENASBAC Group.'
    // },
    {
      title: 'Hackathon Caixa Insurances',
      position: 'Winner',
      time: '2017',
      url: 'https://campuse.ro/challenges/vem-ai-o-primeiro-hackathon-da-caixa-seguradora/',
      content:
        // 'Along with 2 partners, got first place and won $4k prize at the Hackathon hosted by brazilian Insurance company Caixa, by proposing the use of IBM’s Watson chatbot toolkit to support and increase insurance sales.'
        'Won 1st place $4k prize. Proposed the use of IBM’s Watson chatbot toolkit to support and increase insurance sales.',
    },
  ],
  experiences: [
    {
      position: 'Front-end Engineer',
      company: 'X-Team',
      companyLink: 'https://x-team.com',
      time: 'may 2021 - present',
      description: '',
      content: [
        'Worked with front-end development (Typescript, Next.js, Graphql) for partner <a target="_blank" href="https://www.livenation.com/?redirect=false" class="cv__external-link">Live Nation</a>.',
      ],
    },
    {
      position: 'Front-end Engineer',
      company: 'Goodworld',
      companyLink: 'https://goodworldnow.com',
      time: 'mar 2020 - may 2021 | 1 year, 2 months',
      description:
        '(American D.C.-based fintech startup. A Techstars and 500 Startups Portfolio Company. Current raise led by Mastercard)',
      content: [
        // 'Achieved $560,000 in trailing 12 months revenue; YoY growth of 217% in Feb 2021.',
        `Helped partners raise thousands of dollars and impact thousands of monthly donors implementing custom donation campaign pages created with React, Next.js, Graphql. <br /> Partners include: <a target="_blank" href="https://give.mastercard.com/" class="cv__external-link">Mastercard</a>, <a target="_blank" href="https://www.allforsmall.biz/donate" class="cv__external-link">Citi Bank</a>, <a target="_blank" href="https://mayorsfundla.org/covid19/" class="cv__external-link">City of Los Angeles</a>, <a target="_blank" href="https://www.globalcitizen.org/en/connect/duke-duchess-sussex-covax-donation/" class="cv__external-link">Prince Harry</a>, <a target="_blank" href="https://www.globalcitizen.org/en/media/vaxlive/" class="cv__external-link">Selena Gomez</a>, <a target="_blank" href="https://www.globalcitizen.org/en/media/vaxlive/" class="cv__external-link">Jennifer Lopez</a>, <a target="_blank" href="https://www.globalcitizen.org/en/media/vaxlive/" class="cv__external-link">Foo Fighters</a>, <a target="_blank" href="https://www.globalcitizen.org/en/media/vaxlive/" class="cv__external-link">Ben Affleck</a> & others.`,
        "Leveraged cutting-edge tools (React, Storybook, Typescript, Tailwind) to publish a private design system to unify the company's voice.",
        'Took part in critical product decisions during sprint meetings and calls with partners.',
      ],
    },
    {
      position: 'Full Stack Web Developer',
      company: 'Colmeia Tech',
      companyLink: 'https://aulascolmeia.com.br',
      time: 'feb 2017 - dec 2019 | 2 years, 10 months',
      description: '(Prominent Brazilian startup that connects students to private tutors)',
      content: [
        // 'First hire at a successful startup in Brasília that went through multiple funding rounds and raised $300k+.',
        'Translated mockups and designs into efficient UI components and responsive pages using React, Node, Sass.',
        // 'Participated in weekly sprint meetings, and worked closely with both the marketing and design teams.',
        // 'Led the initiative to replace Bootstrap with a custom styling framework developed with Sass and BEM, that increased the efficiency of the workflow with the designers and marketers.',
        // 'Crafted from the ground-up, with the MERN stack, the platform’s web backend, api and frontend pages which were used by thousands of monthly visitors.',
        // 'Crafted from the ground-up, with the MERN stack, the platform’s backend/api and the frontend, used by thousands of monthly visitors.',
        'Successfully optimized both the website’s pageload speed and SEO, ultimately achieving top rankings on organic searches.',
        // 'Proposed and implemented state-of-the-art web technologies and practices such as React, React Native, unit & e2e testing.',
      ],
    },
    // {
    //   // position: 'Freelance Web Developer',
    //   company: 'Self Employed Web Developer',
    //   description: `(Clients include <a target="_blank" href="http://mediaplusbrasil.com.br" class="cv__external-link">Media Plus</a> and <a target="_blank" href="https://clinicafaber.com.br/" class="cv__external-link">Clinica Faber</a>)`,
    //   clients: [
    //     {
    //       name: 'MediaPlus',
    //       url: 'mediaplusbrasil.com',
    //     },
    //     {
    //       name: 'Clinica Faber',
    //       url: 'clinicafaber.com.br',
    //     },
    //   ],
    //   time: 'feb 2017 - dec 2019',
    //   content: [
    //     'Collaborated with a designer partner to create and deliver digital products to multiple clients.',
    //     "Applied agile methodologies and modern technologies to optimize the projects' development.",
    //     // 'Utilized cutting-edge technologies and industry standards to deliver reliable and functional products.'
    //   ],
    // },
  ],
}

const ResumePage = () => {
  useEffect(() => {
    document.querySelector('body').classList.add('A4')
  }, [])

  const Header = () => (
    <header className="cv__header">
      <h1 className="cv__header-title">{resume.name}</h1>
      <h3 className="cv__header-subtitle">{resume.title}</h3>
    </header>
  )

  const Skills = () => (
    <>
      <h2 className="cv__title">Skills</h2>
      <div className="cv__skill-container">
        {resume.skills.map((e) => (
          <div className="cv__skill">
            <h6 className="cv__skill-title">{e.title}:</h6>
            <div className="cv__skill-content">{e.content.join(', ')}.</div>

            {/* {e.content.map((f) => (
              <div className="cv__skill-content">{f}</div>
            ))} */}
          </div>
        ))}
      </div>
    </>
  )

  const Experiences = () => (
    <>
      <h2 className="cv__title">4 Years of Experience</h2>
      {resume.experiences.map((e) => (
        <div className="cv__experience">
          <h5 className="cv__content-title">
            {e.position && `${e.position} | `}
            {e.companyLink ? (
              <a
                className="cv__company-link cv__external-link"
                href={e.companyLink}
                target="_blank"
                rel="noreferrer"
              >
                {e.company}
              </a>
            ) : (
              e.company
            )}{' '}
            {<p className="cv__experience-time">({e.time})</p>}
          </h5>
          <h5
            className="cv__content-subtitle"
            dangerouslySetInnerHTML={{ __html: e.description }}
          ></h5>

          {e.content.map((f) => (
            <p className="cv__content">
              <FiChevronRight size={12} color="#303030" />
              <span dangerouslySetInnerHTML={{ __html: f }} />
            </p>
          ))}
        </div>
      ))}
    </>
  )

  const Education = () => (
    <>
      <h2 className="cv__title">Education</h2>
      {resume.education.map((e) => (
        <div className="cv__experience">
          <h5
            className="cv__content-title"
            style={{ marginBottom: '10px' }}
            dangerouslySetInnerHTML={{ __html: e.title }}
          ></h5>
          {e.content.map((f) => (
            <>
              <h5 className="cv__content-subtitle">
                {f.subtitle} ({f.time})
              </h5>

              <p className="cv__content cv__content--education">{f.text}</p>
            </>
          ))}
        </div>
      ))}
    </>
  )

  const Languages = () => (
    <>
      <h2 className="cv__title">Languages</h2>

      <p className="cv__content">
        <FiChevronRight size={12} color="#303030" />
        {resume.languages.join(', ')}.
      </p>
    </>
  )

  const Info = () => (
    <div className="cv__info">
      {/* <h2 className="cv__info-title">+ info</h2> */}
      <ul className="cv__info-list">
        <li className="cv__info-item">
          <FiMapPin size={12} color={'#303030'} />
          {resume.location}
        </li>
        <li className="cv__info-item">
          <FiPhone size={12} color={'#303030'} />
          {resume.phone}
        </li>
        <li className="cv__info-item cv__info-item--underline">
          <a target="_blank" rel="noreferrer" href={`mailto:${resume.email}`}>
            <FiAtSign size={12} color={'#303030'} />
            {resume.email}
          </a>
        </li>

        <li className="cv__info-item cv__info-item--underline">
          <a target="_blank" rel="noreferrer" href={`https://${resume.website}`}>
            <FiLink2 size={12} color={'#303030'} />
            {resume.website}
          </a>
        </li>

        <li className="cv__info-item cv__info-item--underline">
          <a target="_blank" rel="noreferrer" href={resume.github}>
            <FiGithub size={12} color={'#303030'} />
            Github
          </a>
        </li>
        <li className="cv__info-item cv__info-item--underline">
          <a target="_blank" rel="noreferrer" href={resume.linkedin}>
            <FiLinkedin size={12} color={'#303030'} />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  )

  const About = () => (
    <>
      <h2 className="cv__title">About</h2>

      <p className="cv__content" dangerouslySetInnerHTML={{ __html: resume.about }} />
    </>
  )

  const Accomplishments = () => (
    <>
      <h2 className="cv__title">Accomplishments</h2>

      {resume.accomplishments.map((e) => (
        <div className="cv__experience">
          <h5 className="cv__content-title">
            {e.position && `${e.position} | `}
            {e.url ? (
              <a
                className="cv__company-link cv__external-link"
                href={e.url}
                target="_blank"
                rel="noreferrer"
              >
                {e.title}
              </a>
            ) : (
              e.title
            )}{' '}
            {<p className="cv__experience-time">({e.time})</p>}
          </h5>

          <p className="cv__content">
            <FiChevronRight size={12} color="#303030" />
            <span dangerouslySetInnerHTML={{ __html: e.content }}></span>
          </p>
        </div>
      ))}
    </>
  )

  const LinkMessage = () => (
    <div className="link-message">
      Coded with React -{' '}
      <a target="_blank" rel="noreferrer" href="https://victorlandim.com/resume">
        victorlandim.com/resume
      </a>
    </div>
  )

  return (
    <>
      <SEO
        title="Victor Landim | Resume"
        keywords={[
          `victor`,
          `landim`,
          `web`,
          `developer`,
          `programmer`,
          `portfolio`,
          `skills`,
          `react`,
          `react native`,
          `javascript`,
          `programming`,
          `fullstack`,
          `frontend`,
          `backend`,
        ]}
      />
      <section className="cv sheet padding-10mm" style={{ padding: '8mm' }}>
        <div className="cv__top">
          <div className="cv__left">
            <Header />
            <About />
            <Skills />
          </div>

          <div className="cv__right">
            <Info />
            <Education />
          </div>
        </div>

        {/* <div className="cv__top">
          <div className="cv__left">{skills()}</div>
          <div className="cv__right">{education()}</div>
        </div> */}
        <Experiences />
        <Accomplishments />
        {/* <Languages /> */}

        <LinkMessage />
      </section>
    </>
  )
}

export default ResumePage
