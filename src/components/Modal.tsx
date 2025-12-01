type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: Props) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-end md:items-center justify-center bg-black/40"
    >
      <div
        onClick={handleContentClick}
        className="w-full max-w-md md:max-w-xl rounded-t-3xl md:rounded-3xl bg-white p-6 shadow-lg"
      >
        {children}
      </div>
    </div>
  );
};
