export default function Navbar() {
  return (
    <nav className="w-full fixed flex items-center justify-between bg-red-800/40 top-0 backdrop-blur-[8px] backdrop-filter px-[2rem] py-[1.5rem] z-10">
      <img
        src="/logo_coffe.svg"
        className="bg-secondary/20 p-1 rounded-md"
      ></img>
      <div className="flex items-center justify-center space-x-[1rem]">
        <button className="px-[1.5rem] py-2 bg-blue-700 rounded-lg text-white font-bold hover:bg-blue-800">
          SignIn
        </button>
        <button className="text-blue-700 rounded-lg border-2 border-blue-700 px-[1.25rem] py-[6px] font-bold hover:bg-blue-800 hover:text-white hover:border-blue-700/80">
          Signup
        </button>
        
      </div>
    </nav>
  );
}
