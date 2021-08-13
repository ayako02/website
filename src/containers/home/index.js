import { Navbar } from 'components/home';

import './style.scss';

const HomePage = () => {
  return (
    <div className="home-container">
      <header className="">
        <Navbar />
      </header>
    </div>
  );
};

export default HomePage;
