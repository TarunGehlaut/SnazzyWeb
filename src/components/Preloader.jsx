import logo from "../assets/logo-web.png";

const Preloader = () => {
  return (
    <div className="fixed inset-0 z-[200] grid    place-content-center bg-white ">
      <div className="h-[60px] w-[180px] animate-customBounce">
        <img src={logo} alt="logo" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default Preloader;
