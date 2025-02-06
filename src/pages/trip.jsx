import React, { useState, useEffect } from "react";
import tollData from "../data/tollData.json";
import { Button } from "../components/ui/uiButton";
import { MainLayout } from "../components/layouts/MainLayout";

export default function TripPage({ isSidebarVisible, toggleSidebar }) {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicleClass, setVehicleClass] = useState("");
  const [tariff, setTariff] = useState(null);

  useEffect(() => {
    setTariff(null);
  }, [origin, destination, vehicleClass]);

  const handleSearch = () => {
    if (!origin || !destination || !vehicleClass) return;
    
    const foundTariff = tollData.tariffs.find(
      (t) => t.origin === parseInt(origin) && t.destination === parseInt(destination) && t.classId === parseInt(vehicleClass)
    );
    setTariff(foundTariff ? foundTariff.price : "Tidak ditemukan");
  };

  const handleReset = () => {
    setOrigin("");
    setDestination("");
    setVehicleClass("");
    setTariff(null);
  };

  return (
    <MainLayout isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar}>
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Plan a Trip</h2>
        <div className="bg-white p-4 rounded shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border p-4 rounded-md">
            <select className="border p-2 rounded w-full" value={origin} onChange={(e) => setOrigin(e.target.value)}>
              <option value="">Gerbang Tol Asal</option>
              {tollData.tollGates.map((gate) => (
                <option key={gate.id} value={gate.id}>{gate.name}</option>
              ))}
            </select>

            <select className="border p-2 rounded w-full" value={destination} onChange={(e) => setDestination(e.target.value)}>
              <option value="">Gerbang Tol Tujuan</option>
              {tollData.tollGates.map((gate) => (
                <option key={gate.id} value={gate.id}>{gate.name}</option>
              ))}
            </select>

            <select className="border p-2 rounded w-full" value={vehicleClass} onChange={(e) => setVehicleClass(e.target.value)}>
              <option value="">Golongan Kendaraan</option>
              {tollData.vehicleClasses.map((vclass) => (
                <option key={vclass.id} value={vclass.id}>{vclass.name}</option>
              ))}
            </select>
          </div>
        </div>

        {tariff !== null && (
          <div className="mt-4 p-4 border rounded bg-gray-100">
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 p-2">Gerbang Tol Asal</th>
                  <th className="border border-gray-400 p-2">Gerbang Tol Tujuan</th>
                  <th className="border border-gray-400 p-2">Tarif</th>
                  <th className="border border-gray-400 p-2">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-400 p-2">{tollData.tollGates.find(g => g.id == origin)?.name || "-"}</td>
                  <td className="border border-gray-400 p-2">{tollData.tollGates.find(g => g.id == destination)?.name || "-"}</td>
                  <td className="border border-gray-400 p-2">{tariff}</td>
                  <td className="border border-gray-400 p-2">{tariff}</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-lg font-medium">Tarif Tol {tollData.tollGates.find(g => g.id == origin)?.name} - {tollData.tollGates.find(g => g.id == destination)?.name} <br /> RP {tariff}</p>
          </div>
        )}

        <div className="flex gap-4 mt-4 justify-end">
          <Button className="bg-gray-300 px-6 py-2 rounded-md" onClick={handleReset}>Refresh</Button>
          <Button className="bg-blue-600 text-white px-6 py-2 rounded-md" onClick={handleSearch}>Cari</Button>
        </div>
      </div>
    </MainLayout>
  );
}