"use client";

import { motion } from "framer-motion";
import Button from "@/client/shared/components/Button";

// Metadata needs to be in a separate layout.tsx file for client components
// export const metadata: Metadata = {
//   title: "404 - Halaman Tidak Ditemukan",
//   description: "Maaf, halaman yang Anda cari tidak dapat ditemukan.",
// };

export default function NotFound() {
  return (
    <div className="  bg-gray-100">
      <main className="flex min-h-screen items-center justify-center container">
        <div className="text-center px-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-9xl font-bold text-primary-500">404</h1>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Oops! Halaman Tidak Ditemukan
            </h2>
            <p className="text-gray-600 mb-8">
              Maaf, halaman yang Anda cari mungkin telah dipindahkan atau tidak
              ada.
            </p>

            <Button href="/" size="lg">
              Kembali ke Beranda
            </Button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
