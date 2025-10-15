import { Link } from "react-router-dom";

interface NavType {
  name: string;
  url: string;
}

const Navigation = () => {
  const navigation: NavType[] = [
    { name: "Home", url: "/" },
    { name: "About", url: "/About" },
    { name: "Contact", url: "/ContactPage" },
  ];

  return (
    <nav className="flex items-center space-x-2">
      {navigation.map((item, index) => {
        const gradients = [
          'from-purple-500 to-pink-500',
          'from-cyan-500 to-blue-500',
          'from-green-500 to-emerald-500'
        ];
        const hoverGradients = [
          'hover:from-purple-600 hover:to-pink-600',
          'hover:from-cyan-600 hover:to-blue-600',
          'hover:from-green-600 hover:to-emerald-600'
        ];
        
        return (
          <Link
            key={item.url}
            to={item.url}
            className={`relative px-6 py-2.5 rounded-full font-semibold text-white bg-gradient-to-r ${gradients[index]} ${hoverGradients[index]} transform hover:scale-105 transition duration-300 shadow-lg hover:shadow-xl`}
          >
            <span className="relative z-10">{item.name}</span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 hover:opacity-20 transition duration-300"></div>
          </Link>
        );
      })}
    </nav>
  );
};
export default Navigation