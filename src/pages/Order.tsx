import { Page, Navbar, Block, BlockTitle } from "konsta/react";

function Order() {
  return (
    <Page>
      <Navbar title="Order" />
      <BlockTitle>Order Placement</BlockTitle>
      <Block strong>
        <p>Here you can place orders...</p>
      </Block>
    </Page>
  );
}

export default Order;
