import Modal from "react-modal";

const ConfirmationModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="bg-white p-6 shadow-md rounded-md w-1/3 mx-auto mt-20 text-center">
      <h2 className="text-xl font-bold">Layanan Sedang Diproses</h2>
      <p className="mt-2">Mohon tunggu, petugas akan segera datang ke lokasi Anda.</p>
      <div className="mt-4">
        <button onClick={onClose} className="bg-blue-900 text-white py-2 px-6 rounded">OK</button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
