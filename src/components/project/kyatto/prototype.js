import { Children } from 'react';

import { Paper } from '@mui/material';
import { Card, Divider } from '@arco-design/web-react';

import { LOFI_PROTOTYPES, HIFI_PROTOTYPES } from 'settings/constants/kyatto-project';

const KyattoPrototype = () => (
  <div className="mv4">
    <h2 className="ttu tracked dark-blue tc pb3">Prototypes</h2>

    <article className="flex items-center justify-center">
      <p className="w-60-l w-90 paragraph lh-copy f5 mid-gray pb4">
        The lo-fi prototype connected the entire user flow to be used in a usability study with users.{' '}
      </p>
    </article>

    {Children.toArray(
      LOFI_PROTOTYPES.map(item => {
        const { label, img } = item;
        return (
          <div className="flex flex-column items-center mb4">
            <h1 className="f6 ttu tracked">{label}</h1>
            <Paper className="mh5-l mh0">
              <Card>
                <img alt={label} src={img} />
              </Card>
            </Paper>
          </div>
        );
      })
    )}

    <article className="flex items-center justify-center">
      <p className="w-60-l w-90 paragraph lh-copy f5 mid-gray pb4">
        The final hi-fi prototype presented a uniform user flow for the application. It also met the user needs to have a richer function
        like zoom and download images, a clean and simple user interface.
      </p>
    </article>

    {Children.toArray(
      HIFI_PROTOTYPES.map(item => {
        const { label, img } = item;
        return (
          <div className="flex flex-column items-center mb4">
            <h1 className="f6 ttu tracked">{label}</h1>
            <Paper className="mh5-l mh0">
              <Card>
                <img alt={label} src={img} />
              </Card>
            </Paper>
          </div>
        );
      })
    )}

    <Divider />
  </div>
);

export default KyattoPrototype;
