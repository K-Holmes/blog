//class info for barbarians

//class info for rogues

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import logo from './Sigils/BarbarianSigil.jpeg';


  const sidebar = {
    title: 'What are they?',
    description:
      'The Silenced Wolves are a guild of tight-knit members (whether they admit it or not) based entirely on the fictional world I have set up.',
    archives: [
      { title: 'About Us', url: '/about' },
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
              <h2 className='centerHeading'>Barbarians</h2>
              <h3>About Them</h3>
              <p>
                The strongest class of all! Barbarians need to be strong and capable, most 
                being able to at least lift a carriage.
              </p>
              <h3>How to be an offical Barbarian</h3>
              <p>
                Becoming an official Barbarian is one of the easiest processes to do. There
                isn't any licensing specific to their class as all they have to do is pass
                a simple strentgh test upon registry. Should they fail the test then they
                do not register as a Barbarian.
                
              </p>
              <h3>Random Stats and Facts</h3>
              <p>
                <ul>
                    <li>Fregni is a Barbarian</li>
                    <li>A class demanding of sheer strength, most are descendent of orcs</li>
                    <li>High tier Barbarians have a Rage skill, which sends them in a fury,
                        but also does twice as much damage for 30 seconds
                    </li>
                    <li>75% of Barbarians have a high school level education
                    </li>
                    <li>Barbarians are great at moving furniture
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