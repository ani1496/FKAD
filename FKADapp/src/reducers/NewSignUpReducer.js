import {
  NAME_CHANGED,
  GMAIL_CHANGED,
  PHONE_NUMBER_CHANGED,
  HOME_ADDRESS_CHANGED,
  NEW_PASSWORD_CHANGED,
  CREATE_NEW_USER
} from '../actions/types';

const INITIAL_STATE = {
  name: {
    firstName: '',
    lastName: '',
  },
  GMail: '',
  phoneNumber: '',
  homeAddress: {
    street: '',
    city: '',
    state: '',
    zip: ''
  },
  password: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NAME_CHANGED:
      return {
        ...state,
        name: {
          ...state.name,
          [action.payload.type]: action.payload.text
        }
      };
    case GMAIL_CHANGED:
      return {
        ...state,
        GMAIL: {
          ...state.GMail,
          GMail: action.payload
        }
      };
    case PHONE_NUMBER_CHANGED:
      return {
        ...state,
        phoneNumber: {
          ...state.phoneNumber,
          phoneNumber: action.payload
        }
      };
    case HOME_ADDRESS_CHANGED:
      return {
        ...state,
        homeAddress: {
          ...state.homeAddress,
          [action.payload.type]: action.payload.text
        }
      };
    case NEW_PASSWORD_CHANGED:
      return {
        ...state,
        password: {
          ...state.password,
          password: action.payload
        }
      };
    case CREATE_NEW_USER:
      return INITIAL_STATE;
    default:
      return state;

  }
};
