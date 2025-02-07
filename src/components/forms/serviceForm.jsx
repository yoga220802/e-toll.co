import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal";
import { useNavigate } from "react-router-dom";

const ServiceForm = ({ serviceName }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    namaKendaraan: "",
    warnaKendaraan: "",
    nomorPlat: "",
    lokasi: "",
    keluhan: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  return (
    <div className="px-4 py-6 md:px-8">
      <h1 className="text-3xl font-bold">{serviceName}</h1>
      <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          name="namaKendaraan"
          placeholder="Nama Kendaraan"
          className="border p-3 rounded shadow-sm"
          onChange={handleChange}
          required
        />
        <textarea
          name="keluhan"
          placeholder="Masukkan Keluhan"
          className="border p-3 rounded shadow-sm row-span-4 h-full"
          onChange={handleChange}
          required
        ></textarea>
        <input
          type="text"
          name="warnaKendaraan"
          placeholder="Warna Kendaraan"
          className="border p-3 rounded shadow-sm"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nomorPlat"
          placeholder="Nomor Plat Kendaraan"
          className="border p-3 rounded shadow-sm"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lokasi"
          placeholder="Lokasi Anda"
          className="border p-3 rounded shadow-sm"
          onChange={handleChange}
          required
        />
        
        {/* Wrapper untuk memastikan tombol ada di ujung kanan */}
        <div className="col-span-1 md:col-span-2 flex justify-end">
          <button
            type="submit"
            className="bg-blue-900 text-white py-2 px-6 rounded w-[120px]"
          >
            Kirim
          </button>
        </div>
      </form>

      <ConfirmationModal isOpen={modalOpen} onClose={() => navigate("/toll-service")} />
    </div>
  );
};

export default ServiceForm;
