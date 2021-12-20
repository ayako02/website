import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import { Divider, Grid } from '@arco-design/web-react';

import FigmaIcon from 'assets/icons/figma.svg';
import AdobeXdIcon from 'assets/icons/adobe-xd.svg';

import { TooltipIcon } from 'components/common';

import './style.scss';

const { Row, Col } = Grid;

const designerLottie = require('../../assets/lotties/designer.json');

export const DesignContainer = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: designerLottie,
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className="container-design">
      <Row className="grid-demo helvetica pb3">
        <Col span={12}>
          <h1 className="ttu tracked">UX Designs</h1>
          <p className="description mb4">
            The training of becoming a UX Designer is on the path. <br />
            As a designer, I will always be empathize on the users need and create designs with more accessibility.
          </p>

          <div className="flex flex-column">
            <h3 className="ttu tracked">Software skills</h3>

            <div className="flex flex-row items-center mt2">
              <TooltipIcon tooltipLabel="Figma" isSvg={false} icon={<img alt="Figma" src={FigmaIcon} />} className="icon--figma mr3" />
              <TooltipIcon tooltipLabel="Adobe XD" isSvg={false} icon={<img alt="Figma" src={AdobeXdIcon} />} className="icon--adobe mr3" />
            </div>
          </div>
        </Col>

        <Col className="h-100" span={12}>
          <div className="lottie--designer" ref={container} />
        </Col>
      </Row>
      <Divider />
    </div>
  );
};
