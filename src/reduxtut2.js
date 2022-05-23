// const redux = require("redux");
import { createStore } from 'redux';

//createStore();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

//action creator
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'this is to buy cake',
  };
};

const buyIcecream = () => {
  return {
    type: BUY_ICECREAM,
    info: 'this is to buy icecream',
  };
};

//intialstate

const initialState = {
  numOfCake: 10,
  numOfIcream: 20,
};

//reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };

    case BUY_ICECREAM:
      return {
        ...state,
        numOfIcream: state.numOfCake - 1,
      };
    default:
      return state;
  }
};

//store
const store = createStore(reducer);

//getState
console.log('initail state', store.getState());

//subscribe
const unsubscribe = store.subscribe(() => {
  console.log('updated store', store.getState());
});

//dispatch
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIcecream());
store.dispatch(buyIcecream());

//unsubscribe
unsubscribe();
