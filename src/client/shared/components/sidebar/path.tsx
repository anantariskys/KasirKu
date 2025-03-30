import { LuLayoutDashboard, LuShoppingCart, LuPackage, LuUsers, LuClipboardList, LuBarcode, LuStore } from "react-icons/lu";
export const menuItems = [
    {
      href: "/",
      icon: <LuLayoutDashboard className="w-5 h-5" />,
      label: "Dashboard"
    },
    {
      href: "/transactions",
      icon: <LuShoppingCart className="w-5 h-5" />,
      label: "Transaksi",
      subItems: [
        {
          href: "/transactions/add",
          label: "Tambah Transaksi"
        },
        {
          href: "/transactions/history",
          label: "Riwayat Transaksi" 
        },
        {
          href: "/transactions/process",
          label: "Proses Transaksi"
        }
      ]
    },
    {
      href: "/stores",
      icon: <LuStore className="w-5 h-5" />,
      label: "Toko",
      subItems: [
        {
          href: "/stores/add",
          label: "Tambah Toko"
        },
        {
          href: "/stores/my-store",
          label: "Tokoku"
        }
      ]
    },
    {
      href: "/products",
      icon: <LuPackage className="w-5 h-5" />,
      label: "Produk"
    },
    {
      href: "/customers", 
      icon: <LuUsers className="w-5 h-5" />,
      label: "Pelanggan"
    },
    {
      href: "/reports",
      icon: <LuBarcode className="w-5 h-5" />,
      label: "Laporan"
    },
    {
      href: "/inventory",
      icon: <LuClipboardList className="w-5 h-5" />,
      label: "Inventori"
    }
  ];