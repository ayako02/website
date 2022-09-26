import { Children } from 'react';

import { Paper, Grid } from '@mui/material';

import { THEMES } from 'settings/constants/theme';

const ThemeContent = () => (
  <div className="w-80 center helvetica">
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      {Children.toArray(
        THEMES.map(theme => {
          const { name, link, logo } = theme;
          return (
            <Grid item xs={12} md={6}>
              <Paper className="grow mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                <a className="link" href={link} target="_blank" rel="noreferrer">
                  <article className="tc">
                    <img alt={name} src={logo} className="br-100 h4 w4 dib ba b--black-05 pa2" />
                    <h1 className="f5 mb2 dark-gray ttu tracked">{name}</h1>
                  </article>
                </a>
              </Paper>
            </Grid>
          );
        })
      )}
    </Grid>
  </div>
);

export default ThemeContent;
