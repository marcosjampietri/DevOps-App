import styled from "styled-components";

const Button1 = ({ text }) => {
    return (
        <>
            <Button1St>{text}</Button1St>
        </>
    );
};

export default Button1;

const Button1St = styled.button`
    // width: 180px;
    margin: 20px 0px;

    padding: 1.5em 1.8em;

    background: hsla(340, 95%, 45%, 1);
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
`;
