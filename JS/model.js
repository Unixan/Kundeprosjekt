model = {
  //user
  state: "mainView",

  //input
  inputs: {
    user: {
      search: "",
      pictureComment: "",
      userEmail: "",
      filter: [
        { name: "Fargerik", checked: false },
        { name: "Mørk", checked: false },
        { name: "Svart/Hvit", checked: false },
        { name: "Arkitektur", checked: false },
        { name: "By", checked: false },
        { name: "Natur", checked: false },
      ],
    },
    admin: {},
  },
  //data
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
  email: "fakeEmail@mail.com",
};
