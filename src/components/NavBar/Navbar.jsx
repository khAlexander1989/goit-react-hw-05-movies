import { Link } from './Navbar.styled';
import { Navigation } from './Navbar.styled';

export default function Navbar() {
  return (
    <Navigation>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/movies">Movies</Link>
    </Navigation>
  );
}
