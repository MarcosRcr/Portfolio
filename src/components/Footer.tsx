export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-black h-24 flex items-center justify-center text-white">
      <h4 className="text-center">Copyright © <span>{year}</span> - All rights reserved by<span className="ml-1">Marcos Cuellar</span></h4>
    </footer>
  )
}
