import React from 'react'

import Raminn from '../../assets/images/raminho.png'
import Facebook from '../../assets/images/FB.png'
import Instagram from '../../assets/images/IG.png'
import Site from '../../assets/images/www.png'
import LeftImage from '../../assets/images/esq.png'
import RightImageFloor from '../../assets/images/dir.png'

import { Container, ContainerRight, Right, Left, ImageRaim, Main, Title, TextLocation,
        TextBorderRadius, Content, ContainerContent, ContainerTextAndLocation, ContentContainerRadius,
        ContainerTopRadius, ContainerCircleLocation, ContainerGreenDescription, TextLinkLocation, TitleDescription,
        TextContentDescription, ContainerGreenFooterCenter, TextFooterGreen, ContainerCenterValues, TitleValueText, TextContentValue,
        ContainerCenterFlex, TextBorderRadiusMons, ContainerCenterFlexRow, ContainerCenterValuesColumn, TextContentValueWidth, TextContentValueRight,
        TextFooterCenterValues, ContainerSocials, TextSocials, ContainerSocialsCircleRow, ContainercircleSocial, LogoSocials, ContainerCelebration, TextCelebration,
        ContainerCelebrationLine, ContainerFooterInvite, ContainerFooterInviteTitle, TextFooterInvite, ContainerButtonInvite, ContainerFooterResume, TextResumeTitle,
        ContenxtResume, Footer, TextLastFooter, ImageFloorLeft, ImageFloorRight, ContainerRightImageFloor, ContainerLeftImageFloor, ContainerAjustCenter, ContainerPlantRigth,
        ImageValuesFlor
    } from './homeStyles'

export default function Home(){
    return(
        <Container>
            {/* <ContainerRight>
                <Left>
                    <p>.</p>
                </Left>
                <Right>
                    <ImageRaim src={Raminn} />
                </Right>
            </ContainerRight>    */}
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Main>
                <Title>
                    Maiara Fernandes
                </Title>
                <Title>
                    &
                </Title>
                <Title>
                    Felipe Costa
                </Title>
            </Main>
            
            <ContainerContent>
                <Content>
                ESTAMOS MUITO FELIZES EM PODER
                COMPARTILHAR COM VOCÊS A ALEGRIA DE MAIS
                UM PASSO DADO EM NOSSAS VIDAS: O NOSSO
                CASAMENTO!
                </Content>
            </ContainerContent>
            <ContainerTopRadius>
                <ContentContainerRadius>
                    <TextBorderRadiusMons>14</TextBorderRadiusMons>
                    <TextBorderRadius>JUN</TextBorderRadius>
                    <TextBorderRadius>2023</TextBorderRadius>
                    <TextBorderRadiusMons>19h</TextBorderRadiusMons>
                </ContentContainerRadius>
            </ContainerTopRadius>
            <ContainerTextAndLocation>
                <TextLocation>
                    NA CHURRASCARIA
                </TextLocation>
                <TextLocation>
                TOURÃO
                </TextLocation>
                <ContainerCircleLocation>
                    <TextLinkLocation href="https://www.google.com/maps/place/Tour%C3%A3o/@-23.0114991,-43.3201257,17z/data=!3m1!4b1!4m5!3m4!1s0x9bd097ceaaaaab:0xa74eebcc851823e4!8m2!3d-23.0115769!4d-43.3179581" target="_blank">
                    Clique aqui para vizualizar a localização no mapa
                    </TextLinkLocation>
                </ContainerCircleLocation>
            </ContainerTextAndLocation>
            <ContainerGreenDescription>
                <TitleDescription>
                    Às nossas queridas amizades e família,
                    <br></br>
                    <br></br>
                </TitleDescription>
                <TextContentDescription>
                    Sabemos que é tempo de festejar e comemorar um passo tão importante tendo em vista
                 que foi necessário superar muitos obstáculos, provamos a nós mesmos que o amor contribuiu 
                 para as nossas conquistas e que sem o apoio de cada um que convidamos não estaríamos aqui.
                    <br></br>
                    <br></br>
                </TextContentDescription>

                <TextContentDescription>
                    Nesse período de 4 anos, enfrentamos uma pandemia, as dificuldades da vida,
                    a perda de pessoas queridas mas também vivenciamos o encerramento de ciclos acadêmicos,
                    profissionais e pessoais e principalmente o amor um pelo outro e o carinho de cada um dos nossos
                    convidados para esse jantar.
                    <br></br>
                    <br></br>
                </TextContentDescription>
                <TextContentDescription>
                Nesse passo tão incrível e mágico, celebraremos com um jantar de casamento que será em formato
                de jantar por adesão* com mais informações abaixo.
                <br></br>
                <br></br>
                </TextContentDescription>

                <TextContentDescription>
                Acreditamos muito no que a bell hooks fala sobre o amor ser "uma combinação de cuidado, compromisso, conhecimento, responsabilidade, respeito e confiança." Nesse passo tão incrível e mágico,
                celebraremos com um jantar de casamento será em formato de jantar por adesão* com mais informações abaixo.
                <br></br>
                <br></br>
                </TextContentDescription>
                <ContainerGreenFooterCenter>
                    <TextFooterGreen>
                        * O formato jantar por adesão significa que o consumo é por conta do Convidado.
                    </TextFooterGreen>
                </ContainerGreenFooterCenter>
            </ContainerGreenDescription>

            <ContainerCenterValues>
                <ContainerCenterFlex>
                <TitleValueText>
                    VALORES
                </TitleValueText>
                <TextContentValue>
                RODÍZIO DE CARNES + BUFFET COMPLETO COM GUARNIÇÕES, SALADAS E PRATOS QUENTES
                <br></br>
                <br></br>
                </TextContentValue>
                <ContainerCenterValuesColumn>
                <ContainerCenterFlexRow>
                <TextContentValueWidth>
                    ADULTOS
                </TextContentValueWidth>
                
                <TextContentValueRight>
                    98,
                </TextContentValueRight>
                </ContainerCenterFlexRow>

                <ContainerCenterFlexRow>
                <TextContentValueWidth>
                CRIANÇAS ATÉ 5 ANOS
                </TextContentValueWidth>
                <TextContentValueRight>
                    00,
                </TextContentValueRight>
                </ContainerCenterFlexRow>

                <ContainerCenterFlexRow>
                <TextContentValueWidth>
                    MAIORES DE 18 ANOS
                </TextContentValueWidth>
                <TextContentValueRight>
                    49,
                </TextContentValueRight>
                </ContainerCenterFlexRow>
                </ContainerCenterValuesColumn>
                <TextFooterCenterValues>
                ** não inclui bebidas e taxas de serviço
                </TextFooterCenterValues>
                </ContainerCenterFlex>
                </ContainerCenterValues>
                <ContainerSocials>
                    {/* <ContainerPlantRigth>
                    <ImageValuesFlor src={Raminn}/>
                    </ContainerPlantRigth> */}
                    <TextSocials>Para mais informações sobre o que será servido, é possível conferir nas redes do restaurante:</TextSocials>
                    <ContainerSocialsCircleRow>
                        <ContainercircleSocial href="https://www.instagram.com/churrascariatourao/" target="_blank">
                            <LogoSocials src={Instagram}/>
                        </ContainercircleSocial>

                        <ContainercircleSocial href="https://www.facebook.com/ChurrascariaTouraoRio/" target="_blank">
                            <LogoSocials src={Facebook}/>
                        </ContainercircleSocial>

                        <ContainercircleSocial href="https://www.tourao.com.br/" target="_blank">
                            <LogoSocials src={Site}/>
                        </ContainercircleSocial>
                    </ContainerSocialsCircleRow>
                </ContainerSocials>
                <ContainerCelebration>

                    <ContainerLeftImageFloor>
                   {/*  <ImageFloorLeft src={LeftImage}/> */}
                    </ContainerLeftImageFloor>

                    <ContainerCelebrationLine>
                    <TextCelebration>
                    Faremos uma recepção digna da celebração do nosso amor e contamos com você e sua família e estamos solicitando que confirmem a presença até o dia 07 de junho, uma semana anterior ao evento para garantir uma boa organização e que todos se acomodem bem na área que reservaremos no restaurante. 
                    </TextCelebration>
                    </ContainerCelebrationLine>

                    <ContainerRightImageFloor>
                    {/* <ImageFloorRight src={RightImageFloor}/> */}
                    </ContainerRightImageFloor>    

                    

                </ContainerCelebration>
                <ContainerAjustCenter>
                <ContainerCircleLocation>
                    <TextLinkLocation href='https://docs.google.com/forms/d/1wbZTYhFdHNXwXtAL362qTu-DKz0NDaMER4xrSgd-cVU/viewform?edit_requested=true' target="_blank">
                    Clique aqui para confirmar a sua presença
                    </TextLinkLocation>
                </ContainerCircleLocation> 
                </ContainerAjustCenter>
                 
                <ContainerFooterInvite>
                    <ContainerFooterInviteTitle>
                        <TextFooterInvite>
                        Muitos amigos e familiares gostariam de contribuir com os itens da nossa casa e por isso montamos essa lista de presentes simples com alguns links de referência do modelo, 
                        cor e tamanho que gostariamos de receber porém fica a seu critério usar esse link ou não. Apenas nos avise para que não haja presentes iguais/duplicado.
                        </TextFooterInvite>
                        <ContainerButtonInvite>
                        <TextLinkLocation href="https://www.notion.so/Lista-de-presentes-948929feeb1349b89acad32f4c17096c" target="_blank">
                        Clique aqui para conferir
                        </TextLinkLocation>
                        </ContainerButtonInvite>
                    </ContainerFooterInviteTitle>
                    <ContainerFooterResume>
                        <TextResumeTitle>
                            RESUMO:
                        </TextResumeTitle>
                        <ContenxtResume>
                            Churrascaria Tourão - Praça São Perpétuo, 116 - Barra da Tijuca, RJ
                            Horário do evento: 19h ás 23h (devido horário de funcionamento do estabelecimento)
                        </ContenxtResume>
                    </ContainerFooterResume>

                    <Footer>
                        <TextLastFooter>
                        ESPERAMOS PODER TER VOCÊ COM A GENTE NESSE MOMENTO TÃO FELIZ DE NOSSAS VIDAS!
                        </TextLastFooter>
                    </Footer>
                </ContainerFooterInvite>
        </Container>
    )
}