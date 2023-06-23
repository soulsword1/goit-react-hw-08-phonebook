import { Container, MainTitle } from './Main.styled';
import { FcPhoneAndroid } from 'react-icons/fc';

export default function Main(){
    return (
        <Container>
          <MainTitle>
            Welcome to the phonebook app
            <FcPhoneAndroid />
          </MainTitle>
        </Container>
      );
}