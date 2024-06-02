import { TonConnectButton } from "@tonconnect/ui-react";
import { Navbar } from "konsta/react";
import Logo from "./Logo";

function Header() {
  return (
    <Navbar
      className="h-[60px]"
      innerClassName="h-full py-2"
      translucent={false}
      left={<Logo className="pl-1 logo-fill" />}
      right={<TonConnectButton />}
    />
  );
}

export default Header;
