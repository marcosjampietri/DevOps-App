import styled from "styled-components";

import Button1 from "../micro/Button1";
import { Reveal, RevealR, PageL } from "../reveal";

const SectionTitle = () => {
    return (
        <Block>
            <PageL>
                <Text>
                    <Pre>SERVICES WE ARE OFFERING</Pre>
                    <Title>
                        WE DESIGN DIGITAL PRODUCTS THAT HELP GROW BUSINESSES.
                    </Title>
                    <Definition>
                        We are committed to providing our customers with
                        exceptional service while offering our employees the
                        best training.
                    </Definition>
                    <Button1 text={"KNOW ME BETTER"} />
                </Text>
            </PageL>
        </Block>
    );
};

export default SectionTitle;

const Block = styled.div`
    position: relative;
    padding: 0 10px;
    flex: 1 1 481px;

    display: flex;
    flex-wrap: wrap;

    text-align: start;
`;

const Text = styled.div`
    position: relative;

    margin: 0 0 54px;
    display: flex;
    flex-direction: column;

    align-items: center;

    h2,
    p,
    h4 {
        margin-bottom: 0.5em;
        z-index: 1;
    }
`;

const Pre = styled.h4`
    font-size: clamp(8px, 1vw, 24px);
    line-height: clamp(12px, 2vw, 30px);
    letter-spacing: clamp(0px, 0.3vw, 3px);

    color: hsla(0, 0%, 55%, 1);
`;
const Title = styled.h2`
    max-width: 500px;
    margin: 0 0 25px;
    font-size: clamp(20px, 3vw, 50px);
    line-height: clamp(25px, 4vw, 60px);
    letter-spacing: clamp(1px, 0.3vw, 3px);

    white-space: pre-line;
    color: black;
`;
const Definition = styled.p`
    max-width: 500px;
    margin: 0 0 10px;
    font-size: clamp(8px, 1.2vw, 24px);
    line-height: clamp(12px, 2.2vw, 30px);
    letter-spacing: clamp(0px, 0.1vw, 2px);

    color: hsla(0, 0%, 65%, 1);
`;
