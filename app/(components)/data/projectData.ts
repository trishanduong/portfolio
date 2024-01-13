type ProjectDataType = {
  projectName: string;
  desc: string;
  techStack: string[];
  images: string[]; 
  link: string;
};

const ProjectData = [
  {
    projectName: 'PetPals 🐾',
    desc: 'The ultimate doggy playdate app - chat with fellow dog owners and set up the perfect playdate!',
    techStack: ['React', 'Next.js', 'tRPC', 'Prisma', 'Typescript', 'Tailwind CSS', 'NextAuth'],
    images:[],
    link:'https://petpal-xi.vercel.app/'
  },
  {
    projectName: 'OverVue - Open Source Product',
    desc: 'An intuitive Vue prototyping tool that enables developers to seamlessly build & visualize Vue.js applications.',
    techStack: ['Vue.js', 'Vuetensils', 'Vue Router', 'Pinia', 'Jest', 'Electron', 'Quasar'],
    images:['/projects/overvue/OvervueLanding.png', 'https://media.giphy.com/media/ZulevY0tBZnUOCDpY7/giphy.gif', 'https://live.staticflickr.com/65535/53169434723_70b6cf748c_b.jpg','https://media.giphy.com/media/ptfGbJdSUODKZXY6XO/giphy.gif'],
    link:'https://www.overvue.org/'
  }
]

export default ProjectData;