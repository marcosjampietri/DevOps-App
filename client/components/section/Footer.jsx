import styled from "styled-components";

const Footer = () => {
    return (
        <FooterSt>
            <Container>
                <div>
                    <Column>
                        <aside>
                            <h3>ADDRESS</h3>
                            <p>
                                Welcome to my creative lab. Lorem ipsum is
                                simply free text dolor sit amet consectetur
                                adipisicing elit. Tempore corrupti temporibus
                                fuga earum asperiores, alias excepturi sit
                                mpedit fugit laudantium.
                            </p>
                        </aside>
                    </Column>
                    <Column>
                        <aside>
                            <h3>CONTACT</h3>
                            <p>
                                41 Broklyn Street, New York United States of
                                America
                            </p>
                            <Pair>
                                <p>Phone:</p>
                                <p>666 888 000</p>
                            </Pair>
                            <Pair>
                                <p>Email:</p>
                                <a href="#"> andreamangiacavallo@gmail.com </a>
                            </Pair>
                        </aside>
                    </Column>
                    <Column>
                        <Social>
                            <h3>SOCIAL</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/icons/facebook.svg"
                                            alt="Twitter Logo"
                                        />
                                        <p>Facebook</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/icons/instagram.svg"
                                            alt="Twitter Logo"
                                        />
                                        <p>Instagram</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/icons/youtube.svg"
                                            alt="Twitter Logo"
                                        />
                                        <p>Youtube</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img
                                            src="/icons/twitter.svg"
                                            alt="Twitter Logo"
                                        />
                                        <p>Twitter</p>
                                    </a>
                                </li>
                            </ul>
                        </Social>
                    </Column>
                </div>
            </Container>
            <CopyR>
                <div>
                    <p> © copyright 2021 by </p>
                    <a href="#">marcosdepaiva.com</a>
                </div>
            </CopyR>
        </FooterSt>
    );
};

export default Footer;

const FooterSt = styled.section`
    width: 100vw;
    padding: 100px 0px;

    background-color: hsla(0, 0%, 10%, 1);

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

const Container = styled.div`

margin-bottom: 50px;


    > div {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }


    }
    ul {
        margin-top: 0;
        margin-bottom: 1rem;
    }
    a {
        color: #007bff;


    }

    }
`;

const Social = styled.aside`
    ul {
        display: flex;
        flex-wrap: wrap;

        li {
            padding: 0px 40px 0px 0px;
            width: 170px;
            a {
                display: flex;
                filter: grayscale(100%);
                transition: 0.8s;
                p {
                    transition: 0.8s;

                    color: hsla(345, 0%, 50%, 1);
                }
                :hover {
                    transition: 0.2s;
                    filter: grayscale(0%);
                    p {
                        transition: 0.2s;
                        color: hsla(345, 100%, 60%, 1);
                    }
                    img {
                        transition: 0.2s;
                        background-color: hsla(0, 0%, 100%, 0.8);
                    }
                }
                img {
                    background-color: hsla(0, 0%, 100%, 0.2);

                    margin: 10px 25px 10px 0px;
                    padding: 2px;
                    width: 35px;
                    height: 35px;

                    border-radius: 5px;
                }
            }
        }
    }
`;

const Column = styled.div`
    margin: 20px;
    padding: 5vh 20px;
    flex-wrap: wrap;
    flex: 1 1 30%;

    border-top: 1px solid #303030;
    border-right: 2px solid #303030;



    display: flex;
    justify-content: center;

    aside, ${Social} {

    width: 70%;

    h3 {
        margin: 0.5rem 0;
        padding-bottom: 20px;
        letter-spacing: 10px;
        font-size: 1.5em;
        color: #bebebe;

    }
    p {
        letter-spacing: 4px;
        line-height: 1.8em;
        margin: 1rem 0;
        max-width: 280px;
        font-size: 0.8em;


    }

`;

const Pair = styled.div`
    display: flex;
    align-items: center;

    p {
        padding: 0px 20px 0px 0px;
    }
`;

const CopyR = styled.div`
    width: 100%;
    height: 10vh;

    div {
        width: 80%;
        margin: 0 auto;
        padding: 20px;
        text-align: center;

        border-top: 1px solid hsla(0, 0%, 20%, 1);
        P,
        a {
            color: #bebebe;
            margin-bottom: 10px;
            letter-spacing: 3px;
        }
    }
`;
