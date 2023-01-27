import { Link } from 'react-router-dom';
const NotiesCategoryNav = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="sell">sell</Link>
        </li>
        <li>
          <Link to="lost-found">lost-found</Link>
        </li>
        <li>
          <Link to="for-free">for-free</Link>
        </li>
      </ul>
    </>
  );
};

export default NotiesCategoryNav;
