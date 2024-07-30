"use server";
import { sendMail } from "@/lib/SendMail";
import { revalidatePath } from "next/cache";

interface SenditProps {
  to: string;
  name: string;
  subject: string;
  body: string;
}

const Sendit = async ({ to, name, subject, body }: SenditProps) => {
  revalidatePath("/contact");
  await sendMail({ to, name, subject, body });
  return;
};

export default Sendit;