import * as tps from "../types";

import Video from "../../components/modal/video";
import Pic from "../../components/modal/pictures";

const initState = {
	ModOn: false,
	ModComponent: null,
};

const components = [<Video />, <Pic />];

export const modReducer = (state = initState, action) => {
	switch (action.type) {
		case tps.TOGGLE_MOD_VIDEO:
			return {
				...state,
				ModOn: true,
				ModComponent: components[0],
			};
		case tps.TOGGLE_MOD_PIC:
			return {
				...state,
				ModOn: true,
				ModComponent: components[1],
			};
		case tps.TOGGLE_MOD_OFF:
			return {
				...state,
				ModOn: false,
			};
		default:
			return {
				...state,
			};
	}
};
