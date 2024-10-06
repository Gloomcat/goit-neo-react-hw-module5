import css from './NotFoundPage.module.css';

import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <p>
        The page does not exist.
        <Link to="/" className={css['home-link']}>
          Return to Home.
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
