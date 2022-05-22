//import redux from 'redux';

const redux = require('redux');

const createStore = redux.createStore();

const BUY_CAKE = 'BUY_CAKE';

//action is simpel js object
// {
//   type: BUY_CAKE,
//   info: 'this is special cake'
// }

//action creator
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'this is special cake',
  };
};

//reducer (previousState, action) => newState

const initialState = {
  numofcake: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      //action type matches
      return {
        ...state,
        numofcake: this.state.numofcake - 1,
      };

    default:
      return state;
  }
};

const store = createStore(reducer);
console.log('Intial state', store.getState());
const unsubscribe = store.subscribe(() =>
  console.log('Updated state', store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
