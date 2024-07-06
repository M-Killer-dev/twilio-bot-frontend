import _ from "lodash";
const initialState = {
  contracts: {},
  accounts: [],
  account: null,
  web3: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_WEB3":
      return {
        ...state,
        web3: action.payload,
      };
    case "ADD_CONTRACT":
      return {
        ...state,
        contracts: {
          ...state.contracts,
          [action.payload.name]: action.payload.contract,
        },
      };
    case "SET_ACCOUNTS":
      return { ...state, accounts: action.payload };
    case "SET_ACCOUNT":
      return { ...state, account: action.payload };
    case "DELETE_ACCOUNT":
      return { ...state, account: null };
    default:
      return state;
  }
}

export default rootReducer;
