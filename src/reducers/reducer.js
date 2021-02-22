export const initialState = {
    items : [],
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add': console.log(action.appoint)
            return {
                ...state,
                items : [...state.items, action.appoint]
            }
            break;
        case 'Del':
                const newItems = state.items
                const ind = state.items.findIndex(item => item.id === action.appoint.id)
                if(ind >= 0){
                    newItems.splice(ind,1)
                }else{

                }
            return {
                ...state,
                items : [...newItems]
            }
            break;
        default:
            return state;
    }
}
export default reducer;