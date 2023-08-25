import { Container, MainTitle,MainText, MainImg,IconImg,RegistrationButton,LoginLink, ContainerTitle } from './Main.styled';
import Person from '../../images/person.png';
import Icon from '../../images/icon.png';

export default function Main(){
    return (
        <Container>
          <MainImg src={Person} />
          <ContainerTitle>
          
          <IconImg src={Icon} /><MainTitle>Task Pro 
          </MainTitle>
          </ContainerTitle>
          <MainText>Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!</MainText>
          <RegistrationButton>Registration</RegistrationButton>
          <LoginLink>Log In</LoginLink>
        </Container>
      );
}