import Navbar from 'components/navbar';
import { routes } from 'router/routes';

import './style.scss';

const WorkPage = () => (
  <>
    <div className="bb b--black-20">
      <Navbar currentPath="/work" />
    </div>

    <div className="tc mt5">
      <h4>Work in progress...</h4>
    </div>
  </>
);

export default WorkPage;
