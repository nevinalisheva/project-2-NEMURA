import React, {
  useReducer,
  //   createContext,
  useEffect,
  createContext,
} from "react";
import Reducer from "./Reducer";
// initial state
const inititalState = {
  favourites: localStorage.getItem("favourites")
    ? JSON.parse(localStorage.getItem("favourites"))
    : [],
};

export const GlobalContext = createContext(inititalState);

//provider
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(Reducer, inititalState);
  const ACTIONS = {
    ADD_FAVOURITE: "add to favourites",
    REMOVE_FAVOURITE: "remove from favourites",
  };

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(state.favourites));
  }, [state]);

  const addTitleToFavourits = (title) => {
    dispatch({ type: "ADD_FAVOURITE", payload: title });
  };
  const removeTitleFromFavourits = (id) => {
    dispatch({ type: "REMOVE_FAVOURITE", payload: id });
  };
  return (
    <GlobalContext.Provider
      value={{
        favourites: state.favourites,
        addTitleToFavourits,
        removeTitleFromFavourits,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
