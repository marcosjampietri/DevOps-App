import * as tps from "../types";

export const loadAction = () => async (dispatch) => {
	dispatch({
		type: tps.LOADED,
	});
};
