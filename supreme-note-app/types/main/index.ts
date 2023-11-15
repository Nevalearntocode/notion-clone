import { Id } from "@/convex/_generated/dataModel";
import { LucideIcon } from "lucide-react";

export default interface ItemProps {
  id?: Id<"documents">,
  documentIcon?: string,
  active?: boolean,
  expanded?: boolean,
  isSearch?: boolean,
  level?: number,
  onExpand?: () => void,
  label: string,
  onClick: () => void,
  icon: LucideIcon,
}