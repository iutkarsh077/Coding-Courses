"use server";
import { compileWelcomeTemplate, sendMail } from "@/lib/mail";

export const sendEmail = async ({email, message}: {email: string, message: string}) => {
  "use server";
  console.log(email, message)
  await sendMail({
    to: email,
    name: "Coding Courses",
    subject: "Your Courses",
    body: compileWelcomeTemplate(message, "https://coding-courses.vercel.app"),
  });
};
