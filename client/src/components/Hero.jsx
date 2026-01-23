import React from 'react';
import About from './About';
import Programs from './Programs';
import Analytics from './Analytics';
import Messages from './Messages';
import Main from './Main';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-700 text-white  overflow-hidden">
      <Main />

      <Analytics />
      <Messages />
      <About />
      <Programs />
    </section>
  );
};

export default Hero;
