import {CHANGE_HANDBOOK_PAGE} from "../actions/types";

export default function pdfReducer(state = null, action) {
    switch (action.type) {
        case CHANGE_HANDBOOK_PAGE:
            return Object.assign({}, state, {
                handbookPage: action.page
            });
            break;
        default:
            return state;
    }
}