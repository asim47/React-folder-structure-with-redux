import * as Actions from "../actions"

const initialState = {
    //all data here


    myData : "USER REDUCER"
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {

        case Actions.GET_DATA:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default userReducer