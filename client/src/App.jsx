import React from 'react';
import { Route, Routes } from 'react-router';
import HomeLayout from './components/HomeLayout';
import Faculty from './components/Faculty';
import News from './components/News';
import Events from './components/Events';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path='/' element={<HomeLayout />} >
          <Route index element={<Hero />} />
          <Route path='/faculty' element={<Faculty />} />
          <Route path='/news' element={<News />} />
          <Route path='/events' element={<Events />} />
          <Route path='/about' element={<About />} />
          <Route path='/programs' element={<Programs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;