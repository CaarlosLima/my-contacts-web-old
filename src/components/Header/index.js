import logo from 'assets/images/logo.svg';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <img src={logo} alt="Logo MyContacts" width="201" />
    </Container>
  );
}
