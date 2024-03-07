import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';

const Header = () => {
  return (
    <header className="sm:px flex items-center  justify-around border-b border-stone-200 bg-yellow-400 px-4 py-3 font-sans uppercase sm:px-6 ">
      <Link to={'/'} className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />

      <Username />
    </header>
  );
};

export default Header;
