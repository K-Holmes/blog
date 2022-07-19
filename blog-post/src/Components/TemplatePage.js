import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';
import Footer from './Footer';
import logo from './SWLogo.png';

const sections = [
    { title: 'About', url: '#' },
    { title: 'Archer', url: '#' },
    { title: 'Barbarian', url: '#' },
    { title: 'Bard', url: '#' },
    { title: 'Druid', url: '#' },
    { title: 'Knight', url: '#' },
    { title: 'Mage', url: '#' },
    { title: 'Members', url: '#' },
    { title: 'Paladin', url: '#' },
    { title: 'Rogue', url: '#' },
  ];

  const sidebar = {
    title: 'About/AN',
    description:
      'The Silenced Wolves are a guild of tight-knit members (whether they admit it or not) based entirely on the fictional world I have set up.',
    archives: [
      //{ title: 'March 2020', url: '#' },
      //{ title: 'February 2020', url: '#' },
      //{ title: 'January 2020', url: '#' },
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
            <Header title="The Silenced Wolves" sections={sections} />
            <main>
              <Grid container spacing={4}>
              </Grid>
              <Grid container spacing={5} sx={{ mt: 3 }}>
              <h2>Page Title Here</h2>
                <Sidebar
                  title={sidebar.title}
                  description={sidebar.description}
                  archives={sidebar.archives}
                  social={sidebar.social}
                />
              </Grid>
            </main>
          </Container>
          <Footer
            //title="Footer"
            //description="Something here to give the footer a purpose!"
          />
        </ThemeProvider>
      );
    }