import {AuthActionTypes} from "../actions";
import {AuthActionsUnion} from "../actions";
import {User} from "../auth.service";

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

export function authReducer(state = initialState, action: AuthActionsUnion): AuthState {
  switch (action.type) {
    case AuthActionTypes.LogInSuccess:
    case AuthActionTypes.SignUpSuccess:
      return {
        isAuthenticated: true,
        user: action.payload
      };
    case AuthActionTypes.LogOut:
      return {
        isAuthenticated: false,
        user: null
      };

    default: {
      return state;
    }
  }
}
