import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/client/shared/hooks/useQueryClient";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "KasirKu",
    template: "KasirKu | %s",
  },
  description:
    "KasirKu adalah aplikasi point of sale (POS) yang memudahkan pengelolaan transaksi penjualan, inventori, dan pelaporan keuangan untuk bisnis Anda. Dengan antarmuka yang intuitif dan fitur lengkap, KasirKu membantu mengoptimalkan operasional kasir dan memberikan pengalaman bertransaksi yang lebih baik.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
