import { Header } from "@/components/template/header";
import { Footer } from "@/components/template/footer";
import "./globals.css";
import Router from "@/components/router";


import type { Metadata } from 'next'

export const metadata: Metadata = {
 title: 'RMB Soluções',
 description: 'Soluções Elétricas Predial e Industrial',
 icons:"Logo.ico"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`antialiased`}
      >
        <Header/>
        <Router/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
