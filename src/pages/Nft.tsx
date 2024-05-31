import { Page, Navbar, Block, BlockTitle } from "konsta/react";

function NFT() {
  return (
    <Page>
      <Navbar title="NFT" />
      <BlockTitle>NFT Management</BlockTitle>
      <Block strong>
        <p>Here you can manage your NFTs...</p>
      </Block>
    </Page>
  );
}

export default NFT;
