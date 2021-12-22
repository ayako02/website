import { Children } from 'react';
import PropTypes from 'prop-types';

import { Divider } from '@arco-design/web-react';
import { Avatar, Card, Grid, Paper } from '@mui/material';

import PaperWireframe from 'assets/images/kyatto-wireframe-paper.png';

import { ICON_LABELS, USERS, ACCESIBILITIES, RESPONSIBILITIES, LOFI_PROTOTYPES, HIFI_PROTOTYPES } from 'settings/constants/kyatto-project';

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

      <div className="mv4">
        <h2 className="ttu tracked dark-blue">Project Overview</h2>

        <Grid container spacing={3} className="mt4">
          <Grid item xs={12} md={8}>
            <div>
              <h3 className="tracked">Introduction</h3>
              <p className="w-90-l w-100 normal f5 mid-gray">
                This is an ingredients preview app for an organic cat food brand. It enables user to read and search the related cat food
                product information within the app.
                <br />
                <br />
                <i> Note: This is not an e-commerce app.</i>
              </p>
            </div>
            <div>
              <h3 className="tracked">Challenge</h3>
              <p className="w-90-l w-100 normal f5 mid-gray">
                Cat owners has difficulties when looking for a reliable cat food product and lacking of confidence when buying pet food
                because they are not sure what exactly does the pet food contains.
              </p>
            </div>

            <div>
              <h3 className="tracked">Goal</h3>
              <p className="w-90-l w-100 normal f5 mid-gray">
                Design an app that consists of a ingredients preview screen that lists down all the ingredients details of a pet food
                product, including recommendations from specialists.
              </p>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <h3 className="tracked">Responsibilities</h3>
            <>{Children.toArray(RESPONSIBILITIES.map(string => <li className="normal f5 mid-gray">{string}</li>))}</>
          </Grid>
        </Grid>
        <Divider />
      </div>

      <>
        <h2 className="ttu tracked dark-blue pb3">User Research</h2>

        <p className=" w-60-l w-90 paragraph helvetica pb4">
          I conducted interviews and created empathy maps to understand the users I’m designing for and their needs. A primary user group
          identified through research was working adults who were concerning on the quality & origins of ingredients that contains inside a
          pet food product. This user group revealed their pain points through the research. They were facing issues such as doubts on the
          brand, roadblocks when research & gather information before purchase a product, the risk of their cat getting side effects &
          health impact after intake, and so on.
        </p>

        <Grid container spacing={3} className="mt4 mb4">
          {Children.toArray(
            USERS.map(user => {
              const { name, age, job, img, description } = user;
              return (
                <Grid item xs={12} md={6}>
                  <Paper>
                    <article className="center bg-white br3 pa3 pa4-ns ba b--black-10">
                      <div className="flex flex-row items-center">
                        <div className="flex flex-column items-center">
                          <Avatar src={img} className="dib" sx={{ width: '8rem', height: '8rem' }} />
                          <h1 className="f4 helvetica mb0">{name}</h1>
                        </div>

                        <div className="flex flex-column items-center ml4">
                          <div className="flex flex-row items-center w-100">
                            <div className="flex flex-row items-center w-100">
                              <h3>Age:</h3>
                              <span className="ml2 f5 mid-gray">{age}</span>
                            </div>
                            <div className="flex flex-row items-center">
                              <h3>Job:</h3>
                              <span className="ml2 f5 mid-gray">{job}</span>
                            </div>
                          </div>
                          <p className="lh-copy measure center paragraph helvetica">{description}</p>
                        </div>
                      </div>
                    </article>
                  </Paper>
                </Grid>
              );
            })
          )}
        </Grid>
        <Divider />
      </>

      <div className="mv4">
        <h2 className="ttu tracked dark-blue">Wireframes</h2>

        <p className=" w-60-l w-90 paragraph helvetica pb4">
          Draft and iterates the flow of the main screen of the app on paper ensured that the elements that made it to digital wireframes
          would be well-suited to address user pain points. In the ingredients reading screen, I prioritized the reading experience by
          reducing text & using icons ensures user can understand the information easily.
        </p>

        <Paper className="mh5-l mh0 mb5">
          <Card>
            <img alt="paper-wireframe" src={PaperWireframe} />
          </Card>
        </Paper>
        <Divider />
      </div>

      <div className="mv4">
        <h2 className="ttu tracked dark-blue">Prototypes</h2>

        <p className="w-60-l w-90 paragraph helvetica pb4">
          The lo-fi prototype connected the whole user flow in the app, so the prototype could be used in a usability study with users.
        </p>

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
        <div className="mh5-l mh0">
          <Divider />
        </div>

        <p className="w-60-l w-90 paragraph helvetica pv4">
          The final hi-fi prototype presented a consistent user flow for this ingredients preview app. It also fulfilled the user needs of
          having a richer function such as zoom & download image, clean & simple user interface.
        </p>

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

      <div className="mv4">
        <h2 className="ttu tracked dark-blue">Accessibility considerations</h2>

        <Grid container spacing={2} className="items-start pv4">
          {Children.toArray(
            ACCESIBILITIES.map(item => {
              const { title: cardTitle, description } = item;
              return (
                <Grid item xs={12} md={4} className="flex items-center justify-center helvetica">
                  <article className="center mw5 mw6-ns br3 hidden ba b--black-10 shadow-4" style={{ minHeight: '224px' }}>
                    <h1 className="f6 ttu tracked bg-near-white br3 br--top black-60 mv0 pv2 ph3">{cardTitle}</h1>
                    <div className="pa3 bt b--black-10">
                      <p className="f6 f5-ns paragraph lh-copy measure">{description}</p>
                    </div>
                  </article>
                </Grid>
              );
            })
          )}
        </Grid>
        <Divider>
          <span className="ttu tracked helvetica f6 fw5">the end</span>
        </Divider>
      </div>
    </div>
  </div>
);

ProjectKyatto.propTypes = { title: PropTypes.string.isRequired, banner: PropTypes.node.isRequired };

export default ProjectKyatto;
