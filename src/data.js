
export let navData = {
  'primary':{
    'links':[
      {
        'css':'link white nav-title',
        'href':'#Home',
        'text':'Eric Cho',
        'external link':false,
      },
      {
        'css':'link white',
        'href':'#Home',
        'text':'Home',
        'external link':false,
        'icon':{
          'type':'icon',
          'css':'icon material-icons',
          'text':'home',
        },
      },
      {
        'css':'link white',
        'href':'#About',
        'text':'About',
        'external link':false,
        'icon':{
          'type':'icon',
          'css':'icon material-icons',
          'text':'person',
        },
      },
      {
        'css':'link white',
        'href':'#Education',
        'text':'Education',
        'external link':false,
        'icon':{
          'type':'icon',
          'css':'icon material-icons',
          'text':'school',
        },
      },
      {
        'css':'link white',
        'href':'#Experience',
        'text':'Experience',
        'external link':false,
        'icon':{
          'type':'icon',
          'css':'icon material-icons',
          'text':'work',
        },
      },
      {
        'css':'link white',
        'href':'#Projects',
        'text':'Projects',
        'external link':false,
        'icon':{
          'type':'icon',
          'css':'icon material-icons',
          'text':'code',
        },
      },
      {
        'css':'link white',
        'href':'#About',
        'text':'Resume',
        'external link':false,
        'icon':{
          'type':'icon',
          'css':'icon material-icons',
          'text':'article',
        },
      },
    ],
  },
  'secondary':{
    'links':[
      {
        'css':'link',
        'href':'mailto:eric6cho@gmail.com',
        'text':'eric6cho@gmail.com',
        'external link':true,
      },
      {
        'css':'link',
        'href':'https://www.linkedin.com/in/6cho/',
        'external link':true,
        'icon':{
          'type':'image',
          'css':'icon image-icons',
          'src':'icons/linkedin.png',
          'alt':'LinkedIn',
        },
      },
      {
        'css':'link',
        'href':'https://github.com/eric6cho',
        'external link':true,
        'icon':{
          'type':'image',
          'css':'icon image-icons',
          'src':'icons/github.png',
          'alt':'GitHub',
        },
      },
    ],
  },
};

export let pageData = {
  'sections':{
    'home':{
      'id':'Home',
      'title':'Eric Cho',
      'description':[
        'Front End Developer',
        'University of Georgia, 2020',
        'Based in Atlanta, GA',
      ],
    },
    'about':{
      'id':'About',
      'header':{
        'icon':'person',
        'title':'About',
      },
      'subsections':[
        {
          'type':'about-section',
          'text-container':[
            'Hi, my name is Eric Cho and I am an alum of The University of Georgia with a bachelors in Computer Science.',
            'My earliest interaction with any code was in middle school where my friends and I found out how to '+
            'click "inspect element" and mess around with each other\'s website pages. I thought it was just a '+
            'funny gag to pull, but little did I know, that would set me on a path where I would get the chance '+
            'to start coding in 2016 during my freshman year of college and continue to learn, not only in the United States, but abroad in Singapore as well.',
            'After graduating, finding a niche in the world of tech was pretty straightforward. I grew up in a '+
            'family of artists, so becoming a front end developer felt like the most natural way to be involved '+
            'in both tech and visual design.', 
            'As of now, I\'ve had the chance to be a part of amazing teams to create online products and '+
            'solutions used by businesses across the country, and it has helped solidify my focus on creating '+
            'online experiences to be able to reach and imapct more people.',
            'It continues to be my goal today.',  
          ],
          'link-container':{
            'header':'I have some links posted below; feel free to check them out.',
            'links':[
              {
                'css':'link button white contact-link',
                'href':'https://www.linkedin.com/in/6cho/',
                'text':'LinkedIn',
                'external link':true,
                'icon':{
                  'type':'image',
                  'css':'icon image-icons',
                  'src':'icons/linkedin.png',
                  'alt':'LinkedIn',
                },
              },
              {
                'css':'link button white contact-link',
                'href':'https://github.com/eric6cho',
                'text':'GitHub',
                'external link':true,
                'icon':{
                  'type':'image',
                  'css':'icon image-icons',
                  'src':'icons/github.png',
                  'alt':'GitHub',
                },
              },
              {
                'css':'link button white contact-link',
                'href':'resume/Eric Cho Resume.pdf',
                'text':'Resume',
                'external link':true,
                'icon':{
                  'type':'icon',
                  'css':'icon material-icons',
                  'text':'article',
                },
              },
            ],
          },
        },
      ],
    },
    'education':{
      'id':'Education',
      'header':{
        'icon':'school',
        'title':'Education',
      },
      'subsections':[
        {
          'type':'education-section',
          'title':'University of Georgia',
          'subtitle':'Aug 2016 - Jul 2020',
          'rows':[
            {
              'title':'Degree',
              'entry':'Bachelor of Science in Computer Science',
            },
            {
              'title':'Emphasis',
              'entry':'Internet Information Technology',
            },
            {
              'title':'Certificate',
              'entry':'Applied Data Science',
            },
            {
              'title':'GPA',
              'entry':'3.40/4.00',
            },
            {
              'title':'Scholarships',
              'entry':'Hope Scholarship, McMullan Study Abroad Scholarship',
            },
            {
              'title':'Events',
              'entry':
                'National University of Singapore Exchange Program (2019), '+
                '2nd place winner at UGAHacks5 (2020)',
            },
            {
              'title':'Coursework',
              'entry':
                'Computer Networks, Data Mining, Data Science, Data Structures, Discrete Mathematics, '+
                'Linear Algebra, Numerical Simulations, Software Development, Systems Programming, '+
                'Theory of Computation, Web Programming',
            },
            {
              'title':'Organizations',
              'entry':
                'Asian American Student Association, Association for Computing Machinery, Vietnamese '+
                'Student Association, Office of Global Engagement',
            },
          ],
        },
        {
          'type':'education-section',
          'title':'National University of Singapore',
          'subtitle':'Jan 2019 - May 2019',
          'rows':[
            {
              'title':'Program',
              'entry':'School of Computing, Student Exchange Programme',
            },
            {
              'title':'Coursework',
              'entry':'Computer Architecture, Database Systems',
            },
          ],
        }

      ],
    },
    'experience':{
      'id':'Experience',
      'header':{
        'icon':'work',
        'title':'Experience',
      },
      'subsections':[
        {
          'type':'experience-section',   
          'title':'Associate Technical Consultant',
          'location':'Perficient',
          'subtitle':'May 2020 - Dec 2021',
          'responsibilities':[
            'Took on a front end and full stack developer role on a variety of internal and client '+
            'facing projects.',
            'Used JQuery, React, C#, and Sitecore to build components, services, interfaces, and stylesheets. ',
            'Provided support to site content authors and other front end developers.',
            'Regularly participated in client facing demos.',
          ],
          'client-projects':{
            'title':'More detailed descriptions of these project engagements are listed below:',
            'projects':[
              {
                'id':'project-1',
                'css':'active',
                'title':'Healthcare Provider Client',
                'responsibilities':[
                  'Took a role as the lead front end developer for a site that saw a successful launch.',
                  'Implemented the UI and front end logic of the main "Find a Doctor/Location" functionality of '+
                  'the project and various components throughout the site.',
                  'Regularly participated in client facing demos.',
                  'Provided support to other front end developers.',
                ],
              },
              {
                'id':'project-2',
                'title':'Home Improvement Client ',
                'responsibilities':[
                  'Performed major front end bugs fixes that were critical to the project\'s completion.',
                  'Worked on various components throughout the site, including the main "Find a Dealer" '+
                  'functionality of the site.',
                  'Regularly participated in client facing demos.',            
                ],
              },
              {
                'id':'project-3',
                'title':'Healthcare Provider Client',
                'responsibilities':[
                  'Built and fixed the UI and front end logic of components found throughout the site.',
                  'Built content pages for patient devices and articles, and tested all components on '+
                  'those pages.',
                  'Provided support to site content authors and other front end developers.',
                ],
              },
              {
                'id':'project-4',
                'title':'Internal Project',
                'responsibilities':[
                  'Built full stack features for an internal site used to guide the training '+
                  'process of new interns.',
                  'Built the front and back end of the projects page, which allowed users to create and '+
                  'participate in company/office initatives.',
                  'Built UI for course content pages, projects page, and admin pages. Provided maintenence '+
                  'to the UI for all parts of the site.',
                ],
              },
            ],
          },
        },
        {
          'type':'experience-section',   
          'title':'Calculus Tutor',
          'location':'University of Georgia',
          'subtitle':'Sep 2017 - May 2018',
          'responsibilities':[
            'Taught key mathematical concepts and their practical uses during daily walk-in '+
            'tutoring sessions of up to 20 students. ',
            'Coordinated with other graduate tutors to help students prepare for exams in '+
            'Precalculus and Calculus I - III.',
            'Students experienced noticeable improvements and came back regularly to study.',
          ],
        },
      ],
    },
    'projects':{
      'id':'Projects',
      'header':{
        'icon':'code',
        'title':'Projects',
      },
      'subsections':[
        {
          'type':'project-section',
          'images':[
            'images/Image Mesh/0.png',
            'images/Image Mesh/1.png',
            'images/Image Mesh/2.png',
            'images/Image Mesh/3.png',
            'images/Image Mesh/4.png',
            'images/Image Mesh/5.png',
            'images/Image Mesh/6.png',
            'images/Image Mesh/7.png',
          ],
          'project-link':'https://image-mesh.herokuapp.com/',
          'text-container':{
            'title':'Image Mesh',
            'subtitle':'React, Node.js, JavaScript, SCSS, Heroku',
            'text':[
              'A full stack web application made to create pixel art and edited photos. Allows users to apply '+
              'filters and generate new photos from images sourced online. Creates a palette '+
              'based on the colors in the edited photo, and allows users to create unique pixel '+
              'maps and gradients from the palette.',
              'Click the links below to view the GitHub repository of the client project and the deployed application.',
            ],
          },
          'links':[
            {
              'css':'link white',
              'href':'https://github.com/eric6cho/image-mesh-react',
              'external link':true,
              'icon':{
                'type':'image',
                'css':'icon image-icons',
                'src':'icons/github.png',
                'alt':'GitHub',
              },
            },
            {
              'css':'link white',
              'href':'https://image-mesh.herokuapp.com/',
              'external link':true,
              'icon':{
                'type':'icon',
                'css':'icon material-icons',
                'text':'launch',
              },
            },
          ],   
        },
        {
          'type':'project-section',
          'images':[
            'images/Spotify Pixelfy/0.png',
          ],
          'project-link':'https://github.com/eric6cho/spotify-pixelfy',
          'text-container':{
            'title':'Pixelfy',
            'subtitle':'React, Node.js, JavaScript, SCSS, Heroku',
            'text':[
              'An ongoing full stack project made to generate a pixel art collection of the top artists of a Spotify listener. '+
              'Uses the Spotify API and my own Image Mesh API to retrieve artist images and create pixel art versions. ',
              'Click the link below to view the GitHub repository of the project.',
            ],
          },
          'links':[
            {
              'css':'link white',
              'href':'https://github.com/eric6cho/spotify-pixelfy',
              'external link':true,
              'icon':{
                'type':'image',
                'css':'icon image-icons',
                'src':'icons/github.png',
                'alt':'GitHub',
              },
            },
          ],   
        },
        {
          'type':'project-section',
          'images':[
            'images/Remodel Storefront/0.png',
            'images/Remodel Storefront/1.png',
            'images/Remodel Storefront/2.png',
            'images/Remodel Storefront/3.png',
            'images/Remodel Storefront/4.png',
            'images/Remodel Storefront/5.png',
            'images/Remodel Storefront/6.png',
            'images/Remodel Storefront/7.png',
          ],
          'project-link':'https://remodel-storefront.herokuapp.com/',
          'text-container':{
            'title':'Remodel Storefront',
            'subtitle':'React, Node.js, JavaScript, SCSS, Heroku',
            'text':[
              'A project made to replicate the components and functionalities seen in a '+
              'ecommerce website with many design languages for single template components. '+
              'Inspired by working with clients with requirements to implement many '+
              'different components with similar structures. Built over 30 unique design '+
              'combinations and visual themes that can be applied to each component template.',
              'Click the links below to view the GitHub and the deployed application.',
            ],
          },
          'links':[
            {
              'css':'link white',
              'href':'https://github.com/eric6cho/Remodel-Storefront',
              'external link':true,
              'icon':{
                'type':'image',
                'css':'icon image-icons',
                'src':'icons/github.png',
                'alt':'GitHub',
              },
            },
            {
              'css':'link white',
              'href':'https://remodel-storefront.herokuapp.com/',
              'external link':true,
              'icon':{
                'type':'icon',
                'css':'icon material-icons',
                'text':'launch',
              },
            },
          ],   
        },
        {
          'type':'project-section',
          'images':[
            'images/Crypto Price Charts/0.png',
            'images/Crypto Price Charts/1.png',
            'images/Crypto Price Charts/2.png',
            'images/Crypto Price Charts/3.png',
            'images/Crypto Price Charts/4.png',
          ],
          'project-link':'https://crypto-price-chart.herokuapp.com/',
          'text-container':{
            'title':'Cryptocurrency Price Charts',
            'subtitle':'React, Node.js, JavaScript, SCSS, Heroku',
            'text':[
              'A personal use, full stack data visualization project that gathers data of '+
              'cryptocurrency assets and the market as a whole. Displays live and historical '+
              'prices and compiled technical indicators of over 200 cryptocurrency assets, '+
              'while using the TradingView API to create interactive charts for this data. ',
              'Click the links below to view the GitHub and the deployed application.',
            ],
          },
          'links':[
            {
              'css':'link white',
              'href':'https://github.com/eric6cho/Crypto-Price-Chart',
              'external link':true,
              'icon':{
                'type':'image',
                'css':'icon image-icons',
                'src':'icons/github.png',
                'alt':'GitHub',
              },
            },
            {
              'css':'link white',
              'href':'https://crypto-price-chart.herokuapp.com/',
              'external link':true,
              'icon':{
                'type':'icon',
                'css':'icon material-icons',
                'text':'launch',
              },
            },
          ],
        },
        {
          'type':'project-section',
          'images':[
            'images/WAND/0.jpg',
            'images/WAND/1.jpg',
          ],
          'project-link':'https://devpost.com/software/wand-hbf0ke',
          'text-container':{
            'title':'WAND: Walking Aid Notification Device',
            'subtitle':'Python (OpenCV, gTTS)',
            'text':[
              'A project made to assist people with blindness by using sensors and image '+
              'analysis. Compiled numerical data from an ultrasound sensor, analyzed images '+
              'with object detection, and used text to speech technology to output '+
              'information in an accessible way. Completed a working handheld prototype in '+
              'a team of four at the 2020 UGA Hackathon and won second place.',
              'Click the link below to read more about the project.',
            ],
          },
          'links':[
            {
              'css':'link white',
              'href':'https://devpost.com/software/wand-hbf0ke',
              'external link':true,
              'icon':{
                'type':'icon',
                'css':'icon material-icons',
                'text':'launch',
              },
            },
          ],
        },
      ],
    },
  },
};