// Action Creators
import * as types from './types';

export const changeHandbookPage = page => {
    return {
        type: types.CHANGE_HANDBOOK_PAGE,
        page: page,
    };
}


