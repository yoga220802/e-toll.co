import React, { useState, useEffect } from "react";
import { MainLayout } from "../../components/layouts/MainLayout";
// import UnderDevelopment from "../underDevelopment";
import transactionData from "../../data/transactions.json"

export default function TransactionPage({ isSidebarVisible, toggleSidebar }) {
	const [transactions, setTransactions] = useState([]);
  
  useEffect(() => {
    // Fetch data dari JSON lokal
    setTransactions(transactionData)
  }, []);
  
	return (
		<MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
			<div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Transaksi</h1>
        <div className="space-y-3">
          {transactions.map((transaction) => (
            <div key={transaction.id} className="flex flex-col">
              <span className="font-semibold">{transaction.location}</span>
              <span className="text-gray-500 text-sm">{transaction.amount}</span>
            </div>
          ))}
        </div>
      </div>
		</MainLayout>
	);
}
