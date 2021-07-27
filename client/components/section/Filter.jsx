import Link from "next/link";
import styled from "styled-components";

import TitleSec from "../micro/servicesTitle";

const FilterServ = () => {
    return (
        <FilterServSt>
            <Margin>
                <TitleSec />
            </Margin>
        </FilterServSt>
    );
};

export default FilterServ;

const FilterServSt = styled.div`
    padding-top: 150px;

    background-image: linear-gradient(
        hsla(0, 0%, 100%, 1),
        hsla(220, 10%, 40%, 1)
    );

    display: flex;
    justify-content: center;
`;

const Margin = styled.div`
    padding: 20px;
    width: 100%;
    max-width: 1200px;

    border: 0px solid black;
    display: flex;
    justify-content: center;
`;
