import Logo from "./Logo";
import Navigation from "./Nvigation";
import RegisterButton from "./RegisterButton";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 shadow-2xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <Navigation />
          <RegisterButton/>
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"></div>
    </header>
  );
};

export default Header
