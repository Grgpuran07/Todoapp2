const initialState = {
  totalUsers: [
    {
      name: "Puran Gurung",
      address: "Parbat",
      contactno: "9824119282",
      id: 1,
    },
    {
      name: "Pravij Upreti",
      address: "Palpa",
      contactno: "9864456742",
      id: 3,
    },
    {
      name: "Saroj Shah",
      address: "Biratnagar",
      contactno: "98101747444",
      id: 4,
    },
    {
      name: "Sandesh Niroula",
      address: "Jhapa",
      contactno: "9864421178",
      id: 5,
    },
    {
      name: "Amar Shah",
      address: "Biratnagar",
      contactno: "9877636823",
      id: 6,
    },
  ],
  toEdit: {
    name: "",
    address: "",
    contactno: "",
  },
  edit: false,
  editfromclass: false,
  toEditfromclass: {
    name: "",
    address: "",
    contactno: "",
  },
};

const addeditdelete = (state = initialState, action) => {
  switch (action.type) {
    case "ADDPERSONALINFO":
      return {
        ...state,
        totalUsers: [
          ...state.totalUsers,
          { ...action.payload, id: new Date().getTime() },
        ],
      };

    case "DELETEUSER":
      return {
        ...state,
        totalUsers: [...state.totalUsers].filter(
          (item) => item.id.toString() !== action.payload.toString()
        ),
      };

    case "SETEDITUSER":
      return {
        ...state,
        toEdit: {
          ...action.payload,
        },
        edit: true,
      };

    case "SETEDITUSERFROMCLASS":
      const toedititem = state.totalUsers.filter(
        (item) => item.id.toString() === action.payload.toString()
      );
      return {
        ...state,
        toEditfromclass: toedititem[0],
        editfromclass: true,
      };

    case "UPDATEUSER":
      console.log(action.payload);
      const { name, address, contactno, id } = action.payload;
      return {
        ...state,
        totalUsers: [...state.totalUsers].map((item) => {
          if (item.id.toString() === id.toString()) {
            return {
              ...item,
              name,
              address,
              contactno,
            };
          } else {
            return item;
          }
        }),
      };

    case "EDITTOGGLE":
      return {
        ...state,
        toEdit: {
          name: "",
          contactno: "",
          address: "",
        },
        edit: false,
      };

    case "EDITTOGGLEFROMCLASS":
      return {
        ...state,
        editfromclass: false,
        toEditfromclass: {
          name: "",
          contactno: "",
          address: "",
        },
      };

    case "FILTERITEMS":
      const { criteria, search } = action.payload;
      console.log(action.payload);
      return {
        ...state,
        totalUsers: [...state.totalUsers].filter((item) => {
          return item[criteria].toLowerCase().includes(search.toLowerCase());
        }),
      };

    default:
      return state;
  }
};

export default addeditdelete;
