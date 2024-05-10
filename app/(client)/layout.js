import { CartProvider } from "../../contexts/CartContext";

import "./globals.css";
import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer"
import CTA from "../../components/cta"


export const metadata = {
  title: "Johaness",
  description: "Johaness Foods",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
        <CartProvider>
          <Navbar />
          <div className="pt-[150px]">

          {children}
          </div>
          <CTA />
          <Footer />
        </CartProvider>
        </body>
      </html>
  );
}
