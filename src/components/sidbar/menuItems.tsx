import Link from "next/link";

interface Menu {
  id: number;
  href: string;
  title: string;
}

const MenuItems: React.FC = () => {
  const menuList: Menu[] = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/users", title: "Users" },
    { id: 3, href: "/about", title: "About" },
    { id: 4, href: "/clienTest", title: "Clien Test" },
  ];

  return (
    <div className="flex flex-row md:flex-col justify-between md:justify-center gap-4">
      {menuList.map((item) => {
        return (
          <div key={item.id} className="flex-1 md:w-full">
            <Link href={item.href}>
              <div className="flex justify-center rounded-md p-1 bg-[#1d2125] hover:bg-[#0f1316] text-sm">
                {item.title}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default MenuItems;
