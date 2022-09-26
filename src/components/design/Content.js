import { Link } from '@reach/router';

import KyattoCover from 'assets/images/kyatto-cover.png';

const DesignContainerContent = () => {
  return (
    <div className="mv5-l mv4">
      <h1 className="ttu tracked">projects</h1>

      <Link to="/project/design/kyatto">
        <div className="content--list mt5">
          <div className="flex flex-row items-center">
            <div className="fl">
              <img alt="Kyatto Project" src={KyattoCover} className="list--cover" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DesignContainerContent;
