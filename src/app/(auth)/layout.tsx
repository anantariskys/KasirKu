export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen   bg-background-light">
      <main className="w-full container h-screen flex flex-col-reverse md:flex-row items-center p-4 md:p-8 justify-between">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 flex flex-col justify-center items-center">
          {children}
        </div>
        <div className="h-[200px] md:h-full bg-primary-500 w-full md:w-1/2 rounded-2xl p-8 flex flex-col justify-center items-center text-foreground-dark">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Selamat Datang di KasirKu
          </h1>
          <p className=" text-center max-w-lg">
            Solusi point of sale modern untuk memudahkan pengelolaan transaksi
            penjualan, inventori, dan pelaporan keuangan bisnis Anda
          </p>
        </div>
      </main>
    </div>
  );
}
