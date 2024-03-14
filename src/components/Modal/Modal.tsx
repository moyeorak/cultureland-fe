import { useModal } from "@/contexts/modal/modal.context";

function Modal({ children }: { children: React.ReactNode }) {
  const modal = useModal();
  const handleClickBackdrop = () => modal.close();

  return (
    <div
      className="bg-black/50 flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 z-40"
      onClick={handleClickBackdrop}
    >
      <div
        className="bg-white rounded-md w-auto max-h-screen overflow-auto scrollbar-hide px-5 py-8 z-50 transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
