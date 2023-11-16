import { SettingStore } from "@/types/main";
import React from "react";
import { create } from "zustand";

const useSetting = create<SettingStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useSetting;
