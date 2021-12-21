import { DesignContainerContent, DesignContainerHeader } from 'components/design';

import './style.scss';

export const DesignContainer = () => {
  return (
    <div className="container-design helvetica">
      <DesignContainerHeader />
      <DesignContainerContent />
    </div>
  );
};
