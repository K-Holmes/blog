//class info for mages

import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../../Sidebar';
import Footer from '../../Footer';
import logo from './Sigils/MageSigil.jpeg';


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
              <h2 className='centerHeading'>Mages</h2>
              <h3>About Them</h3>
              <p>
                One of the classes that require an affinity, mages are adventurers
                that are skilled in magic. Due to the fact that magic affinity ain't
                available to all kinds of adventurers, most members of this class are
                elves or have some kind of elven descent. 
              </p>
              <h3>How to be an offical Mage</h3>
              <p>
                To become an official Mage, one must have an affinity towards it. There 
                are multiple kinds of mages that specialize in different aspects of magic. Each
                mage no matter their skill or affinity level use some kind of medium to properly
                use their magic. Most of the time this medium takes the form of a Mage Stone, typically
                connected to the front end of a staff.
                
              </p>
              <h3>Random Stats and Facts</h3>
              <p>
                <ul>
                    <li>Zilyanna is a Mage</li>
                    <li>Most mages don't associate with guilds, tending to their studies instead</li>
                    <li>Mages are among the most requested class in guilds
                    </li>
                    <li>70% of mages are skilled in healing magic
                    </li>
                    <li>Mage stones come in all shapes and sizes, and their color affects their skill
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