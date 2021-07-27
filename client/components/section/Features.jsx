import styled from "styled-components";

import {
    FiActivity,
    FiAlertCircle,
    FiCamera,
    FiCode,
    FiEye,
    FiPower,
    FiVideo,
    FiVoicemail,
} from "react-icons/fi";

const Features = () => {
    const iconCards = [
        {
            name: "HIGH PERFORMANCE",
            image: "model.jpg",
            icon: <FiActivity />,
            path: "services/influencer",
            text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
        },
        {
            name: "BUSINESS EFFECTIVE",
            image: "shooting session.jpg",
            icon: <FiAlertCircle />,
            path: "services/coorporative",
            text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
        },
        {
            name: "HIGH END TECHNOLOGY",
            image: "photo studio.jpg",
            icon: <FiCamera />,
            path: "services/events",
            text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
        },
        {
            name: "EXPERTISE",
            image: "nebula.jpg",
            icon: <FiCode />,
            path: "services/educational",
            text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
        },
        {
            name: "HIGH END TECHNOLOGY",
            image: "photo studio.jpg",
            icon: <FiVoicemail />,
            path: "services/events",
            text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
        },
        {
            name: "AMAZING VALUE",
            image: "nebula.jpg",
            icon: <FiPower />,
            path: "services/educational",
            text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
        },
        {
            name: "MUCH MORE",
            image: "photo studio.jpg",
            icon: <FiVideo />,
            path: "services/educational",
            text: "lorem ipsum vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldgsdg lorem ipsum vbsld um vbsl vbsldgsdg lorem ipsum vbsldgsdg sl vbsldg",
        },
    ];

    return (
        <List>
            {iconCards.map((item, index) => (
                <Card key={index}>
                    <div>{item.icon}</div>
                    <h4>{item.name}</h4>
                    <h5>{item.text}</h5>
                </Card>
            ))}
        </List>
    );
};

export default Features;

const List = styled.div`
    padding: 5%;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const Card = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100px;

    margin: 10px 2vw;
    padding: 30px 10px 20px 10px;

    border-radius: 5px;
    background: hsla(0, 0%, 96%, 1);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
        width: 150px;
        height: 150px;

        border-radius: 50%;
        box-shadow: 2px 4px 7px grey;
        background-image: linear-gradient(
            120deg,
            hsla(348, 100%, 71%, 1) 0%,
            hsla(345, 100%, 50%, 1) 30%,
            hsla(347, 80%, 40%, 1) 80%
        );

        display: flex;
        justify-content: center;
        align-items: center;
        backface-visibility: hidden;

        svg {
            width: 50%;
            height: 50%;

            stroke: white;

            filter: drop-shadow(-2px -2px 2px hsla(360, 50%, 30%, 0.9))
                drop-shadow(2px 2px 2px hsla(10, 100%, 80%, 0.99));
        }
        :before {
            transition: 0.3s;
            content: "";
            position: absolute;
            width: 150px;
            height: 150px;

            border-radius: 50%;
            background-image: linear-gradient(
                300deg,
                hsla(348, 100%, 71%, 1) 0%,
                hsla(345, 100%, 50%, 1) 30%,
                hsla(347, 80%, 40%, 1) 80%
            );

            opacity: 1;
            transform: scale(0.9);
        }
        :after {
            transition: 0.3s;
            transform: translateXY(-100%);
            content: "";
            position: absolute;

            width: 150px;
            height: 150px;

            border-radius: 50%;
            background-image: radial-gradient(
                hsla(0, 100%, 100%, 1),
                transparent
            );
            transform: scale(0.3);

            filter: saturate(150%);

            opacity: 0;
        }
    }

    h4 {
        height: 4em;
        padding: 50px 10px 30px;
        text-align: center;
        font-size: clamp(1em, 1.8vw, 3em);

        background: -webkit-linear-gradient(
            120deg,
            hsla(360, 100%, 69%, 1),
            hsla(360, 100%, 69%, 1)
        );

        text-shadow: 1px 1px 3px hsla(360, 0%, 60%, 1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: hsla(336, 93%, 45%, 1);
    }
    h5 {
        max-width: 300px;
        line-height: 1.5em;
        font-variant: italic;
        text-align: center;
        font-size: clamp(0.7em, 0.25vw, 1.5em);
        display: block;
    }

    transition: 0.3s;
    :hover {
        transition: 0.001s;
        transform: scale(100%);
        background: hsla(0, 0%, 100%, 0.6);

        div :before {
            opacity: 1;
            transform: scale(0.9);
        }

        h5 {
            display: block;
        }
    }
`;
