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
import logo from './Sigils/RogueSigil.jpeg';


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
              <h2 className='centerHeading'>Rogues</h2>
              <h3>About Them</h3>
              <p>
                A class unrequiring of affinity, rogues can be anyone that has developed the skill
                'sleight-of-hand' (SOH). This essentially makes them a highly skilled thief should they choose to follow
                that path. Being a criminal styled class, there's no school or license pathway to hone 
                the skill. Instead, most rogues level up their SOH by either practice or magic buffs.
              </p>
              <h3>How to be an offical Rogue</h3>
              <p>
                Becoming an official Rogue is a simple process. All one has to do is sign up as one
                when signing up to become an adventurer. There is a quick optional test during registry 
                to test skill level and establish a ranking system among rogues. F-tier being the worst at 
                sleight-of-hand and S-tier being the best. While unnecessary, having a ranking can help
                apply to guilds as most would appreciate high tiered rogues.
                
              </p>
              <h3>Random Stats and Facts</h3>
              <p>
                <ul>
                    <li>Pierce is a Rogue</li>
                    <li>Rogues that rather not take the path of crime become street performers</li>
                    <li>Rogues populate guilds dedicated to looting
                    </li>
                    <li>Rogues can have other affinities, which add to their value
                    </li>
                    <li>67% of Rogues realize their skills before adulthood
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