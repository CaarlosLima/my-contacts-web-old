import logo from 'assets/images/logo.svg';
import { Container, InputSearchContainer } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo MyContacts" width="201" />

      <InputSearchContainer>
        <input type="text" placeholder="Search by name" />
      </InputSearchContainer>
    </Container>
  );
}
