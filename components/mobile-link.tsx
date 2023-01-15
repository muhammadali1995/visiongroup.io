import Link from "next/link";

const MobileNavLink = ({ route, linkName }: any) => {
  return (
    <Link
      href={route}
      className="py-4 cursor-pointer border-b border-gray-300 w-full -mb-1"
    >
      {linkName}
    </Link>
  );
};

export default MobileNavLink;
