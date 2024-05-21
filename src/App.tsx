import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router'
import { Header } from './Componets/Header';
import { Footer } from './Componets/Footer';

function AppContent() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

function App() {
  return (
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
  )
}

export default App
