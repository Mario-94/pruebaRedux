const { createStore } = require("redux")
//action


// reducers
const defautl_games_state = {
    pokemon: 10
}
const games_reducer = (state = defautl_games_state, action) => {
    switch (action.type) {

        default: return state;

    }
}
// store 
const store = createStore(games_reducer);
console.log('estado inicial:', store.getState())