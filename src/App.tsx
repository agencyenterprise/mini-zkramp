import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { isAndroid } from "react-device-detect";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import Header from "./components/Header";

import Home from "./pages/Home";
import Liquidity from "./pages/Liquidity";
import Order from "./pages/Order";
import NFT from "./pages/Nft";

import "./App.css";

import { App as KApp } from "konsta/react";

function App() {
  const theme = isAndroid ? "material" : "ios";

  return (
    <TonConnectUIProvider
      manifestUrl={`https://85e1-177-2-10-195.ngrok-free.app/tonconnect-manifest.json`}
    >
      <KApp theme={theme}>
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/liquidity" element={<Liquidity />} />
            <Route path="/order" element={<Order />} />
            <Route path="/nft" element={<NFT />} />
          </Routes>
        </Router>
      </KApp>
    </TonConnectUIProvider>
  );
}

export default App;
