let projectData = [
  {
    id: 'defendyPengy',
    title: 'Defendy Pengy',
    paragraphs: [
      "Defendy Pengy is the first person tower defense game made by Hackerspace NTNU to compete in Norwegian Game Awards 2018 in february. It is developed by a team of 12 students on NTNU, where we have 6 programmers, 4 graphical designers, and 2 sound engineers/composers.",
      "My role in the project was developer, and it is where I've learned C# and Unity. I was however appointed the task as project leader, and has since then mostly focused on the 'big-picture' in the game. This has let me learn a lot about project structure and how to work together on a larger project as a team."
    ],
    img: 'defendy_pengy.png',
    imgAlt: 'defendy pengy banner',
    link: 'https://github.com/hackerspace-ntnu/Defendy-Pengy',
    linkText: 'Github'
  },
  {
    id: 'pimp',
    title: 'PIMP (Personal Information Manager Pro)',
    paragraphs: [
      "PIMP was the project where I first learned React. It was a project for the subject IT2810 Web development on NTNU. The result of this project was a personal information manager, where you could store and manage notes, events, and tasks. It was made both in a web version with React, and a mobile version with React Native.",
      "Most of my work in this project was porting the (nearly) finished project over to React Native. This ended up being almost a complete rewrite, as the logic in the web version liberally used HTML localstorage for adding and deleting objects. React Native does not support HTML localstorage (naturally), and I was forced to rewrite most of the logic.",
      "The project was made in a group with Maria Soleim, Tollef Jørgensen, and Håvard Løkensgaard."
    ],
    img: 'pimp_mobile.png',
    imgAlt: 'screenshot of pimp mobile',
    link: 'https://github.com/eskarpnes/it2810-webutvikling-h17-prosjekt-3-group-42',
    linkText: 'Github'
  }
];

export default projectData;