import { Facebook, Instagram } from 'lucide-react';

export function Header() {
    return (
        <header className='w-full h-[200px] bg-fundo bg-no-repeat bg-cover bg-bottom h-96 flex items-start justify-center md:h-[500px] lg:h-[800px]'>
            <div className='w-full h-16 bg-orange-500 roudend-lg flex items-center justify-evenly md:h-28'>
                <div>
                    <img className="w-[60px] h-[40px] md:w-[100px] md:h-[60px] lg:w-[120px] lg:h-[80px]" src="/Logo.png" alt="Logo da empresa" />
                </div>
                <div className='flex gap-6 py-6'>
                    <div className='group border border-white rounded-full text-white cursor-pointer hover:bg-yellow-950 hover:border-yellow-950 hover:text-orange-500 hover:transition duration-300'>
                        <Facebook className='mx-2 my-2 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8' />
                    </div>
                    <div className='group border border-white rounded-full text-white cursor-pointer hover:bg-yellow-950 hover:border-yellow-950 hover:text-orange-500 hover:transition duration-30'>
                        <Instagram className='mx-2 my-2 w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8' />
                    </div>
                </div>
            </div>
        </header>
    )
}