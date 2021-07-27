import styled from "styled-components";

const ContactSec = () => {
    return (
        <ContactSt>
            <FormCont>
                <form action="" method="post">
                    <fieldset>
                        <legend>Contact form</legend>
                        <Row>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value=""
                                autocorrect="off"
                                required
                            />
                        </Row>
                        <Row>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autocapitalize="none"
                                autocorrect="off"
                                required
                            />
                        </Row>
                        <RowMessage>
                            <label htmlFor="message">Your message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="10"></textarea>
                        </RowMessage>
                        <Row>
                            <button type="submit">Submit</button>
                        </Row>
                    </fieldset>
                </form>
            </FormCont>
        </ContactSt>
    );
};

export default ContactSec;

const ContactSt = styled.div`
    height: 100vh;

    background-image: linear-gradient(
        hsla(0, 0%, 100%, 1),
        hsla(220, 10%, 40%, 1)
    );

    display: flex;
    justify-content: center;
    align-items: center;
`;
const FormCont = styled.div`
    width: 1200px;
    height: 100vh;
    padding: 50px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Row = styled.div`
    padding: 20px;
    max-width: 800px;
    width: 100vw;
    height: 70px;

    display: flex;
    flex-direction: column;
    justify-content: start;
`;
const RowMessage = styled.div`
    padding: 20px;
    height: 200px;

    display: flex;
    flex-direction: column;
`;
