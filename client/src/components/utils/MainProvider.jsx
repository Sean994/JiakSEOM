import { createContext, useContext, useReducer } from 'react';

const MainContext = createContext({});

const mainInfo = {
  isAuthenticated: false,
  user: {
    _id: '',
    username: '',
    first_name: '',
    last_name: '',
    address: '',
    email: '',
    contact: '',
    postal_code: '',
    birthday: '',
  },
  restaurant: '',
  orders: [],
  postal_code: '',
  address: '',
};

const actions = {
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT',
  SETPOSTAL: 'SETPOSTAL',
  SETADDRESS: 'SETADDRESS',
  SAVEORDER: 'SAVEORDER',
  DELETEORDER: 'DELETEORDER',
};

const mainReducer = (state, action) => {
  switch (action.type) {
    case actions.SIGNIN:
      return {
        ...state,
        isAuthenticated: true,
        user: { ...action.payload },
      };

    case actions.SIGNOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };

    case actions.CHANGEPOSTAL:
      return {
        ...state,
        postal_code: action.payload,
      };

    case actions.SAVEORDER:
      break;

    case actions.DELETEORDER:
      return {
        ...state,
        orders: [],
      };
    default:
      return state;
  }
};

const MainProvider = ({ children }) => {
  const [mainState, mainDispatch] = useReducer(mainReducer, mainInfo);
  const value = { mainState, mainDispatch };

  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

const useMain = () => {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('No context');
  }
  return context;
};

export { MainProvider, useMain, actions };
