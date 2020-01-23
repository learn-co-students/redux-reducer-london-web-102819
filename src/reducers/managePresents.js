export function managePresents(state, action){
}

const action = {
    type: "ADD_FRIEND",
    friend: {
        name: "Chrome Boi",
        hometown: "NYC",
        id: 1
    }
}

managePresents = (state, action) => {
    switch(action.type) {
        case "INCREASE":
            return {numberOfPresents: state.numberOfPresents +1}
        default:
            return state;
    }
}

