import { Children } from 'react';
import PropTypes from 'prop-types';

import { Grid } from '@mui/material';
import { Divider } from '@arco-design/web-react';

import { ICON_LABELS } from 'settings/constants/kyatto-project';

import KyattoOverview from './overview';
import KyattoResearch from './research';
import KyattoPrototype from './prototype';
import KyattoWireframe from './wireframe';
import KyattoAccesibility from './accesibility';

const ProjectKyatto = ({ title, banner }) => (
  <div className="content">
    <img alt={title} src={banner} />

    <div className="ph5">
      <>
        <Grid container spacing={2} className="content--list">
          {Children.toArray(
            ICON_LABELS.map(item => {
              const { icon, label } = item;
              return (
                <Grid item xs={12} md={4} className="flex items-center justify-center helvetica">
                  {icon}
                  <span className="f5">{label}</span>
                </Grid>
              );
            })
          )}
        </Grid>
        <Divider />
      </>

      <KyattoOverview />
      <KyattoResearch />
      <KyattoWireframe />
      <KyattoPrototype />

      <div className="mt4 mb6">
        <KyattoAccesibility />
        <Divider>
          <span className="ttu tracked helvetica f6 fw5">the end</span>
        </Divider>
      </div>
    </div>
  </div>
);

ProjectKyatto.propTypes = { title: PropTypes.string.isRequired, banner: PropTypes.node.isRequired };

export default ProjectKyatto;
