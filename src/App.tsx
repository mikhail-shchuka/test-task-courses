import { useEffect, useState } from 'react';
import './App.css';
import { Content } from './components/Content';
import { FAQs } from './components/FAQs';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  const [courseSeries, setCourseSeries] = useState<any>(null)

  useEffect(() => {
    fetch('https://api.acharyaprashant.org/v2/legacy/courses/series/optuser/course-series-eeb9d3').then(res => res.json()).then(data => setCourseSeries(data))
  }, [])
  console.log(courseSeries)
  return (
    courseSeries && (
      <div className='App'>
      <Header title={courseSeries.details.title} />
      <Content data={courseSeries} />
      <FAQs/>
      <Footer />
    </div>
    )

  );
}

export default App;
