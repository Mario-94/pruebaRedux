const createStore = require('redux').createStore;
// VARIABLES
const BUY_POKEMON = 'BUY_POKEMON';
const RETURN_POKEMON = 'RETURN_POKEMON';
const BUY_YOSHI = 'BUY_YOSHI';
const RETURN_YOSHI = 'RETURN_YOSHI';
// ACTION O ACCIONES
const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}
const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}
const buy_yoshi_action = (cant) => {
    return {
        type: BUY_YOSHI,
        payload: cant

    }
}
const return_yoshi_action = (cant) => {
    return {
        type: RETURN_YOSHI,
        payload: cant
    }
}
// REDUCERS O REDUCTORES
const defautl_games_state = {
    pokemon: 10,
    yoshi: 10
}

const games_reducer = (state = defautl_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            // con el ...state lo que realizamos es que devolvemos una copia del estado inicial y descontamos las cantidades que mandamos con pokemon

            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }

        }
        case BUY_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi - action.payload
            }
        }
        case RETURN_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi + action.payload
            }
        }
        default: return state;

    }
}
const default_consoles_state = {
    ps5:30,
    xbox:30

}
const consoles_reducer = (state = defautl_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            // con el ...state lo que realizamos es que devolvemos una copia del estado inicial y descontamos las cantidades que mandamos con pokemon

            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }

        }
        case BUY_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi - action.payload
            }
        }
        case RETURN_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi + action.payload
            }
        }
        default: return state;

    }
}
//STORE O TIENDA
const store = createStore(games_reducer);
console.log('estado inicial:', store.getState());
store.subscribe(() => {
    console.log('cambio de estado: ', store.getState())
})
store.dispatch(buy_pokemon_action(3));
store.dispatch(return_pokemon_action(2));
store.dispatch(buy_yoshi_action(3));
store.dispatch(return_yoshi_action(2));