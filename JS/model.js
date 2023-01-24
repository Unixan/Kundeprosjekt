model = {
  //app

  state: "mainView",
  loggedInUser: null,

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
  creator: [
    {
      id: 01,
      role: "Admin",
      password: "1234",
      email: "fakeEmail@mail.com",
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
    {
      id: 02,
      role: "collaborator",
      password: "abcd",
      email: "fakeEmail2@mail.com",
      aboutPicture: "IMG/somePicture.jpg",
      title: "SomeTitle",
      name: "SomeName",
      aboutCreator:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      creatorSoMelinks: [
        { media: "Facebook", logoimg: "", link: "" },
        { media: "SnapChat", logoimg: "", link: "" },
        { media: "Twitter", logoimg: "", link: "" },
        { media: "Instagram", logoimg: "", link: "" },
      ],
    },
  ],

  // Todo: Fylle in dummydata i pictures.

  pictures: [
    {
      img: "IMG/PICTURES/Picture 1.jpg",
      picId: 001,
      title: "",
      description: "",
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
      img: "IMG/PICTURES/Picture 2.jpg",
      picId: 002,
      title: "",
      description: "",
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
      img: "IMG/PICTURES/Picture 3.jpg",
      picId: 003,
      title: "",
      description: "",
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
      img: "IMG/PICTURES/Picture 4.jpg",
      picId: 004,
      title: "",
      description: "",
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
      img: "IMG/PICTURES/Picture 5.jpg",
      picId: 005,
      title: "",
      description: "",
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
  logo: "IMG/Logo.png",
};
