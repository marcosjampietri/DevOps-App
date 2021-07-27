import { css } from "styled-components";

const size = {
	small: 400,
	med: 960,
	large: 1140,
};

export const below = Object.keys(size).reduce((acc, label) => {
	acc[label] = (...args) => css`
        @media (max-width: ${size[label] / 16}em) {
            ${css(...args)}
        }
    `;
	return acc;
}, {});
