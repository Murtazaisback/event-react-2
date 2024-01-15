import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import './index.css'
import { useRouter } from 'next/router';

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="HOC_container">
            <div className="w_effect"></div>
            <Header/>
                <main>{children}</main>
            <Footer/>
            
        </div>
    )
  }
  