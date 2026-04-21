"use client";

import { useActionState } from "react";
import { sendContactMessage, ContactFormState } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";

const initialState: ContactFormState = {
  success: false,
};

export default function ContactPage() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Liên hệ
        </h1>
        <p className="text-slate-400">
          Bạn có câu hỏi hoặc muốn hợp tác? Hãy gửi tin nhắn cho tôi!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Thông tin liên hệ */}
        <div className="space-y-4">
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-1 text-slate-200">Email</h3>
              <a
                href="mailto:2212416@sv.dlu.edu.vn"
                className="text-cyan-400 hover:text-cyan-300 text-sm"
              >
                2212416@sv.dlu.edu.vn
              </a>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-1 text-slate-200">GitHub</h3>
              <a
                href="https://github.com/2212416-gif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm"
              >
                github.com/2212416-gif
              </a>
            </CardContent>
          </Card>
          <Card className="bg-white/5 border-white/10">
            <CardContent className="pt-4">
              <h3 className="font-semibold mb-1 text-slate-200">Địa chỉ</h3>
              <p className="text-sm text-slate-400">
                Đại học Đà Lạt, 01 Phù Đổng Thiên Vương, Đà Lạt
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Form liên hệ */}
        <div className="md:col-span-2">
          {state.success ? (
            <Card className="bg-green-500/10 border-green-500/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-green-400 font-semibold text-lg mb-2">
                  ✓ Gửi thành công!
                </h3>
                <p className="text-green-400/80">
                  Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi sớm nhất có thể.
                </p>
                <Button
                  variant="outline"
                  className="mt-4 border-green-500/30 text-green-400 hover:bg-green-500/10"
                  onClick={() => window.location.reload()}
                >
                  Gửi tin nhắn khác
                </Button>
              </CardContent>
            </Card>
          ) : (
            <form action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-slate-300">Họ và tên</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Lê Văn Minh"
                  required
                  className="bg-white/5 border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50"
                />
                {state.errors?.name && (
                  <p className="text-red-400 text-sm">{state.errors.name[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-300">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  className="bg-white/5 border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50"
                />
                {state.errors?.email && (
                  <p className="text-red-400 text-sm">{state.errors.email[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-slate-300">Tiêu đề</Label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Chủ đề bạn muốn trao đổi"
                  required
                  className="bg-white/5 border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50"
                />
                {state.errors?.subject && (
                  <p className="text-red-400 text-sm">{state.errors.subject[0]}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-slate-300">Nội dung</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Viết nội dung tin nhắn..."
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-cyan-500/50 resize-none"
                />
                {state.errors?.message && (
                  <p className="text-red-400 text-sm">{state.errors.message[0]}</p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white"
              >
                {isPending ? "Đang gửi..." : "Gửi tin nhắn"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
