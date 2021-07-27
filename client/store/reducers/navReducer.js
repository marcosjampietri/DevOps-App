import * as tps from "../types";

const initState = {
	NavOn: false,
};

export const navReducer = (state = initState, action) => {
	switch (action.type) {
		case tps.TOGGLE_NAV:
			return {
				...state,
				NavOn: !state.NavOn,
			};
		default:
			return {
				...state,
			};
	}
};
