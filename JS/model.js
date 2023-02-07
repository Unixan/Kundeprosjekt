const model = {
  //app
  // mainView, adminView, addImageView, contactView, adminContactView, collabView, loginView
  state: "mainView",

  //input

  inputs: {
    login: {
      password: "",
      username: "",
    },

    user: {
      search: "",
      pictureComment: { comment: "", userEmail: "" },
      userFilter: [],
    },
    admin: {
      addPic: {
        img: "",
        title: "",
        description: "",
        artist: "",
        category: [],
      },
      editProfile: {
        aboutCreator: "",
        aboutPicture: "",
        title: "",
        creatorSoMeLink:[
          {link: ''},
          {link: ''},
          {link: ''},
          {link: ''},
        ]
      },
    },
  },

  //data

  userMenu: ["Filtrering", "Kontakt", "Samarbeidsprosjekter"],
  adminMenu: ["Rediger filtrering", "Admin side", "Logg ut"],
  filter: [
    { cat: "Architecture", checked: false },
    { cat: "Building", checked: false },
    { cat: "Completed", checked: false },
    { cat: "Project1", checked: false },
    { cat: "Collaboration", checked: false },
    { cat: "Surrealism", checked: false },
    { cat: "Art", checked: false },
    { cat: "Exhibition", checked: false },
    { cat: "Collage", checked: false },
    { cat: "Digital", checked: false },
    { cat: "Sculpture", checked: false },
    { cat: "3Dprint", checked: false },
    { cat: "3Dmodeling", checked: false },
    { cat: "Utopic", checked: false },
  ],
  creator: {
    role: "Admin",
    password: "1234",
    email: "fakeEmail@mail.com",
    tlf: 12345678,
    aboutPicture: {
       picture: "IMG/Jarand_img.jpg",
       editMode: false,
    },
    title: "Arkitekt",
    name: "Jarand Midtgaard",
    aboutCreator: {
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      editMode: false,
    },
      creatorSoMelinks: {links: 
       [
        { media: "Facebook", logoimg: "IMG/ICONS/facebook.png", link: "https://nb-no.facebook.com/" },
        { media: "SnapChat", logoimg: "IMG/ICONS/snapchat.png", link: "https://www.snapchat.com/" },
        { media: "Twitter", logoimg: "IMG/ICONS/twitter.png", link: "https://twitter.com/home?" },
        { media: "Instagram", logoimg: "IMG/ICONS/instagram.png", link: "https://www.instagram.com/" },
      ],
      editMode: false,
    }
    },

    
    SoMelinks: [
      { media: "Facebook", logoimg: "IMG/ICONS/facebook.png", link: "https://nb-no.facebook.com/" },
      { media: "SnapChat", logoimg: "IMG/ICONS/snapchat.png", link: "https://www.snapchat.com/" },
      { media: "Twitter", logoimg: "IMG/ICONS/twitter.png", link: "https://twitter.com/home?" },
      { media: "Instagram", logoimg: "IMG/ICONS/instagram.png", link: "https://www.instagram.com/" },
    ],



    pictures: [
    {
      img: "IMG/PICTURES/Pro1_1.jpg",
      toggled: false,
      projectId: { name: 'Home Atelier', number: 1},
      title: "Home Atelier 1",
      description: "Arkitekturbygning ferdiglaget.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Building", "Completed", "Collaboration",],
      comments: [{ user: "Knut Arild", comment: "Dette var lekkert! 10/10." }],
    },
    {
      img: "IMG/PICTURES/Pro1_2.jpg",
      toggled: false,
      projectId: { name: 'Home Atelier', number: 1},
      title: "Home Atelier 2",
      description: "Arkitekturbygning ferdiglaget.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Building", "Completed", "Collaboration",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro1_3.jpg",
      toggled: false,
      projectId: { name: 'Home Atelier', number: 1},
      title: "Home Atelier 3",
      description: "Arkitekturbygning ferdiglaget.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Building", "Completed", "Collaboration",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro2_1.jpg",
      toggled: false,
      projectId: { name: 'Exhibition', number: 2},
      title: "Exhibition 1",
      description: "Framvist kunst.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "Art", "Exhibition",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro2_2.jpg",
      toggled: false,
      projectId: { name: 'Exhibition', number: 2},
      title: "Exhibition 2",
      description: "Framvist kunst.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "Art", "Exhibition",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro2_3.jpg",
      toggled: false,
      projectId: { name: 'Exhibition', number: 2},
      title: "Exhibition 3",
      description: "Framvist kunst.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "Art", "Exhibition",],
      comments: [{ user: "", comment: "" }],
    },

    {
      img: "IMG/PICTURES/Pro3_1.jpg",
      toggled: false,
      projectId: { name: 'Digital Collages', number: 3},
      title: "Digital Collages 1",
      description: "Surrealistisk bildet laget digitalt.",
      artist: "Jarand Midtgaard",
      category: ["Surrealism", "Art", "Collage", "Digital",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro3_2.jpg",
      toggled: false,
      projectId: { name: 'Digital Collages', number: 3},
      title: "Digital Collages 2",
      description: "Surrealistisk bildet laget digitalt.",
      artist: "Jarand Midtgaard",
      category: ["Surrealism", "Art", "Collage", "Digital",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro3_3.jpg",
      toggled: false,
      projectId: { name: 'Digital Collages', number: 3},
      title: "Digital Collages 3",
      description: "Surrealistisk bildet laget digitalt.",
      artist: "Jarand Midtgaard",
      category: ["Surrealism", "Art", "Collage", "Digital",],
      comments: [{ user: "", comment: "" }],
    },

    {
      img: "IMG/PICTURES/Pro4_1.jpg",
      toggled: false,
      projectId: { name: 'Digital Collages', number: 4},
      title: "Sculptures 1",
      description: "Printed architectural sculpture.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "Sculpture", "3Dprint",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro4_2.jpg",
      toggled: false,
      projectId: { name: 'Digital Collages', number: 4},
      title: "Sculptures 2",
      description: "Printed architectural sculpture.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "Sculpture", "3Dprint",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro4_3.jpg",
      toggled: false,
      projectId: { name: 'Digital Collages', number: 4},
      title: "Sculptures 3",
      description: "Printed architectural sculpture.",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "Sculpture", "3Dprint",],
      comments: [{ user: "", comment: "" }],
    },

    {
      img: "IMG/PICTURES/Pro5_1.JPG",
      toggled: false,
      projectId: { name: 'Architectural Projects', number: 5},
      title: "Architectural Projects projects 1",
      description: "",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "3Dmodeling", "Utopic",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro5_2.jpg",
      toggled: false,
      projectId: { name: 'Architectural Projects', number: 5},
      title: "Architectural Projects projects 2",
      description: "",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "3Dmodeling", "Utopic",],
      comments: [{ user: "", comment: "" }],
    },
    {
      img: "IMG/PICTURES/Pro5_3.JPG",
      toggled: false,
      projectId: { name: 'Architectural Projects', number: 5},
      title: "Architectural Projects projects 3",
      description: "",
      artist: "Jarand Midtgaard",
      category: ["Architecture", "Surrealism", "3Dmodeling", "Utopic",],
      comments: [{ user: "", comment: "" }],
    },
  ],
  areYouSure: false,
  areYouSureImg: false,
  logo: "IMG/Signatur.png",
  backLogo: "IMG/ICONS/tilbake.png",
};
