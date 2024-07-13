
export const Header = () => {
  return (
    <header className="flex items-center justify-center max-sm:flex-col max-sm:items-center max-sm:text-center">
      <img src="/avatartion.png" alt="" className=""/>
      <div className="flex flex-col justify-center mt-10 max-sm:justify-center max-sm:items-center">
        <p className="text-lg italic">Hi, I'm</p>
        <h1 className="text-4xl font-semibold">Marcos Cuellar</h1>
        <p className="w-96">I am a computer engineer. I currently live in CDMX, Mexico, and I am a web developer with skills in database management, web design, data analysis, and Python programming. My favorite technologies are TypeScript, React, Nest, PostgreSQL, and Python. Ready to network? 🫂</p>
        
      </div>
    </header>
  );
};

