import Navbar from 'components/navbar';
import IconSection from 'components/home/IconSection';

import './style.scss';

const HomePage = () => (
  <div className="home-container">
    <Navbar />

    <div className="content">
      <h1 className="white mb0">Ayako</h1>
      <h4 className="white">Front End Developer | UX Designer</h4>
      <p className="white">Someone who is passionate on coding, designing, reading & writing.</p>

      <IconSection />
    </div>

    <footer className="footer white">Design & Created by Ayako © 2021</footer>
  </div>
);

export default HomePage;
