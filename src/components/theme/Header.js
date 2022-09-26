import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import { Divider, Grid } from '@arco-design/web-react';

import ThemeLottie from 'assets/lotties/theme.json';

const { Row, Col } = Grid;

const ThemeHeader = () => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: ThemeLottie,
    });

    return () => {
      lottie.destroy();
    };
  }, []);

  return (
    <div className="pa5">
      <Row className="pb3">
        <Col span={12}>
          <h1 className="ttu tracked">Editor Themes</h1>

          <p className="description mb4 lh-copy measure-wide">
            The passion for color blending inspires me to develop color themes for the Visual Studio code editor.
            <br />
            <br />
            They are available on the extensions marketplace!
          </p>
        </Col>

        <Col className="h-100" span={12}>
          <div className="lottie--designer" ref={lottieContainer} />
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default ThemeHeader;
