import TabelaEstoque from '../_components/tabelaEstoque';
import Logout from '../_components/logout';
import NavbarProducts from '../_components/navbarProducts';

export default function Home() {
    return (
      <div>
        <Logout />
        <NavbarProducts />
        <TabelaEstoque />
      </div>
    );
  }
