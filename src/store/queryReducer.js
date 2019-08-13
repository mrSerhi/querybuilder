const initState = {
  combinator: "and",
  rules: [
    {
      id: "r-9f7224c5-962c-4095-8eb5-f9531bff1fbc",
      field: "firstName",
      value: "",
      operator: "null"
    },
    {
      id: "r-9f7224c5-962c-4095-8eb5-f9531bff1fbc",
      field: "firstName",
      value: "",
      operator: "null"
    }
  ]
};

export default function queryReducer(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
