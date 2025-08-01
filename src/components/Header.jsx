import {Link} from 'react-router'

const Header = () => {
  return (
    <div className="flex justify-between p-5 bg-amber-300">
      <div>Logo</div>
      <div className="flex gap-7">
        <Link to="/">Home🏡</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact us📞</Link>
        <Link to="/cart">Cart🛒</Link>
      </div>
    </div>
  );
};

export default Header;
