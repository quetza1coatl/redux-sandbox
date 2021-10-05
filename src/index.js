import { createStore } from 'redux';

// init with 0 if state is undefined
const reducer = (state = 0, action) => {
    switch (action.type){
        case 'INC':
            return state + 1;
        default:
            return state;
    }
};

const store = createStore(reducer);
store.subscribe( () => {
   console.log(store.getState());
});
// console.log(store.getState());
store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});
// console.log(store.getState());
