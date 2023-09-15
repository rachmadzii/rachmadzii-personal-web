import image from 'assets/images/my_photo.png';
import {
  BsInstagram,
  BsGithub,
  BsDribbble,
  BsTwitter,
  BsGlobe2,
} from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa';

export const data = {
  title: 'I am Rachmadzii.',
  description:
    'I am interested in becoming a frontend developer who builds user-friendly websites and becomes a valuable person for others by sharing knowledge and insights.',
  photo: image,
  name: 'Rachma Adzima Maulida',
  about:
    'I am Rachma, an undergraduate at UPN Veteran Jakarta majoring in Informatics. Welcome to my space on the web; this space will be used to share projects I have made, my writings, and other things I want to share. <br /> Since getting to know technology, I have liked exploring all fields such as UI Design, Web Design, Mobile Development, Web Development, Flutter, and Quality Assurance. Besides, I will never stop learning to increase my knowledge. Sometimes the world goes so fast that I have to keep up!',
  socialMedia: [
    {
      name: 'LinkedIn',
      icon: FaLinkedinIn,
      link: 'https://www.linkedin.com/in/rachma-adzima/',
    },
    {
      name: 'Instagram',
      icon: BsInstagram,
      link: 'https://www.instagram.com/rachmadzii/',
    },

    {
      name: 'Github',
      icon: BsGithub,
      link: 'https://github.com/rachmadzii',
    },
    {
      name: 'Dribbble',
      icon: BsDribbble,
      link: 'https://dribbble.com/rachmadzii',
    },
    {
      name: 'Twitter',
      icon: BsTwitter,
      link: 'https://twitter.com/rachmadzii',
    },
    {
      name: 'Website',
      icon: BsGlobe2,
      link: 'https://rachmadzii.carrd.co/',
    },
  ],
  achievement: [
    {
      id: 1,
      category: 'award',
      title: '3rd Winner Competitive Programming',
      subtitle: 'Slashcomp BEMF-IK UPN Veteran Jakarta on 2021.',
    },
    {
      id: 2,
      category: 'award',
      title: 'Awarded as Best Mardhika Staff',
      subtitle: 'BEM UPN Veteran Jakarta in July 2021.',
    },
    {
      id: 3,
      category: 'webinar',
      title: 'Webinar Speaker at BISA AI Academy',
      subtitle:
        'Headed up two webinars on the topics of Creating ToDo App using PHP and MySQL, also Berkenalan Dengan Dart.',
    },
    {
      id: 4,
      category: 'webinar',
      title: 'Webinar Speaker at BuildWith Angga',
      subtitle:
        'Headed up webinars on the topics of Implement UI Design into a Website with HTML and CSS Bootstrap 5.',
    },
  ],
  experience: [
    {
      id: '01',
      title: 'Frontend Engineer at Dietela Indonesia',
      subtitle:
        'I am responsible for developing Nutritional Mini Assessment App for Dietela users, using React JS and Chakra UI.',
    },
    {
      id: '02',
      title: 'Mobile Developer at Agreeculture Telkom',
      subtitle:
        'I am responsible for developing the Super App for Integrated Farming, which will be used for Agrees users and partners.',
    },
    {
      id: '03',
      title: 'Website Designer at BuildWith Angga',
      subtitle:
        'I am responsible for developing, implementing, and slicing UI Design into Website elements using HTML, CSS Bootstrap 5, and Blade Laravel.',
    },
    {
      id: '04',
      title: 'Class Operation at Harisenin.com',
      subtitle:
        'I am responsible for being a moderator and facilitator in a class Fullstack Developer, organize mentees documentation and reports.',
    },
    {
      id: '05',
      title: 'UI/UX Design at Digitalent Professional Academy',
      subtitle:
        'The awardee of Professional Academy Digitalent Scholarship in the field of UI/UX Design. I also participated in Skilvul UI/UX Challenge Mentor On Demand.',
    },
    {
      id: '06',
      title: 'Frontend Engineer at Generasi GIGIH 2.0',
      subtitle:
        'Participant of Generasi GIGIH 2.0 Independent Study. Motivated on the Frontend Engineer Track that learns React JS, TypeScript, GIT, and more.',
    },
    {
      id: '07',
      title: 'HRIS Developer at Harian Kompas',
      subtitle:
        'I am responsible for developing Penilaian Kinerja Online and Karier Kompas websites using Laravel, Tailwind, and MySQL technologies.',
    },
    {
      id: '08',
      title: 'Frontend Developer at Qollega',
      subtitle:
        'I am responsible for developing Qollega POS and Backoffice websites using Vue.js, Bootstrap, PrimeVue, and several libraries.',
    },
  ],
};
