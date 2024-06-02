import { useNavigate } from "react-router-dom";
import { Page, Block, Button, BlockTitle, Card } from "konsta/react";
import { Steps } from "../components/Steps";

function Home() {
  const navigate = useNavigate();

  return (
    <Page>
      <Block strong className="text-center">
        <BlockTitle className="text-4xl md:text-5xl font-extrabold leading-9 md:leading-[60px]">
          Lightning-fast USD to USDT Transaction with the highest level of
          security
        </BlockTitle>
        <Card className="mt-6 p-4">
          <p className="text-xl md:text-2xl font-normal leading-normal md:leading-7">
            ZKRamp leverages zero-knowledge proofs to ensure your transactions
            remain private while providing unmatched efficiency in
            onramp/offramp solutions.
          </p>
        </Card>
        <Block className="flex flex-col md:flex-row md:justify-center items-center gap-4 mt-8">
          <Button
            onClick={() => navigate("/liquidity")}
            large
            className="w-full md:w-40"
          >
            Add Liquidity
          </Button>
          <Button
            onClick={() => navigate("/order")}
            large
            className="w-full md:w-40"
          >
            Place Order
          </Button>
          <Button
            onClick={() => navigate("/nft")}
            large
            className="w-full md:w-40"
          >
            Manage NFTs
          </Button>
        </Block>
        <Steps />
      </Block>
    </Page>
  );
}

export default Home;
