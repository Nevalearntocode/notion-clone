"use client";

import React from "react";
import { Dialog, DialogContent, DialogHeader } from "../ui/dialog";
import { useSetting } from "@/hooks";
import { Label } from "../ui/label";
import { ModeToggle } from "../mode-toggle";

const SettingModal = () => {
  const settings = useSetting();
  return (
    <Dialog open={settings.isOpen} onOpenChange={settings.onClose}>
      <DialogContent>
        <DialogHeader className="border-b pb-3">
          <h2 className="text-lg font-medium">My setting</h2>
        </DialogHeader>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-1">
            <Label>Appearance</Label>
            <span className="text-[0.8rem] text-muted-foreground">
              Customize how SNA looks on your device
            </span>
          </div>
          <ModeToggle />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingModal;
