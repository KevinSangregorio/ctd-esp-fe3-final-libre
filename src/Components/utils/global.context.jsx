import { createContext, useMemo, useReducer } from "react";
import { getAllDentists } from "../../utils/services";

export const initialState = { theme: "light", dentists: [] }

function reducer(state, action) {
  if (action.type === "getDentists") { 
    return {
      ...state, dentists: action.data
    }
  }
  if (action.type === "changeTheme") {
    return {
      ...state, theme: state.theme === "light" ? "dark" : "light"
    }
  }
  throw Error('Unknown action.');
}

export const ContextGlobal = createContext(undefined);
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useMemo(() => getAllDentists().then((dentists) => dispatch({ type: "getDentists", data: dentists })), [])

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};
