import {GET_PHONES , ADD_PHONE , EDIT_PHONE , DELETE_PHONE} from "../actions/phoneActions";

export default (state, action) => {
    switch (action.type) {
        case GET_PHONES:
            return {
                ...state,
                phones: action.payload,
            }

        case ADD_PHONE:
            return {
                ...state,
                phones: [...state.phones, action.payload]

            };
        case EDIT_PHONE:
            return {
                ...state,
                phones: [...state.phones.map(phone =>
                    phone.id !== action.payload.id ? phone : action.payload
                )]
            };
        case DELETE_PHONE:
            return {
                ...state,
                phones: [...state.phones.filter(phone => phone.id !== action.payload)]
            };
        default:
            return state;
    }
};
