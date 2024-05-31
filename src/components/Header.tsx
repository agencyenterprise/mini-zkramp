import { TonConnectButton } from "@tonconnect/ui-react";
import { Navbar } from "konsta/react";
import Logo from "./Logo";

function Header() {
  return (
    <Navbar
      className="mt-2 pb-2"
      left={<Logo className="pl-1 logo-fill" />}
      right={<TonConnectButton />}
    />
  );
}

export default Header;
