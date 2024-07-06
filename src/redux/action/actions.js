export const setWeb3 = (data) => ({
  type: "SET_WEB3",
  payload: data,
});

export const addContract = (data) => ({
  type: "ADD_CONTRACT",
  payload: data,
});

export const setAccounts = (data) => ({
  type: "SET_ACCOUNTS",
  payload: data,
});

export const setAccount = (data) => ({
  type: "SET_ACCOUNT",
  payload: data,
});

export const deleteAccount = () => ({
  type: "DELETE_ACCOUNT",
});
