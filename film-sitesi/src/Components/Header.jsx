import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header flex justify-between bg-blue-950 text-white mx-0 w-full h-12 text-center py-3 px-36 mb-5  ">
        <Link to={"/watchlist"} className="izlenecek ">
          İzlenecekler
        </Link>
        <Link to={"/"}>Ana Sayfa</Link>

        <div className="rightcontent flex justify-between gap-5 ">
          <Link to={"/watched"}>İzlenenler</Link>
          <Link to={"/add"} className="h-8 w-8  bg-blue-400 rounded-lg flex justify-center items-center hover:bg-green-500">
            <i className="fas fa-plus" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
