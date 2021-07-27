import styled from "styled-components";

const GoogleMap = () => {
    return (
        <Google>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.033644017586!2d-0.13414438422849098!3d51.5492820796421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b05abadf5d7%3A0x4033a7dfcae1179c!2sTorriano%20Ave%2C%20London!5e0!3m2!1sen!2suk!4v1626191292285!5m2!1sen!2suk"
                allowfullscreen=""
                loading="lazy"></iframe>
        </Google>
    );
};

export default GoogleMap;

const Google = styled.div`
    width: 100vw;
    height: 500px;
    margin: 0px auto;

    iframe {
        box-shadow: inset 2px 2px 20px red;
        width: 100%;
        height: 100%;
    }
`;
