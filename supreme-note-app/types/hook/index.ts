interface SearchStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  toggle: () => void;
}

interface SettingStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface ImageStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export type { SettingStore, SearchStore, ImageStore };
