//class info for knights

//basic template wireframe that all pages will use

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import logo from './Sigils/KnightSigil.jpeg';


  const sidebar = {
    title: 'What are they?',
    description:
      'The Silenced Wolves are a guild of tight-knit members (whether they admit it or not) based entirely on the fictional world I have set up.',
    archives: [
      { title: 'About Us', url: '#' },
      { title: 'Qualifications and Achievements', url: '#' },
      { title: 'Important Persons', url: '#' },
      { title: 'Kingdoms and Territories', url: '#' },
      { title: 'Quest Board', url: '#' },
      { title: 'Guild Games Status', url: '#' },
      { title: 'Members Update', url: '#' },
      { title: 'Founders Date', url: '#' },
    ],
    social: [
      { name: 'Instagram', icon: InstagramIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };

  const theme = createTheme();

export default function TemplatePage() {
    return (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Container maxWidth="lg">
            <main>
            <div className="gridTemplate">
              <div>
              <h2 className='centerHeading'>Knights</h2>
              <h3>About Them</h3>
              <p>
                Knights are front line fighters that can choose from numerous career pathways
                upon knighting. Most join the Royal Militia due to the stability and overall
                safety of the job. However some can become freelance bodyguards but most non-militia
                members join adventuring guilds.
              </p>
              <h3>How to be an offical Knight</h3>
              <p>
                To become an official Knight, one must pass the criteria established in
                their kingdom's official Knights Academy. Typically, all must graduate
                said Academy and obtain a Knight's license signed by the Academy's Headmaster.
                From there, there is an optional Knighting Ceremony where graduates are 
                celebrated for their successes in front of an audience.
              </p>
              <h3>Random Stats and Facts</h3>
              <p>
                <ul>
                    <li>Both Bella and Adamant are official Knights</li>
                    <li>85% of all official Knights make up the Royal Militia</li>
                    <li>Knights make up 7% of all adventurers, making them one of the
                        most underrepresented class in guilds
                    </li>
                    <li>Knights Academies prioritize battle strats and physical
                        strength
                    </li>
                    <li>Due to not needing any affinities, Knights are the most
                        diverse group of class members
                    </li>
                </ul>
              </p>
              </div>
              <div>
                <img src= {logo} alt= "logo" width="300" height="300"/>
                <Sidebar
                  title={sidebar.title}
                  description={sidebar.description}
                  archives={sidebar.archives}
                  social={sidebar.social}
                />
                </div>
              </div>
            </main>
          </Container>
          <Footer
            //title="Footer"
            //description="Something here to give the footer a purpose!"
          />
        </ThemeProvider>
      );
    }