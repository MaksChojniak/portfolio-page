import { Link } from 'react-router';
// import { Link } from 'react-router';
import './style/Error.css';

const Error = () => {
  return (
    <> 
    <div className='error-content'>
        <div className='error-title'>
            Page not found
        </div>
        <div className='error-text'>
            The page you are looking for doesn't exist or is not ready yet. I am still uploading it. Sorry for problems
        </div>
        <Link to="/"><div className='error-button-back'>Back to Home</div></Link>
    </div>
    </>
  );
};

export default Error;