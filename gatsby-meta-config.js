module.exports = {
  title: `dev132`,
  description: `dev132`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `localhost:8000`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `일상`,
    bio: {
      role: `개발자`,
      description: [' '],
      thumbnail: 'sample.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/1lsang`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/ilsang-park-77b690257/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `ilsangpark.98@gmail.com`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2022.10 ~',
        activity: '블로그 운영',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2022.09 ~',
        activity: 'Google Developer Student Clubs CAU',
        links: {
          github: 'https://github.com/GDSC-CAU',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      {
        date: '2022.09 ~',
        activity: '중앙대학교 GAIL 연구실 학부연구생',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================

    ],
  },
};
