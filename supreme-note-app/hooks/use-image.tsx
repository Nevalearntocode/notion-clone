import { ImageStore } from "@/types/hook";
import { create } from "zustand";

const useImage = create<ImageStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useImage;
