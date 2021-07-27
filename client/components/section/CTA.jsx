import styled from "styled-components";
import Link from "next/link";
import Btn12 from "../micro/btn12W";

const CallToAction = () => {
    return (
        <CallToActionSt>
            <h2>SO YOU'RE INTERESTED IN MY SERVICES...</h2>
            <p>
                I am currently looking for people who is interested in my
                services for lower rates with a limited ammount of vaccancies.
                Don't waste time, get in touch with me right now by clicking the
                button below
            </p>
            <Link href="/contact">
                <a>
                    <Btn12 text={"GET IN TOUCH >>"} />
                </a>
            </Link>
        </CallToActionSt>
    );
};

export default CallToAction;

const CallToActionSt = styled.div`
    height: 50vh;
    background-image: linear-gradient(
        hsla(345, 100%, 55%, 1),
        hsla(345, 80%, 40%, 1)
    );

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        max-width: 800px;
        text-align: center;
        font-size: 3em;
        margin: 50px;

        color: white;
    }
    p {
        max-width: 800px;
        text-align: center;
        font-size: 1.2em;
        letter-spacing: 1px;

        color: white;
    }
`;
