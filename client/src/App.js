import './App.css';
import RequestForm from './components/RequestForm';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  
})

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{ mt: 20}}>
        <RequestForm />
      </Container>
    </div>
  );
}

export default App;
