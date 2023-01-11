import Nav from "../../components/Nav";
import Search from "../../components/Search";
import Pagefooter from "../../sections/Pagefooter";

function index() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Nav />
      <Search />
      <Pagefooter />
    </div>
  );
}

export default index;
