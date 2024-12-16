import React from "react";

interface InitialState {
  switch: boolean;
}

export interface Reducer {
  initialState: InitialState;
  dispatch: React.Dispatch<ACTION_TYPE>;
}

export const state: InitialState = {
  switch: false,
};

type ACTION_TYPE = { type: "SWITCH" };

export const reducer = (state: InitialState, action: ACTION_TYPE) => {
  switch (action.type) {
    case "SWITCH":
      return { ...state, switch: !state.switch };

    default:
      return state;
  }
};
