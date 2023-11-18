import { ImageStore } from "@/types/hook";
import { create } from "zustand";

const useImage = create<ImageStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true, url: undefined }),
  onClose: () => set({ isOpen: false, url: undefined }),
  onReplace: (url: string) => set({ isOpen: true, url }),
}));

export default useImage;
