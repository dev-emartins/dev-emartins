import { FaHeart } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full md:py-2 p-5 flex justify-center items-center text-[10px]">
        <section className="w-full max-w-7xl flex flex-col justify-center items-center gap-0.5">
          <p className="w-full flex justify-center items-center gap-1.5">Desenvolvido com <FaHeart className="text-red-500 text-lg animate-pulse" /> por Everaldo Martins</p>
          <p className="w-full flex justify-center items-center">&copy; DEM &#174; - Dev Everaldo Martins - {`${new Date().getFullYear()}`}  - Todos os direitos reservados.</p>
        </section>
    </footer>
  );
}

export default Footer