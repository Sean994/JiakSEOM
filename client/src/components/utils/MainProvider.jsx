import { createContext, useContext, useReducer } from 'react';

const MainContext = createContext({});

const mainInfo = {
  isAuthenticated: false,
  isCheckOut: false,
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
  CHECKOUT: 'CHECKOUT',
  COMPLETEORDER: 'COMPLETEORDER',
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

const remove0Item = (order) => {
  const orderKeyArr = Object.keys(order);
  const hasItem = orderKeyArr.filter((key) => order[key] !== 0);
  const newObj = {};
  hasItem.forEach((item) => (newObj[item] = order[item]));
  return newObj;
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
      const filteredOrder = remove0Item(updatedOrder);
      return {
        ...state,
        order: { ...filteredOrder },
      };

    case actions.MINUSCART:
      const deductedOrder = minusOrder(state.order, action.payload._id);
      const newOrder = remove0Item(deductedOrder);
      return {
        ...state,
        order: { ...newOrder },
      };

    case actions.DELETEORDER:
      return {
        ...state,
        order: {},
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

    case actions.SETADDRESS:
      return {
        ...state,
        address: action.payload,
      };

    case actions.SETPOSTAL:
      return {
        ...state,
        postal_code: action.payload,
      };
    case actions.CHECKOUT:
      return {
        ...state,
        isCheckOut: true,
      };

    case actions.COMPLETEORDER:
      return {
        ...state,
        isCheckOut: false,
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
