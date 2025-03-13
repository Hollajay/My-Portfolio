import projectimage from '../assets/project.jpg'
import collegemigration from '../assets/collagemigration.png'
import tedcillion from '../assets/tedcillion.png'
import realestate from '../assets/realestate.png'
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
        link: "https://xyzz.tedcillionservices.com/",
        icons: [
            { icon: <Icon type="tailwindIcon"/> },
            { icon: <Icon type="reduxIcon"/> },
          ],

    },
    {
        image: realestate,
        title: 'Xlens Visualization',
        details:"A creative studio specializing in Architectural Design, Interior Design, and 3D Visualization. We bring visions to life with high-quality render images, immersive animation videos, and interactive virtual tours",
        link: "https://xlensstudio.onrender.com"
    },
    {
        image: projectimage,
        title: 'Coin Render',
        details:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cumque. Itaque repellendus sit ducimus ut tempore pariatur ipsum unde? Eius consequatur",
        link: "https://my_link.com"
    },
    {
        image: projectimage,
        title: 'Coin Render',
        details:" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, cumque. Itaque repellendus sit ducimus ut tempore pariatur ipsum unde? Eius consequatur",
        link: "https://my_link.com"
    },


]