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
        ImageValuesFlor, MainContentFloor
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
            <MainContentFloor>
            <ImageRaim src={Raminn} />
            </MainContentFloor>
            <ContainerContent>
                <Content>
                ESTAMOS MUITO FELIZES EM PODER
                COMPARTILHAR COM VOC??S A ALEGRIA DE MAIS
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
                TOUR??O
                </TextLocation>
                <ContainerCircleLocation>
                    <TextLinkLocation href="https://www.google.com/maps/place/Tour%C3%A3o/@-23.0114991,-43.3201257,17z/data=!3m1!4b1!4m5!3m4!1s0x9bd097ceaaaaab:0xa74eebcc851823e4!8m2!3d-23.0115769!4d-43.3179581" target="_blank">
                    Clique aqui para vizualizar a localiza????o no mapa
                    </TextLinkLocation>
                </ContainerCircleLocation>
            </ContainerTextAndLocation>
            <ContainerGreenDescription>
                <TitleDescription>
                    ??s nossas queridas amizades e fam??lia,
                    <br></br>
                    <br></br>
                </TitleDescription>
                <TextContentDescription>
                    Sabemos que ?? tempo de festejar e comemorar um passo t??o importante tendo em vista
                 que foi necess??rio superar muitos obst??culos, provamos a n??s mesmos que o amor contribuiu 
                 para as nossas conquistas e que sem o apoio de cada um que convidamos n??o estar??amos aqui.
                    <br></br>
                    <br></br>
                </TextContentDescription>

                <TextContentDescription>
                    Nesse per??odo de 4 anos, enfrentamos uma pandemia, as dificuldades da vida,
                    a perda de pessoas queridas mas tamb??m vivenciamos o encerramento de ciclos acad??micos,
                    profissionais e pessoais e principalmente o amor um pelo outro e o carinho de cada um dos nossos
                    convidados para esse jantar.
                    <br></br>
                    <br></br>
                </TextContentDescription>
                <TextContentDescription>
                Nesse passo t??o incr??vel e m??gico, celebraremos com um jantar de casamento que ser?? em formato
                de jantar por ades??o* com mais informa????es abaixo.
                <br></br>
                <br></br>
                </TextContentDescription>

                <TextContentDescription>
                Acreditamos muito no que a bell hooks fala sobre o amor ser "uma combina????o de cuidado, compromisso, conhecimento, responsabilidade, respeito e confian??a." Nesse passo t??o incr??vel e m??gico,
                celebraremos com um jantar de casamento ser?? em formato de jantar por ades??o* com mais informa????es abaixo.
                <br></br>
                <br></br>
                </TextContentDescription>
                <ContainerGreenFooterCenter>
                    <TextFooterGreen>
                        * O formato jantar por ades??o significa que o consumo ?? por conta do Convidado.
                    </TextFooterGreen>
                </ContainerGreenFooterCenter>
            </ContainerGreenDescription>

            <ContainerCenterValues>
                <ContainerCenterFlex>
                <TitleValueText>
                    VALORES
                </TitleValueText>
                <TextContentValue>
                ROD??ZIO DE CARNES + BUFFET COMPLETO COM GUARNI????ES, SALADAS E PRATOS QUENTES
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
                CRIAN??AS AT?? 5 ANOS
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
                ** n??o inclui bebidas e taxas de servi??o
                </TextFooterCenterValues>
                </ContainerCenterFlex>
                </ContainerCenterValues>
                <ContainerSocials>
                    {/* <ContainerPlantRigth>
                    <ImageValuesFlor src={Raminn}/>
                    </ContainerPlantRigth> */}
                    <TextSocials>Para mais informa????es sobre o que ser?? servido, ?? poss??vel conferir nas redes do restaurante:</TextSocials>
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
                <MainContentFloor>
                 <ImageRaim src={Raminn} />
                </MainContentFloor>
                <ContainerCelebration>

                    <ContainerLeftImageFloor>
                   {/*  <ImageFloorLeft src={LeftImage}/> */}
                    </ContainerLeftImageFloor>

                    <ContainerCelebrationLine>
                    <TextCelebration>
                    Faremos uma recep????o digna da celebra????o do nosso amor e contamos com voc?? e sua fam??lia e estamos solicitando que confirmem a presen??a at?? o dia 07 de junho, uma semana anterior ao evento para garantir uma boa organiza????o e que todos se acomodem bem na ??rea que reservaremos no restaurante. 
                    </TextCelebration>
                    </ContainerCelebrationLine>

                    <ContainerRightImageFloor>
                    {/* <ImageFloorRight src={RightImageFloor}/> */}
                    </ContainerRightImageFloor>    

                    

                </ContainerCelebration>
                <ContainerAjustCenter>
                <ContainerCircleLocation>
                    <TextLinkLocation href='https://docs.google.com/forms/d/1wbZTYhFdHNXwXtAL362qTu-DKz0NDaMER4xrSgd-cVU/viewform?edit_requested=true' target="_blank">
                    Clique aqui para confirmar a sua presen??a
                    </TextLinkLocation>
                </ContainerCircleLocation> 
                </ContainerAjustCenter>
                 
                <ContainerFooterInvite>
                    <ContainerFooterInviteTitle>
                        <TextFooterInvite>
                        A nossa maior prioridade ?? que voc?? possa estar presente conosco nesse momento t??o especial mas, ainda assim, existem muitas pessoas que fazem quest??o de nos presentear com itens para o nosso lar. Se for do seu interesse, segue o link abaixo.
                        </TextFooterInvite>
                        <ContainerButtonInvite>
                        <TextLinkLocation href="https://quilled-clutch-d22.notion.site/Lista-de-presentes-948929feeb1349b89acad32f4c17096c" target="_blank">
                        Clique aqui para conferir
                        </TextLinkLocation>
                        </ContainerButtonInvite>
                    </ContainerFooterInviteTitle>
                    <ContainerFooterResume>
                        <TextResumeTitle>
                            RESUMO:
                        </TextResumeTitle>
                        <ContenxtResume>
                            Churrascaria Tour??o - Pra??a S??o Perp??tuo, 116 - Barra da Tijuca, RJ
                            Hor??rio do evento: 19h ??s 23h (devido hor??rio de funcionamento do estabelecimento)
                        </ContenxtResume>
                    </ContainerFooterResume>

                    <Footer>
                        <TextLastFooter>
                        ESPERAMOS PODER TER VOC?? COM A GENTE NESSE MOMENTO T??O FELIZ DE NOSSAS VIDAS!
                        </TextLastFooter>
                    </Footer>
                </ContainerFooterInvite>
        </Container>
    )
}