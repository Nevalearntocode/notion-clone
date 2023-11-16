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

export type { DocumentListProps, ItemProps, ConfirmModalProps };
