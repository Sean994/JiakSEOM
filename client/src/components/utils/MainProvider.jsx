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
  cart: [],
  order: {},
  total_price: 0,
  restaurant: '',
  postal_code: '',
  address: '',
};

const actions = {
  SIGNIN: 'SIGNIN',
  SIGNOUT: 'SIGNOUT',
  SETPOSTAL: 'SETPOSTAL',
  SETADDRESS: 'SETADDRESS',
  ADDTOCART: 'ADDTOCART',
  MINUSCART: 'MINUSCART',
  DELETEORDER: 'DELETEORDER',
  SETRESTAURANT: 'SETRESTAURANT',
  PLUSPRICE: 'PLUSPRICE',
  MINUSPRICE: 'MINUSPRICE',
};

const addtoOrder = (order, itemId) => {
  const obj = { ...order };
  if (obj[itemId]) {
    obj[itemId] += 1;
  } else {
    obj[itemId] = 1;
  }
  return obj;
};

const minusOrder = (order, itemId) => {
  const obj = { ...order };
  if (obj[itemId] > 0) {
    obj[itemId] -= 1;
  } else {
    // 1
  }
  return obj;
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

    case actions.ADDTOCART:
      const updatedOrder = addtoOrder(state.order, action.payload._id);
      return {
        ...state,
        order: { ...updatedOrder },
      };

    case actions.MINUSCART:
      const deductedOrder = minusOrder(state.order, action.payload._id);
      return {
        ...state,
        order: { ...deductedOrder },
      };

    case actions.DELETEORDER:
      return {
        ...state,
        cart: [],
      };
    case actions.SETRESTAURANT:
      return {
        ...state,
        restaurant: action.payload,
      };

    case actions.PLUSPRICE:
      return {
        ...state,
        total_price: state.total_price + action.payload,
      };

    case actions.MINUSPRICE:
      return {
        ...state,
        total_price: state.total_price - action.payload,
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
