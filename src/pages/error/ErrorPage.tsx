// import { useRouteError, Link } from 'react-router';
import { Link } from 'react-router';
import './style/ErrorPage.css';

const ErrorPage = () => {
//   const error = useRouteError();
  return (
    <> 
    <div className='content'>
        <div className='title'>
            Page not found
        </div>
        <div className='text'>
            The page you are looking for doesn't exist.
        </div>
        <Link to="/"><div className='button-back'>Back to Home</div></Link>
    </div>
    </>
  );
};

export default ErrorPage;