import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/global';
import defaultTheme from 'assets/styles/themes/default';
import Routes from 'Routes';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';
import { Container } from './styles';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Container>
          <Header />
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
