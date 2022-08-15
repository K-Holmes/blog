//class info for bards

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import logo from './Sigils/BardSigil.jpeg';


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
              <h2 className='centerHeading'>Bards</h2>
              <h3>About Them</h3>
              <p>
                Bards are another affinity class, being of music. With any instrument of
                their choice they are capable of swaying their listener to do many things,
                consciously or subconsciously. In order to use their "magic", they have to
                have gotten the attention of their target, which means Bards must also
                have a high charisma stat. Otherwise their music is useless, who'd give
                a low charisma the time of day?
              </p>
              <h3>How to be an offical Bard</h3>
              <p>
                To be an official Bard means to have gotten a Bards License. These are
                available at local adventurer hubs after a quick competence assessment 
                and even some music schools upon completion of their course. Being official 
                is required in order to register as an adventurer.
                
              </p>
              <h3>Random Stats and Facts</h3>
              <p>
                <ul>
                    <li>Ralph is a Bard</li>
                    <li>Bards are capable of doing their on healing spells</li>
                    <li>87% of Bards come from a line of Bards.
                    </li>
                    <li>Bards can be of any race/species
                    </li>
                    <li>Bards tend to be hired for odd jobs such as karaoke, gala performing,
                        and lulling unicorns to sleep
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