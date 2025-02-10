"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp, Menu, X } from 'lucide-react';

export default function Router() {
    const [isOpen, setIsOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <nav className="w-full h-auto bg-yellow-950 text-white flex items-center justify-center lg:text-lg relative">
            {/* Menu para telas maiores */}
            <ul className="hidden lg:flex w-full justify-center lg:w-3/4"> 
                <li className="w-full h-full cursor-pointer border-r-2 border-l-2 border-orange-500 py-4 flex items-center justify-center lg:w-48 hover:bg-orange-500">
                    <Link href="/">Home</Link>
                </li>
                <li className="w-full h-full cursor-pointer border-r-2 border-orange-500 py-4 flex items-center justify-center lg:w-48 hover:bg-orange-500">
                    <Link href="/aboutUs">Sobre</Link>
                </li>
                <li 
                    className="relative flex w-full cursor-pointer border-r-2 border-orange-500 h-full gap-2 py-4 items-center justify-center lg:w-48 hover:bg-orange-500"
                    onMouseEnter={() => setSubmenuOpen(true)}
                    onMouseLeave={() => setSubmenuOpen(false)}
                >
                    <h1 className="text-center">Serviços</h1>
                    {submenuOpen ? <ChevronUp className="w-4 h-4"/> : <ChevronDown className="w-4 h-4"/>}

                    {/* Submenu */}
                    {submenuOpen && (
                        <ul className="absolute left-1/2 -translate-x-1/2 top-full w-48 bg-yellow-950 shadow-lg rounded-lg text-center">
                            <li className="px-4 py-4 cursor-pointer hover:bg-orange-500">
                                <Link href="/services/building">Elétrica Predial</Link>
                            </li>
                            <li className="px-4 py-4 cursor-pointer hover:bg-orange-500">
                                <Link href="/services/industrial">Elétrica Industrial</Link>
                            </li>
                        </ul>
                    )}
                </li>
                <li className="w-full h-full cursor-pointer border-r-2 border-orange-500 py-4 flex items-center justify-center lg:w-48 hover:bg-orange-500">
                    <Link href="/projects">Projetos</Link>
                </li>
                <li className="w-full h-full cursor-pointer border-r-2 border-orange-500 py-4 flex items-center justify-center lg:w-48 hover:bg-orange-500">
                    <Link href="/contact">Contato</Link>
                </li>
            </ul>

            {/* Menu Sanduíche para telas menores */}
            <div className="lg:hidden flex items-center justify-center w-full">
                <button 
                    className="text-white p-4 focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Overlay do menu mobile */}
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-yellow-950 flex flex-col items-center justify-center text-white z-50">
                    <button 
                        className="absolute top-6 right-6 text-white text-3xl"
                        onClick={() => setIsOpen(false)}
                    >
                        <X size={40} />
                    </button>

                    <ul className="flex flex-col items-center space-y-6 text-2xl">
                        <li>
                            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li>
                            <Link href="/aboutUs" onClick={() => setIsOpen(false)}>Sobre</Link>
                        </li>
                        <li>
                            <button 
                                className="w-40 flex items-center justify-center text-center gap-2"
                                onClick={() => setSubmenuOpen(!submenuOpen)}
                            >
                                Serviços {submenuOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                            </button>
                            {submenuOpen && (
                                <ul className="flex flex-col items-center space-y-4 mt-2">
                                    <li>
                                        <Link href="/services/building" onClick={() => setIsOpen(false)}>Elétrica Predial</Link>
                                    </li>
                                    <li>
                                        <Link href="/services/industrial" onClick={() => setIsOpen(false)}>Elétrica Industrial</Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <Link href="/projects" onClick={() => setIsOpen(false)}>Projetos</Link>
                        </li>
                        <li>
                            <Link href="/contact" onClick={() => setIsOpen(false)}>Contato</Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
