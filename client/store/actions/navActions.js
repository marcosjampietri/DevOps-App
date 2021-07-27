import * as tps from "../types";

export const navAction = () => async (dispatch) => {
	dispatch({
		type: tps.TOGGLE_NAV,
	});
};
