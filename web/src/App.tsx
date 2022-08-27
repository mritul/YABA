import React from "react";
import { Route, Routes } from "react-router-dom";
import Account from "./views/Account";
import Analytics from "./views/Analytics";
import Overview from "./views/Overview";
import Invoices from "./views/Invoices";
import Settings from "./views/Settings";
import Wallet from "./views/Wallet";
import Transaction from "./views/Transaction";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="wallet" element={<Wallet />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="account" element={<Account />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
