//Reducer => a function that takes a old state  and create action 
const contextReducer = (state, action) => {
    let transactions; 

    switch (action.type) {
        case 'DELETE_TRANSACTION': 
            transactions = state.filter((t) => t.id !== action.payload);
            localStorage.setItem('transaction', JSON.stringify(transactions));
            return transactions;
        case 'ADD_TRANSACTION': 
            transactions = [action.payload, ...state];
            localStorage.setItem('transaction', JSON.stringify(transactions));
            return transactions;
        default: 
            return state;
    }
}

export default contextReducer;
