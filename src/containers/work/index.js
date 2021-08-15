import Navbar from 'components/navbar';
import { routes } from 'router/routes';

import './style.scss';

const WorkPage = () => {
  return (
    <div className="">
      <Navbar currentPath="/work" />

      <div>
        <h1>Work page</h1>
      </div>
    </div>
  );
};

export default WorkPage;
