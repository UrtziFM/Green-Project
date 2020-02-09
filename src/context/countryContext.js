import React, { useReducer } from "react";

export const CountryContext = React.createContext();

const initialState = {
  countryList: [],
  isLoading: false
};

// Action types
const ADD_COUNTRY = "ADD_COUNTRY";

// Actions creator
export function addCountry(country) {
  return {
    type: "ADD_COUNTRY",
    payload: {
      country
    }
  };
}

// Selectors
export const getCountryById = (state, id) => {
  const { countryList } = state;
  return countryList.find(({ name: ctId }) => `${ctId}` === `${id}`);
}

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_COUNTRY:
      return {
        ...state,
        countryList: [...state.countryList, payload.country]
      };
    default:
      return state;
  }
};

// Provider wrapper
export function CountryContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CountryContext.Provider value={[state, dispatch]}>
      {children}
    </CountryContext.Provider>
  );
}
