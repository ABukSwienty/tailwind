import { NextApiRequest, NextApiResponse } from "next";
import { EmailData } from "../../types/email-data";
import nodemailer from "nodemailer";

const validateBody = (data: any) => {
  if (typeof data !== "object") return false;
  if (!data.email || !data.message) return false;
  return true;
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const data = JSON.parse(req.body) as EmailData;
  const isValid = validateBody(data);
  if (!isValid) {
    res.status(400).send("Could not validate message. Please try again.");
    return;
  }

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "send.one.com",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  try {
    const mailData = {
      from: process.env.EMAIL_USER,
      to: "ml@tailwind.how",
      subject: `Email from tailwind.how from ${data.email}`,
      text: data.message + " | Sent from: " + data.email,
      html: `<div><p>${data.message}</p><p>Sent from:
    ${data.email}</p></div>`,
    };

    await transporter.sendMail(mailData);

    res.status(200).send("Message sent successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send("Could not send message. Please try again.");
  }
};

export default handler;
