import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import { getAPiLimitCount } from "@/lib/api-limit";

const Navbar = async () => {
  const apiLimitCount = await getAPiLimitCount();

  return (
    <div className="flex items-center p-4">
      {/* <MobileSidebar apiLimitCount={apiLimitCount} /> */}
      <MobileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
