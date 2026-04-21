"use client";

import { deleteGuestbookEntry } from "@/app/guestbook/actions";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function DeleteButton({ id }: { id: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  async function handleDelete() {
    if (!confirm("Bạn có chắc muốn xóa lời nhắn này?")) return;
    setIsDeleting(true);
    await deleteGuestbookEntry(id);
    setIsDeleting(false);
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={handleDelete}
      disabled={isDeleting}
      className="text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 h-auto py-0.5 px-2"
    >
      {isDeleting ? "Đang xóa..." : "Xóa"}
    </Button>
  );
}
