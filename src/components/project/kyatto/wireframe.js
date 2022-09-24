import { Paper, Card } from '@mui/material';
import { Divider } from '@arco-design/web-react';

import PaperWireframe from 'assets/images/kyatto-wireframe-paper.png';

const KyattoWireframe = () => (
  <div className="mv4">
    <h2 className="ttu tracked dark-blue pb3 tc">Wireframes</h2>

    <article className="flex items-center justify-center">
      <p className="w-60-l w-90 paragraph lh-copy f5 mid-gray pb4">
        The draft and iteration of the paper application stream ensured that the elements that led to the digital cable carriers would be
        well suited to address user issues. On the ingredients screen, I prioritized the reading experience by reducing text and using icons
        for easier readability.
      </p>
    </article>

    <Paper className="mh5-l mh0 mb5">
      <Card>
        <img alt="paper-wireframe" src={PaperWireframe} />
      </Card>
    </Paper>
    <Divider />
  </div>
);

export default KyattoWireframe;
