import { Page, Navbar, Block, BlockTitle } from "konsta/react";

import WebApp from "@twa-dev/sdk";

function Liquidity() {
  WebApp.MainButton.show();
  WebApp.MainButton.setText("Add Liquidty");
  WebApp.MainButton.onClick(() => {
    console.log("Add Liquidty");
  });

  return (
    <Page>
      <Navbar title="Liquidity" />
      <BlockTitle>Liquidity Management</BlockTitle>
      <Block strong>
        <p>Here you can manage your liquidity...</p>
      </Block>
    </Page>
  );
}

export default Liquidity;
