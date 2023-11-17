"use client";
import React from "react";
import { useState, useEffect } from "react";
import SettingModal from "../modals/setting-modal";
import ImageModal from "../modals/image-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingModal />
      <ImageModal />
    </>
  );
};

export default ModalProvider;
