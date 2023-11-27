import React, { useState } from "react";

function useDisclose() {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    onClose,
    onOpen,
  };
}

export default useDisclose;
