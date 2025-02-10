import { FacebookIcon, InstagramIcon } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full h-auto flex flex-col items-center justify-center bg-yellow-950 md:h-80">
      <div className='w-full h-auto flex flex-col items-center bg-yellow-950 md:flex-row md:h-64 md:justify-evenly'>
        <div className="w-48 h-40 flex flex-col items-center justify-center md:w-32 lg:w-48 gap-2">
          <img className='w-[150px] lg:w-[220px] lg:h-[220px]' src="/Logo.png" alt="" />
          <h1 className='text-white text-justify md:text-sm lg:text-base'>Elétrica Predial e Industrial Santa Rosa e Região</h1>
        </div>
        <div className="w-48 h-40 flex flex-col gap-2 py-5 md:w-32 lg:w-48 md:py-0">
          <h1 className='text-white text-xl border-b-2 border-orange-500'>Links</h1>
          <div className='h-32 flex flex-col'>
            <p className='text-white text-base lg:text-lg'><a href="/" className="w-full h-full hover:text-orange-500 hover:cursor-pointer">Home</a></p>
            <p className='text-white text-base lg:text-lg'><a href="/aboutUs" className="w-full h-full hover:text-orange-500 hover:cursor-pointer">Sobre</a></p>
            <p className='text-white text-base lg:text-lg'><a href="/services/building" className="w-full h-full hover:text-orange-500 hover:cursor-pointer">Elétrica Predial</a></p>
            <p className='text-white text-base lg:text-lg'><a href="/services/industrial" className="w-full h-fullhover:text-orange-500 hover:cursor-pointer">Elétrica Industrial</a></p>
            <p className='text-white text-base lg:text-lg'><a href="/projects" className="w-full h-full hover:text-orange-500 hover:cursor-pointer">Projetos</a></p>
          </div>
        </div>
        <div className="w-48 h-40 flex flex-col gap-2 py-10 md:w-32 lg:w-48 md:py-0">
          <h1 className='text-white text-xl border-b-2 border-orange-500'>Contatos</h1>
          <div className='flex gap-2 md:flex md:flex-col lg:flex-row'>
            <p className='text-white text-base lg:text-lg'>exemplo@gmail.com</p>
          </div>
          <div className='flex gap-2 md:flex md:flex-col lg:flex-row'>
            <p className='text-white lg:text-base lg:text-lg'>+55 55 12345 6789</p>
          </div>
        </div>
        <div className='w-48 h-40 flex flex-col gap-2 py-5 md:w-32 lg:w-48 md:py-0'>
          <h1 className='text-white text-xl border-b-2 border-orange-500'>Redes Sociais</h1>
          <div className='flex gap-2'>
            <a href=""><FacebookIcon className='text-white w-8 h-8 lg:w-9 lg:h-9 hover:text-orange-500 hover:cursor-pointer' /></a>
            <a href=""><InstagramIcon className='text-white w-8 h-8 lg:w-9 lg:h-9 hover:text-orange-500 hover:cursor-pointer' /></a>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <h1 className='text-white text-sm py-2 md:text-lg'>Copyright © 2025 – Todos os Direitos Reservados.</h1>
      </div>
    </footer>
  );
}