"use server";
import { revalidatePath } from "next/cache";
import nodemailer from "nodemailer";


export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });
  try {
    const testResult = await transport.verify();
    // console.log(testResult);
  } catch (error) {
    console.error({ error });
    return;
  }

  try {
    revalidatePath("/contact");
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html:  `
      <div style="font-family: Arial, sans-serif; text-align: center; padding: 20px; background-color: #f9f9f9; border-radius: 10px;">
        <h1 style="color: #333;">${body}</h1>
        <p style="color: #666;">Thank you for Visting us! Someone is Contacting you.</p>
        <p style="color: #999; font-size: 12px;">Take Care, Have a great Day.</p>
      </div>
    `,
    });
    // console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
}