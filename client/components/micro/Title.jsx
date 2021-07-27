import styled from "styled-components";

const TitleSec = () => {
    return (
        <TitleSecSt>
            <Margin>
                <Title>
                    <h1>I WORK WITH DIFFERENT MEDIA</h1>
                    <h4>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit
                        ametLorem ipsum ipsum dolor sit amet Lorem ipsum dolor
                        sitamet Lorem ipsum dolor sit amet
                    </h4>
                </Title>
            </Margin>
        </TitleSecSt>
    );
};

export default TitleSec;

const TitleSecSt = styled.div`
    background-color: hsla(220, 10%, 80%, 1);

    display: flex;
    justify-content: center;
`;

const Margin = styled.div`
    position: relative;
    top: 100px;
    padding: 20px;
    width: 100%;
    max-width: 1200px;

    border: 0px solid black;
    display: flex;
    justify-content: center;
`;

const Title = styled.div`
    height: fit-content;
    max-width: 800px;
    border: 0px solid black;
    padding: 50px 0px;
    text-align: center;

    h1 {
        color: hsla(350, 80%, 50%, 1);
        font-size: 2.5em;
    }
    h4 {
        padding: 20px 5vw;

        line-height: 1.5em;
        color: hsla(220, 20%, 35%, 1);
    }

    border: 0px solid black;
`;
