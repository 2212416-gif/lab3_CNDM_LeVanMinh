import { guestbookEntries } from "@/data/guestbook";
import GuestbookForm from "@/components/guestbook-form";
import DeleteButton from "@/components/delete-button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function GuestbookPage() {
  const entries = guestbookEntries;

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Sổ lưu bút
        </h1>
        <p className="text-slate-400">Hãy để lại lời nhắn cho tôi nhé!</p>
      </div>

      <GuestbookForm />

      <Separator className="my-8 bg-white/10" />

      <div className="space-y-4">
        <p className="text-sm text-slate-500">{entries.length} lời nhắn</p>

        {entries.map((entry) => (
          <Card key={entry.id} className="bg-white/5 border-white/10 hover:bg-white/8 transition-colors">
            <CardContent className="pt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-slate-200">
                  {entry.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500">
                    {new Date(entry.createdAt).toLocaleDateString("vi-VN")}
                  </span>
                  <DeleteButton id={entry.id} />
                </div>
              </div>
              <p className="text-slate-400">{entry.message}</p>
            </CardContent>
          </Card>
        ))}

        {entries.length === 0 && (
          <p className="text-center text-slate-500 py-8">
            Chưa có lời nhắn nào. Hãy là người đầu tiên!
          </p>
        )}
      </div>
    </div>
  );
}
