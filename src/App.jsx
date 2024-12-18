// import { useState } from 'react'
import {
  About,
  Banner,
  Contact,
  Header,
  Nav,
  Services,
  Work,
} from "./Components";

function App() {
  return (
    // bg-site is the app universal background, its a background image
    <div className="bg-site bg-no-repeat bg-cover w-full overflow-hidden">
      <Nav />
      <Header />
      <Banner />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

export default App;
