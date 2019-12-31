import * as Actions from "../actions"

const initialState = {
    //all data here


    myData : "ASIM BILAL"
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case Actions.GET_DATA:
            return {
                ...state,
            }
        default:
            return state;
    }
}

export default authReducer