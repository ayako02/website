import { Children } from 'react';

import { Grid } from '@mui/material';
import { Divider, List } from '@arco-design/web-react';

import { OVERVIEWS, RESPONSIBILITIES } from 'settings/constants/kyatto-project';

const KyattoOverview = () => (
  <div className="mv4">
    <h2 className="ttu tracked dark-blue tc">Project Overview</h2>

    <Grid container spacing={3} className="mt">
      <Grid item xs={12} md={6}>
        {Children.toArray(
          OVERVIEWS.map(item => {
            const { title, description } = item;
            return (
              <article>
                <h1 className="f4">{title}</h1>
                <p className="paragraph measure lh-copy f5 mid-gray">{description}</p>
              </article>
            );
          })
        )}
      </Grid>

      <Grid item xs={12} md={6}>
        <h1 className="f4">Responsibilities</h1>

        <div className="w-80-l w-90-m w-100">
          <List
            size="default"
            dataSource={RESPONSIBILITIES}
            render={(item, index) => (
              <List.Item key={index} className="f5 paragraph mid-gray">
                {item}
              </List.Item>
            )}
          />
        </div>
      </Grid>
    </Grid>
    <Divider />
  </div>
);

export default KyattoOverview;
