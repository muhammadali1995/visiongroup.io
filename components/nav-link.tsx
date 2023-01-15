import Link from "next/link";

const NavLink = ({ route, linkName, isDarkMode }: any) => {
  return (
    <Link
      href={route}
      className={
        "p-4 cursor-pointer border-b-2 -mb-1 hover:border-b-2 " +
        (isDarkMode
          ? "hover:border-white border-b-gray-450"
          : "border-white hover:border-b-gray-450")
      }
    >
      {linkName}
    </Link>
  );
};

export default NavLink;
