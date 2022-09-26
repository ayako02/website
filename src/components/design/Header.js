import lottie from 'lottie-web';
import { Children, useEffect, useRef } from 'react';

import { Divider, Grid } from '@arco-design/web-react';

import DesignerLottie from 'assets/lotties/designer.json';

import { TooltipIcon } from 'components/common';
import { DESIGN_SKILL_ICONS } from 'settings/constants/icons';

const { Row, Col } = Grid;

const DesignContainerHeader = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: DesignerLottie,
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <>
      <Row className="pb3">
        <Col span={12}>
          <h1 className="ttu tracked">UX Designs</h1>

          <p className="description mb4 lh-copy measure-wide">
            The training of becoming a UX Designer is on the path. <br />
            As a designer, I will always be empathize on the users need and create designs with more accessibility.
          </p>

          <div className="flex flex-column">
            <h3 className="ttu tracked">Software skills</h3>
            <div className="flex flex-row items-center mt2">
              {Children.toArray(
                DESIGN_SKILL_ICONS.map(item => {
                  const { isSvg, tooltipLabel, className, icon } = item;
                  return <TooltipIcon tooltipLabel={tooltipLabel} isSvg={isSvg} icon={icon} className={className} />;
                })
              )}
            </div>
          </div>
        </Col>

        <Col className="h-100" span={12}>
          <div className="lottie--designer" ref={lottieContainer} />
        </Col>
      </Row>
      <Divider />
    </>
  );
};

export default DesignContainerHeader;
