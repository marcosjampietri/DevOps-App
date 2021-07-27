import * as tps from "../types";

const initState = {
	isLoading: true,
};

export const loadReducer = (state = initState, action) => {
	switch (action.type) {
		case tps.LOADED:
			return {
				...state,
				isLoading: false,
			};
		default:
			return {
				...state,
			};
	}
};
