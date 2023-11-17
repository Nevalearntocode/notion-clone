import { Doc } from "@/convex/_generated/dataModel";
import { ReactNode } from "react";

interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

interface IconPickerProps {
  onChange: (icon: string) => void;
  children: ReactNode;
  asChild?: boolean;
}

interface CoverProps {
  url?: string,
  preview?: string,
}

export type { ToolbarProps, IconPickerProps, CoverProps };
