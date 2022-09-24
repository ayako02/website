import { Children } from 'react';

import { Paper } from '@mui/material';
import { Avatar, Divider } from '@arco-design/web-react';

import { USERS } from 'settings/constants/kyatto-project';

const KyattoResearch = () => (
  <>
    <h2 className="ttu tracked dark-blue pb3 tc">User Research</h2>

    <article className="flex items-center justify-center">
      <p className="w-60-l w-90 paragraph lh-copy f5 mid-gray pb4">
        I conducted interviews and created empathy cards to understand which users I design for and their needs. A primary user group
        identified by the research was working adults who were concerned about the quality and origin of ingredients that contain inside a
        pet food product.
      </p>
    </article>

    <div className="flex flex-column items-center justify-center">
      {Children.toArray(
        USERS.map(user => {
          const { name, age, img, description } = user;
          return (
            <Paper className="mb4">
              <div className="mw6-l mw-7-m mw-8 center bg-white br3 pa3 pa4-ns ba b--black-10">
                <div className="flex flex-row items-center">
                  <div className="flex flex-column items-center">
                    <Avatar size={64} className="dib">
                      <img alt="avatar" src={img} className="avatar" />
                    </Avatar>
                    <h1 className="f5 helvetica mb0 dark-gray">{name}</h1>
                    <span className="fw6 f6 helvetica gray ">{age}</span>
                  </div>
                  <h3 className="ml4 f5 dark-blue helvetica">{description}</h3>
                </div>
              </div>
            </Paper>
          );
        })
      )}
    </div>

    <Divider />
  </>
);

export default KyattoResearch;
