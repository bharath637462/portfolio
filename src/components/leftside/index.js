import './index.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

function leftside() {
  return (
    <div className='left'>
        <div className='name'>Bharath Kumar</div>
        <div className='role'>Python Developer</div>
        <div className='about'>I build pixel-perfect, engaging, and <br />
        accessible digital experiences.</div>
        <div className='lists'>
            <div className='lis'>
              <span className='line'></span>
              <span>About</span>
            </div>
            <div className='lis'>
              <span className='line'></span>
              <span>experiences</span>
            </div>
            <div className='lis'>
              <span className='line'></span>
              <span>Projects</span>
            </div>
        </div>
        <div className='icons'>
          <GitHubIcon fontSize="medium" />
          <LinkedInIcon fontSize='medium' />
          <InstagramIcon fontSize='medium' />
          <XIcon fontSize='medium' />
        </div>
    </div>
  );
}

export default leftside;
