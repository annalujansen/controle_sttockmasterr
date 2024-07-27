import TabelaEstoque from '../_components/tabelaEstoque';
import Logout from '../_components/logout';

export default function Home() {
  return (
    <div>
      <Logout/>
      <TabelaEstoque />
    </div>
  );
}
