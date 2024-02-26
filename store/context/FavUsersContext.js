import { createContext, useState } from "react";

export const FavContextStore = createContext({
  users: [],
  addNew: () => {},
  setFav: () => {},
});

const FavUsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const addNew = () => {
    if (impData != "") {
      setUsers([{ value: impData, id: id, isFav: false }, ...users]);
      id++;
      setImpData("");
    }
  };
  const setFav = (id) => {
    setUsers(
      users.map((item) => {
        return item.id == id ? { ...item, isFav: !item.isFav } : item;
      })
    );
  };
  const values = { users: users, addNew: addNew, setFav: setFav };
  return (
    <FavContextStore.Provider value={values}>
      {children}
    </FavContextStore.Provider>
  );
};
export default FavUsersProvider;
