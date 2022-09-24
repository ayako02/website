import { Children } from 'react';

import { Grid } from '@mui/material';

import { ArcoCard } from 'components/common';
import { ACCESIBILITIES } from 'settings/constants/kyatto-project';

const KyattoAccesibility = () => (
  <>
    <h2 className="ttu tracked dark-blue tc">Accessibility considerations</h2>

    <Grid container spacing={2} className="items-start pv4">
      {Children.toArray(
        ACCESIBILITIES.map(item => {
          const { title, description } = item;
          return (
            <Grid item xs={12} md={4} className="flex items-center justify-center helvetica">
              <ArcoCard title={title} description={description} />
            </Grid>
          );
        })
      )}
    </Grid>
  </>
);

export default KyattoAccesibility;
