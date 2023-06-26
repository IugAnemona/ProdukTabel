import { useState } from "react";
import logo from "./Logo.png";
import { FiMenu, FiX } from "react-icons/fi";

export function Header() {
  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active);
  };

  return (
    <header>
      <div className="text-slate-100 bg-powderblue border-b border-slate-300 w-full px-3 py-2">
        <div className="container flex items-center mx-auto">
          <div>
            <a
              href="https://github.com/IugAnemona/ProdukTabel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className=" w-32" src={logo} alt="" />
            </a>
          </div>
          <div className="flex-1 items-end  font-bold md:flex">
            <nav className="flex-1 md:static ">
              <ul
                className={
                  active
                    ? "md:z-auto absolute top-16 left-0 bg-powderblue w-full md:flex md:justify-end md:static transition-all ease-in duration-500"
                    : "md:z-auto top-[-200px] md:opacity-100 opacity-0 bg-powderblue absolute w-full left-0 md:flex md:justify-end md:static transition-all ease-in duration-500"
                }
              >
                <li className="px-4 m-10 md:m-0">
                  <a
                    className="hover:text-slate-300 text-xl"
                    href="https://iugportfolio.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Sobre
                  </a>
                </li>
                <li className="px-4 m-10 md:m-0">
                  <a
                    className="hover:text-slate-300 text-xl"
                    href="https://github.com/IugAnemona?tab=repositories"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Projetos
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex justify-end flex-1 md:hidden text-3xl">
            <div onClick={ToggleMode}>{active ? <FiX /> : <FiMenu />}</div>
          </div>
        </div>
      </div>
    </header>
  );
}
