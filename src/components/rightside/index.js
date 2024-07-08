import './index.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import Box from '../box';

function rightside() {
  return (
    <div className='right'>
        <div className='para'>
        Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an advertising agency, a start-up, a huge corporation, and a digital product studio
        </div>
        <div className='para'>
        My main focus these days is building accessible user interfaces for our customers at Klaviyo. I most enjoy building software in the sweet spot where design and engineering meet — things that look good but are also built well under the hood. In my free time, I've also released an online video course that covers everything you need to know to build a web app with the Spotify API.
        </div >
        <div className='para'>
        When I’m not at the computer, I’m usually rock climbing, reading, hanging out with my wife and two cats, or running around Hyrule searching for Korok seeds
        </div>
        <Box />

    </div>

  );
}

export default rightside;
