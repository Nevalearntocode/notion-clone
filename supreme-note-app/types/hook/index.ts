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
  url?: string;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onReplace: (url: string) => void;
}

export type { SettingStore, SearchStore, ImageStore };
