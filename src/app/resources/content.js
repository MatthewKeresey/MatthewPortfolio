import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Matthew",
  lastName: "Keresey",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Systems Engineer",
  avatar: "/images/avatar.jpg",
  email: "Matthew@kereseyconnect.com",
  location: "America/New_York", // IANA time zone identifier for US East Coast
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/MatthewKeresey",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/matthew-keresey-67288b290/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4"></strong></>,
    href: "/work/cisco-ccnp-certification",
    media: {
      images: [
        {
          src: "/images/gallery/horizontal-1.jpg",
          alt: "Project image",
          width: 16,
          height: 9,
        },
        {
          src: "/images/gallery/vertical-3.jpg",
          alt: "Project image",
          width: 16,
          height: 9,
        }
      ]
    }
  },
  subline: (
    <>
      I'm Matthew, a design engineer, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/matthewkeresey",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Matthew is a Systems Engineer with a passion for cybersecurity and cloud architecture. 
        With expertise in Azure, automation, and enterprise security solutions, he specializes in 
        building robust, scalable systems that protect and empower businesses. His work combines 
        technical depth with practical problem-solving, whether implementing security frameworks, 
        designing cloud infrastructure, or developing automation pipelines. When not architecting 
        secure systems, he's exploring new technologies and sharing insights on the evolving 
        landscape of enterprise IT and cybersecurity.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Portland International Jetport",
        timeframe: "2025 - Current",
        role: "Network Technician",
        achievements: [
          <>Leading the upgrade and redesign of the jetport's networking infrastructure to enhance reliability, security, and performance for critical airport operations.</>,
        ],
        images: [],
      },
      {
        company: "Dirigo Technology",
        timeframe: "2024 - 2025",
        role: "Cyber Security Engineer",
        achievements: [
          <>
            Oversaw the implementation of a new security system, reducing the risk of data breaches. 
          </>,
          <>
            Spearheaded the integration of Automation tools to streamline security operations, System hardening, and compliance. 
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Maine Health",
        timeframe: "2023 - 2024",
        role: "Desktop Support Technician",
        achievements: [
          <>
            Worked with the IT department to troubleshoot and resolve issues with desktop computers, printers, and other peripherals.
          </>,
          <>
            Worked in a cross functional team to troubleshoot and resolve issues with the company's network and systems and applications.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Certifications",
    institutions: [
      {
        name: "Microsoft Certified: Enterprise Administrator Expert",
        description: <>Implementing and managing Microsoft Windows Server and Active Directory. Microsoft cloud services such as Microsoft XDR, Purview, and Azure.</>,
      },
      {
        name: "Azure Architecture and Design Expert",
        description: <>Virtualizing and managing Microsoft Azure services. Azure Active Directory, Azure Security Center, Azure Sentinel, and Azure Monitor.</>,
      },
      {
        name: "CISSP",
        description: <>Due Diligence and Risk Management, Security and Risk Management, and Security Operations.</>,
      },
      {
        name: "CCNA",
        description: <>Cisco Certified Network Associate.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Experience",
    skills: [
      {
        title: "Automation",
        description: <>N8N, Azure Logic Apps, Azure DevOps, and Powershell.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Auditing and Monitoring",
        description: <>Rapid 7, Microsoft XDR, and Microsoft Purview, and Microsoft Sentinel. Various EDR and SIEM tools.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Cloud Architecture and Design",
        description: <>Azure Devops and Terraform. AWS and GCP experience. Pricing and cost management. Scope and design documents.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/image-05.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
