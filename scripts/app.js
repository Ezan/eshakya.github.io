const { createApp } = Vue;

createApp({
  data() {
    return {
      experience: [
        {
          title: "Business Architecture Specialist",
          company: "Accenture",
          location: "San Francisco, CA",
          period: "Apr 2025 - Present",
          projects: [
            {
              name: "Jumpmind Commerce",
              bullets: [
                "Developed, built and integrated Jumpmind Commerce (JMC) POS system for well-known retail clients.",
                "Implemented custom features on JMC with decoupled UI and microservice-based architecture, increasing client retention by 35% and usability satisfaction by 40%.",
                "Involved in feature implementations and maintenance support, including bug fixes and various test scenarios."
              ]
            }
          ]
        },
        {
          title: "Developer/Consultant",
          company: "Logic, Part of Accenture",
          location: "Bloomington, MN",
          period: "Jun 2024 - Mar 2025",
          projects: [
            {
              name: "Jumpmind Commerce",
              bullets: [
                "Provided technical solutions and maintenance support to retail clients on JMC POS system.",
                "Delivered feature implementations, integrations, bug fixes, and conducted various test scenarios."
              ]
            },
            {
              name: "VTEX Ecommerce",
              bullets: [
                "Provided backend solution for implementing and testing action triggers on data creation and update.",
                "Designed and implemented frontend logic for store-locator module for VTEX web-based ecommerce application.",
                "Participated in technical and functional training bootcamp, and achieved VTEX certification."
              ]
            }
          ]
        },
        {
          title: "Graduate Research Assistant",
          company: "University of Nebraska at Omaha",
          location: "Omaha, Nebraska",
          period: "Aug 2022 - May 2024",
          projects: [
            {
              bullets: [
                "Research on deep learning, computer vision, and NLP for biomedical documents; developed a multi-modal domain-specific document classification framework.",
                "Built ML pipeline for contrastive language-image pretraining for biomedical information retrieval.",
                "Developed auto-image captioning module and data extraction engine for biomedical datasets.",
                "Prepared presentations, manuscripts, abstracts, and chapters for publication."
              ]
            }
          ]
        },
        {
          title: "Software Development Intern",
          company: "Logic Information Systems, Inc.",
          location: "Bloomington, MN (Remote)",
          period: "June 2023 - Aug 2023",
          projects: [
            {
              name: "Oracle Retail Xstore POS",
              bullets: [
                "Developed, upgraded, and customized features for Oracle Xstore POS using Agile methodology (Java).",
                "Provided solutions and bug fixes for high-value clients like Genesco.",
                "Participated in scrum meetings, sprint planning, code reviews, and other SDLC processes."
              ]
            }
          ]
        },
        {
          title: "Software Engineer",
          company: "LIS Nepal Pvt. Ltd.",
          location: "Lalitpur, Nepal",
          period: "Jul 2019 - Jul 2022",
          projects: [
            {
              name: "Proprietary Project Management App",
              bullets: [
                "Led frontend team; feature development (RBAC, .NET integrations), bug fixes in project management tool (ReactJS, Laravel, REST APIs)."
              ]
            },
            {
              name: "Compliance Management Tool (Fintech)",
              bullets: [
                "Developed UI for compliance management app (React, Typescript, Redux Saga, Django REST).",
                "Worked on Auth0 integration, document verification, localization; improved user satisfaction by 35%."
              ]
            },
            {
              name: "Oracle XBRi Development",
              bullets: [
                "Developed POSlog mapping tool and cloud-based reporting for Oracle XBRi.",
                "Designed and developed custom reports for clients."
              ]
            },
            {
              name: "LLS Curbside-pickup",
              bullets: [
                "Developed web-based SaaS for curbside pickup (NodeJS, EmbeddedJS, REST APIs).",
                "Integrated Twilio and SendGrid for customer support."
              ]
            },
            {
              name: "XStore POS",
              bullets: [
                "Contributed to development, localization, and support for Java EE-based XStore POS."
              ]
            }
          ]
        }
      ],
      projects: [
        {
          name: "Nepali Braille",
          desc: "Hardware-based Android app enabling users to learn Braille in Devanagari script with tactile feedback and voice output.",
          award: "Best Project Award, Code Camp Event, Nepal"
        },
        {
          name: "ViTransUNet",
          desc: "DL project using transformer-based encoder on UNet for bacterial image segmentation (dice score >75%). Published in 'Machine Learning in 2D Materials Science'."
        },
        {
          name: "The Yellow Parchment",
          desc: "Personal blogging web app using React, Typescript, GraphQL, and MongoDB."
        }
      ],
      skills: [
        {
          group: "Languages & OOP",
          items: ["C++", "Java", "JavaScript", "TypeScript", "HTML", "CSS/SCSS", "SQL", "NoSQL"]
        },
        {
          group: "Tools & Frameworks",
          items: [
            "ReactJS", "Redux", "Bootstrap", "Spring", "Django", "Flask",
            "MongoDB", "PostgreSQL", "GraphQL", "Git", "Confluence", "AWS"
          ]
        },
        {
          group: "Platforms",
          items: ["Linux", "Windows", "macOS", "Android Studio"]
        }
      ],
      education: [
        {
          degree: "Master of Science in Computer Science",
          school: "University of Nebraska at Omaha",
          location: "2022-",
          details: [
            "GPA: 3.95/4.0",
            "Courses: Computer Vision, Robotics, AI, Software Specification and Design"
          ]
        },
        {
          degree: "Bachelor of Engineering in Computer Engineering",
          school: "Kathmandu University",
          location: "2015-",
          details: [
            "GPA: 3.24/4.0",
            "Electives: Artificial Intelligence, Machine Learning"
          ]
        }
      ]
    }
  }
}).component('experience-timeline', {
  props: ['experience'],
  template: `
    <div class="timeline">
      <div class="entry" v-for="role in experience" :key="role.title + role.period">
        <h3>{{ role.title }} <span style="color:#2ca6a4;">@ {{ role.company }}</span></h3>
        <div class="meta">{{ role.period }} &bull; {{ role.location }}</div>
        <div v-for="proj in role.projects">
          <div v-if="proj.name"><b>{{ proj.name }}</b></div>
          <ul>
            <li v-for="b in proj.bullets" :key="b">{{ b }}</li>
          </ul>
        </div>
      </div>
    </div>
  `
}).component('project-cards', {
  props: ['projects'],
  template: `
    <div class="projects">
      <div class="project-card" v-for="p in projects" :key="p.name">
        <h4>{{ p.name }}</h4>
        <p>{{ p.desc }}</p>
        <div v-if="p.award" class="award">🏆 {{ p.award }}</div>
      </div>
    </div>
  `
}).component('skills-list', {
  props: ['skills'],
  template: `
    <div class="skills-list">
      <div class="skill-group" v-for="g in skills" :key="g.group">
        <h5>{{ g.group }}</h5>
        <ul>
          <li v-for="item in g.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  `
}).component('education-list', {
  props: ['education'],
  template: `
    <div class="education-list">
      <div class="edu-entry" v-for="edu in education" :key="edu.degree">
        <h4>{{ edu.degree }}</h4>
        <div class="meta">{{ edu.school }} &mdash; {{ edu.location }}</div>
        <ul>
          <li v-for="d in edu.details" :key="d">{{ d }}</li>
        </ul>
      </div>
    </div>
  `
}).mount('#app');