import redux from 'redux';
import 

const BUY_CAKE = 'BUY_CAKE';

//action creator
const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'this is to buy cake',
  };
};

//intialstate

initialState = {
  numOfCake: 10,
};

//reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: this.state.numOfCake - 1,
      };

    default:
      return state;
  }
};

//store
const store = 