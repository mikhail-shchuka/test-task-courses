import './App.css';
import { Content } from './components/Content';
import { FAQs } from './components/FAQs';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <Content />
      <FAQs/>
      <Footer />
    </div>
  );
}

export default App;
