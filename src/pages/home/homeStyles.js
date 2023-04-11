import styled from "styled-components";
import leftFloor from "../../assets/images/lateral esq.png";
import background from "../../assets/images/fundo.jpg";
import { device } from "../../utils/Responsive";

export const Container = styled.div`
    width: 100;
    height: 100%;

    background-image: url(${background});
    //background-repeat: no-repeat;
`;

export const ContainerRight = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const Right = styled.div`
    width: 50%;

    background-color: red;
`;

export const Left = styled.div`
    width: 50%;
`;
export const ImageRaim = styled.img`
    /* transform: rotate(50deg);
    margin-top: -28%; */
`;

export const Main = styled.main`
    /* margin-bottom: 50%; */

    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${device.mobileS} {
        text-align: center;
    }
`;
export const Title = styled.h1`
    //font-family: "Herr Von Muellerhoff", cursive;
    font-family: "Monsieur La Doulaise", cursive;
    font-size: 3.5rem;
    font-weight: 100;

    color: #394d2e;
`;

export const ContainerPlantRigth = styled.div`
    width: 100%;
`;

export const ImageValuesFlor = styled.img`
    transform: rotate(-1150deg);

    position: absolute;

    left: -200px;
    margin-top: -7%;
`;
export const TextBorderRadiusMons = styled.span`
    font-family: "Corben", cursive;
    font-style: italic;
    font-size: 10rem;
    font-weight: 500;

    color: #fff;
    line-height: 90%;
`;
export const ContainerContent = styled.div`
    padding: 10%;
`;

export const Content = styled.h1`
    font-family: "Corben", cursive;
    text-align: center;
    font-weight: 200;
    font-size: 1rem;
    color: #394d2e;
`;

export const ContainerTopRadius = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContentContainerRadius = styled.div`
    width: 70%;
    height: 70vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #bacea5;
    border-top-left-radius: 250px;
    border-top-right-radius: 250px;
`;

export const TextBorderRadius = styled.span`
    font-family: "Corben", cursive;
    font-size: 5rem;
    font-weight: 500;

    color: #fff;
    line-height: 80%;
`;

export const ContainerTextAndLocation = styled.div`
    margin-top: 2%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
export const TextLocation = styled.span`
    font-size: 1rem;
    font-family: "Corben", cursive;
    line-height: 100%;

    color: #394d2e;
`;

export const ContainerCircleLocation = styled.div`
    width: 80%;
    max-width: 95%;
    background-color: #bacea5;
    padding: 10px;
    border-radius: 20px;
    margin-top: 4%;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextLinkLocation = styled.a`
    font-family: "Corben", cursive;
    text-decoration: none;
    color: #222a21;
    font-size: 0.9rem;
    text-align: center;
`;

export const ContainerGreenDescription = styled.div`
    width: 100%;

    padding: 15px;
    margin-top: 7%;
    display: flex;
    flex-direction: column;
    background-color: #bacea5;
`;

export const TitleDescription = styled.span`
    font-size: 1rem;
    font-family: "Corben", cursive;
    color: #394d2e;
`;

export const TextContentDescription = styled.span`
    font-size: 0.9rem;
    font-weight: 500;
    font-family: "Corben", cursive;
    font-style: italic;
    text-align: justify;
    margin-left: 1%;
    color: #394d2e;
`;

export const ContainerGreenFooterCenter = styled.div`
    width: 100%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextFooterGreen = styled.span`
    text-align: center;
    font-family: "Corben", cursive;
    font-style: italic;
    font-size: 0.8rem;
    color: #394d2e;
`;

export const ContainerCenterValues = styled.div`
    width: 100%;
    margin-top: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerCenterFlex = styled.div`
    width: 70%;
    margin-top: 2%;
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: #bacea5;
`;
export const TitleValueText = styled.span`
    font-family: "Corben", cursive;
    font-size: 1rem;
`;

export const TextContentValue = styled.span`
    font-family: "Corben", cursive;
    text-align: center;
    font-size: 0.7rem;
`;

export const ContainerCenterValuesColumn = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const ContainerCenterFlexRow = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TextContentValueWidth = styled.span`
    font-family: "Corben", cursive;

    text-align: justify;
    font-size: 0.7rem;
    width: 60%;
`;

export const TextContentValueRight = styled.span`
    font-family: "Corben", cursive;
    text-align: center;
    font-size: 0.7rem;
    width: 40%;
`;

export const TextFooterCenterValues = styled.span`
    font-family: "Corben", cursive;
    text-align: center;
    font-size: 0.7rem;
    font-style: italic;
    margin-top: 2%;
`;

export const ContainerSocials = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 10%;
    margin-bottom: 5%;
    padding-left: 10%;
    padding-right: 10%;
`;

export const TextSocials = styled.span`
    font-family: "Corben", cursive;
    font-style: italic;
    text-align: center;
    color: #394d2e;
`;

export const ContainerSocialsCircleRow = styled.div`
    width: 100%;
    margin-top: 4%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

export const ContainercircleSocial = styled.a`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: #bacea5;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoSocials = styled.img`
    width: 80%;
`;

export const TextCelebration = styled.span`
    font-family: "Corben", cursive;
    font-style: italic;
    text-align: center;
    color: #394d2e;
`;

export const ContainerCelebration = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContainerCelebrationLine = styled.div`
    width: 90%;
    margin-top: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerAjustCenter = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainContentFloor = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerFooterInvite = styled.div`
    width: 100%;
    margin-top: 5%;
    padding-left: 5%;
    padding-right: 5%;
    background-color: #bacea5;
`;

export const ContainerFooterInviteTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const TextFooterInvite = styled.span`
    font-family: "Corben", cursive;
    font-style: italic;
    text-align: center;
    color: #394d2e;
`;

export const ContainerButtonInvite = styled.div`
    background-color: #eadfc1;

    width: 70%;
    max-width: 95%;
    padding: 10px;
    border-radius: 20px;
    margin-top: 4%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ContainerFooterResume = styled.div`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
`;

export const TextResumeTitle = styled.span`
    font-family: "Corben", cursive;
    color: #394d2e;
`;

export const ContenxtResume = styled.span`
    font-family: "Corben", cursive;
    font-style: italic;
    text-align: justify;
    font-size: 0.9rem;
    color: #394d2e;
`;

export const Footer = styled.div`
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const TextLastFooter = styled.span`
    font-family: "Corben", cursive;
    text-align: center;
    font-size: 0.9rem;
    color: #394d2e;
`;

export const ImageFloorLeft = styled.img`
    object-fit: cover;
    opacity: 0.5;
`;

export const ImageFloorRight = styled.img`
    object-fit: cover;
    opacity: 0.5;

    /* -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1); */
`;
export const ContainerRightImageFloor = styled.div``;

export const ContainerLeftImageFloor = styled.div``;
