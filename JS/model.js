model = {
  //app
  state: "mainView",
  loggedInUser: {},
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
        id: "",
        title: "",
        description: "",
        artist: "",
        category: [],
        comments: [],
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
  wordFilter: [],
  filter: [
    { cat: "Fargerik", checked: false },
    { cat: "Mørk", checked: false },
    { cat: "Svart/Hvit", checked: false },
    { cat: "Arkitektur", checked: false },
    { cat: "By", checked: false },
    { cat: "Natur", checked: false },
  ],
  creator: {
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
  pictures: [
    {
      img: "",
      id: "",
      title: "",
      description: "",
      artist: "",
      category: [],
      comments: [{ user: "", comment: "" }],
    },
  ],
  SoMelinks: [
    { media: "Facebook", logoimg: "", link: "" },
    { media: "SnapChat", logoimg: "", link: "" },
    { media: "Twitter", logoimg: "", link: "" },
    { media: "Instagram", logoimg: "", link: "" },
  ],

  adminAccount: {
    id: 01,
    email: "fakeEmail@mail.com",
    name: "Admin",
    password: "1234",
  },

  collabAccounts: [
    { id: 02, email: "fakeEmail2@mail.com", name: "big.dk", password: "abcd" },
  ],
  areYouSure: false,
  logo: "IMG/Logo.png",
};
