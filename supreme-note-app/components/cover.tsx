"use client";
import { cn } from "@/lib/utils";
import { CoverProps } from "@/types/reusable";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ImageIcon, X } from "lucide-react";
import useImage from "@/hooks/use-image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";

const Cover = ({ url, preview }: CoverProps) => {
  const image = useImage();
  const remove = useMutation(api.documents.removeImage);
  const params = useParams();
  const { edgestore } = useEdgeStore();

  const onRemove = async () => {
    if (url) {
      await edgestore.publicFiles.delete({ url: url });
    }
    remove({
      id: params.documentId as Id<"documents">,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted",
      )}
    >
      {!!url && <Image src={url} fill alt="cover" className="object-cover" />}
      {url && !preview && (
        <div className="opacity-0 hover:opacity-100 absolute bottom-5 right-5 items-center gap-x-2">
          <Button
            onClick={() => image.onReplace(url)}
            className="text-muted-foreground
           text-xs"
            variant={`outline`}
            size={`sm`}
          >
            <ImageIcon className="h-4 w-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={onRemove}
            className="text-muted-foreground
           text-xs"
            variant={`outline`}
            size={`sm`}
          >
            <X className="h-4 w-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cover;
