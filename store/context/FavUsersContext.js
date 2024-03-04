import { createContext, useState } from "react";

export const FavContextStore = createContext({
  users: [],
  saveUser: () => {},
  setFav: () => {},
});
let id = 1;
const FavUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const saveUser = (impData) => {
    setUsers([{ value: impData, id: id, isFav: false }, ...users]);
    id++;
  };
  const setFav = (id) => {
    setUsers(
      users.map((item) => {
        return item.id == id ? { ...item, isFav: !item.isFav } : item;
      })
    );
  };
  const values = { users: users, saveUser: saveUser, setFav: setFav };
  return (
    <FavContextStore.Provider value={values}>
      {children}
    </FavContextStore.Provider>
  );
};
export default FavUsersProvider;
