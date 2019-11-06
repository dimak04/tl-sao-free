let user = JSON.parse(localStorage.getItem("user"));
const emptyUser = { user: { language: "ru", permissions: [] } };
const initialState = user ? { loggedIn: true, user } : emptyUser;

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
