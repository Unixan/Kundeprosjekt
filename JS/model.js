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
        addNewCat: "",
        category: [],
      },
      editProfile: {
        aboutCreator: "",
        aboutPicture: "",
        title: "",
        creatorSoMeLink: "",
      },
    },
  },

  //data

  userMenu: ["Filtrering", "Kontakt", "Samarbeidsprosjekter"],
  adminMenu: ["Rediger filtrering", "Admin side", "Logg ut"],
  filter: [
    { cat: "Fargerik", checked: false },
    { cat: "Mørk", checked: false },
    { cat: "Svart/Hvit", checked: false },
    { cat: "Arkitektur", checked: false },
    { cat: "By", checked: false },
    { cat: "Natur", checked: false },
  ],
  creator: {
    role: "Admin",
    password: "1234",
    email: "fakeEmail@mail.com",
    tlf: 12345678,
    aboutPicture: "IMG/jarand.jpg",
    title: "Arkitekt",
    name: "Jarand Midtgaard",
    aboutCreator:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    creatorSoMelinks: [
      { media: "Facebook", logoimg: "", link: "" },
      { media: "SnapChat", logoimg: "", link: "" },
      { media: "Twitter", logoimg: "", link: "" },
      { media: "Instagram", logoimg: "", link: "" },
    ],
  },

  // Todo: Fylle in dummydata i pictures.

  pictures: [
    {
      img: "IMG/PICTURES/Picture1.jpg",
      toggled: false,
      picId: 001,
      title: "City-in-a-box",
      description: 'Surrealistisk bilde av "city in a box"',
      artist: "",
      category: ["Surrealism", "Art", "collage"],
      comments: [{ user: "", comment: "" }],
      SoMelinks: [
        { media: "Facebook", logoimg: "", link: "" },
        { media: "SnapChat", logoimg: "", link: "" },
        { media: "Twitter", logoimg: "", link: "" },
        { media: "Instagram", logoimg: "", link: "" },
      ],
    },
    {
      img: "IMG/PICTURES/Picture2.jpeg",
      toggled: false,
      picId: 002,
      title: "",
      description: "Dette er et bilde",
      artist: "",
      category: ["Natur"],
      comments: [{ user: "", comment: "" }],
      SoMelinks: [
        { media: "Facebook", logoimg: "", link: "" },
        { media: "SnapChat", logoimg: "", link: "" },
        { media: "Twitter", logoimg: "", link: "" },
        { media: "Instagram", logoimg: "", link: "" },
      ],
    },
    {
      img: "IMG/PICTURES/Picture3.jpg",
      toggled: false,
      picId: 003,
      title: "",
      description: "Dette er et bilde",
      artist: "",
      category: ["Natur"],
      comments: [{ user: "", comment: "" }],
      SoMelinks: [
        { media: "Facebook", logoimg: "", link: "" },
        { media: "SnapChat", logoimg: "", link: "" },
        { media: "Twitter", logoimg: "", link: "" },
        { media: "Instagram", logoimg: "", link: "" },
      ],
    },
    {
      img: "IMG/PICTURES/Picture4.jpg",
      toggled: false,
      picId: 004,
      title: "",
      description: "Dette er et bilde",
      artist: "",
      category: ["Natur"],
      comments: [{ user: "", comment: "" }],
      SoMelinks: [
        { media: "Facebook", logoimg: "", link: "" },
        { media: "SnapChat", logoimg: "", link: "" },
        { media: "Twitter", logoimg: "", link: "" },
        { media: "Instagram", logoimg: "", link: "" },
      ],
    },
    {
      img: "IMG/PICTURES/Picture5.jpg",
      toggled: false,
      picId: 005,
      title: "",
      description: "Dette er et bilde",
      artist: "",
      category: ["Natur"],
      comments: [{ user: "", comment: "" }],
      SoMelinks: [
        { media: "Facebook", logoimg: "", link: "" },
        { media: "SnapChat", logoimg: "", link: "" },
        { media: "Twitter", logoimg: "", link: "" },
        { media: "Instagram", logoimg: "", link: "" },
      ],
    },
  ],
  areYouSure: false,
  logo: "IMG/Signatur.png",
  backLogo: "IMG/ICONS/tilbake.png",
};
