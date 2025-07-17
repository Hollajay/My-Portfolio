import projectimage from '../assets/project.jpg'
import collegemigration from '../assets/collagemigration.png'
import tedcillion from '../assets/tedcillion.png'
import realestate from '../assets/realestate.png'
import techwavehost from '../assets/techwavehost.png'
import { Icon } from './Icon'

export const projectProps = [
    {
      image: collegemigration,
      title:  'College Migration',
      details:"Discover a world of opportunities with our study abroad programs. Our website provides comprehensive resources and support to help you find the perfect program that fits your academic and personal goals.",
      link: "https://collegemigrationmain.vercel.app",
      icons: [
        { icon: <Icon type="reactjsIcon" /> },
        { icon: <Icon type="reduxIcon" /> },
        { icon: <Icon type="tailwindIcon" /> },
        { icon: <Icon type="framerIcon" /> },
      ],
    },
    {
        image: tedcillion,
        title: 'Tedcillion',
        details:" The website offers seamless assistance with travel, study, work permits, and personalized tour experiences, ensuring a smooth, hassle-free, and enjoyable journey for all clients.",
        link: "https://www.tedcillionservices.com/",
        icons: [
            { icon: <Icon type="phpIcon"/> },
            { icon: <Icon type="laravelIcon"/> },
            { icon: <Icon type="htmlIcon"/> },
            { icon: <Icon type="cssIcon"/> },
            { icon: <Icon type="bootstrapIcon"/> },
            
          ],

    },
    {
        image: realestate,
        title: 'Xlens Visualization',
        details:"A creative studio specializing in Architectural Design, Interior Design, and 3D Visualization. We bring visions to life with high-quality render images, immersive animation videos, and interactive virtual tours",
        link: "https://xlensstudio.onrender.com",
        icons: [   
          {icon: <Icon type='reactjsIcon'/>},
          {icon: <Icon type='nodeIcon'/>},
          { icon: <Icon type="htmlIcon"/> },
          { icon: <Icon type="cssIcon"/> },
        ]
    },
    {
        image: techwavehost,
        title: 'Techwavehost',
        details:" a modern web hosting platform that offers reliable shared hosting, domain registration, and email services. My role involved working on responsive front-end interfaces, improving user experience, and ensuring seamless functionality across the platform.",
        link: "https://techwavehost.com/",
        icons: [
          {icon: <Icon type='htmlIcon' />},
          {icon: <Icon type='cssIcon' />},
          {icon: <Icon type='bootstrapIcon' />},
          {icon: <Icon type='phpIcon'/>}
          
        ]
    },
    {
        image: projectimage,
        title: 'Coin Render',
        details:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cumque. Itaque repellendus sit ducimus ut tempore pariatur ipsum unde? Eius consequatur",
        link: "https://my_link.com"
    },


]