import * as tps from "../types";

export const vidAction = () => async (dispatch) => {
	dispatch({
		type: tps.TOGGLE_MOD_VIDEO,
	});
};

export const picAction = () => async (dispatch) => {
	dispatch({
		type: tps.TOGGLE_MOD_PIC,
	});
};

export const modAction = () => async (dispatch) => {
	dispatch({
		type: tps.TOGGLE_MOD_OFF,
	});
};
