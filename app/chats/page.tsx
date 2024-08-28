import { cookies } from "next/headers";
import Image from "next/image";

import { Mail } from "@/app/chats/components/mail";
import { accounts, mails } from "@/app/chats/data";
import { Container } from "@/components/base/container";
import { Card, CardContent } from "@/components/ui/card";
import { ChatLayout } from "@/components/chat/chat-layout";
import Link from "next/link";
import { Header } from "@/components/layout/header";

export default function MailPage() {
  const layout = cookies().get("react-resizable-panels:layout:mail");

  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;

  return (
    <div className="p-0 mt-0 ">
      <Header />
      <main className="flex h-[calc(100dvh)]   pt-16 gap-4">
        <div className="z-10 border  w-full h-full text-sm lg:flex">
          <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={4} />
        </div>
      </main>
    </div>
  );
}
