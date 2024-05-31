import { useNavigate } from "react-router-dom";
import { Page, Block, Button, BlockTitle, Card } from "konsta/react";

function Home() {
  const navigate = useNavigate();

  return (
    <Page>
      <Block strong className="text-center">
        <BlockTitle className="text-3xl md:text-5xl font-extrabold text-white leading-9 md:leading-[60px]">
          Lightning-fast USD to TUSD Transaction with the highest level of
          security
        </BlockTitle>
        <Card className="mt-6 p-4">
          <p className="text-xl md:text-2xl font-normal text-zinc-300 leading-normal md:leading-7">
            ZKRamp leverages zero-knowledge proofs to ensure your transactions
            remain private while providing unmatched efficiency in
            onramp/offramp solutions.
          </p>
        </Card>
        <Block className="flex flex-col items-center gap-4 mt-8">
          <Button
            onClick={() => navigate("/liquidity")}
            large
            className="w-full md:w-auto"
          >
            Add Liquidity
          </Button>
          <Button
            onClick={() => navigate("/order")}
            large
            className="w-full md:w-auto"
          >
            Place Order
          </Button>
          <Button
            onClick={() => navigate("/nft")}
            large
            className="w-full md:w-auto"
          >
            Manage NFTs
          </Button>
        </Block>
      </Block>
    </Page>
  );
}

export default Home;
