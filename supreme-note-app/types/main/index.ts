import { Doc, Id } from "@/convex/_generated/dataModel";
import { LucideIcon } from "lucide-react";
import React from "react";

interface ItemProps {
  id?: Id<"documents">;
  documentIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  label: string;
  onClick?: () => void;
  icon: LucideIcon;
}

interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

interface NavbarProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

interface TitleProps {
  initialData: Doc<"documents">;
}

interface BannerProps {
  documentId: Id<"documents">;
}

interface MenuProps {
  documentId: Id<"documents">;
}

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

interface PublishProps {
  initialData: Doc<"documents">;
}

export type {
  DocumentListProps,
  ItemProps,
  ConfirmModalProps,
  NavbarProps,
  TitleProps,
  BannerProps,
  MenuProps,
  DocumentIdPageProps,
  EditorProps,
  PublishProps,
};
