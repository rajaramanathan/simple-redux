//reducer: NewState = Current State + Action;
export const calcReducer = (state = 0, action) => {
    switch(action.type){
        case 'ADD':
            return state + action.payload;
        case 'SUB':
            return state - action.payload;
        case 'MUL':
            return state * action.payload;
        case 'DIV':
            return state / action.payload;
        default:
           return state;
    };
};