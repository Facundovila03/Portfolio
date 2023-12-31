import dotenv from "dotenv";
dotenv.config();
import createHttpError from "http-errors";
import nodemailer from "nodemailer";
import html from "../nodemailer/autoReplyHTML.js";

const { TRANSPORTER_PASS } = process.env;
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "portfolio.fv@gmail.com",
    pass: TRANSPORTER_PASS,
  },
});

export default async function sendMail(req, res, next) {
  const { from, message, name } = req.body;
  const mail = {
    from: {
      name: `Portfolio  notification from ${from}`,
      address: "portfolio.fv@gmail.com",
    },
    to: "facundovila03@gmail.com",
    subject: `Portfolio Notification  from ${name}!!`,
    html: `<h1>${message}</h1>`,
  };
  const autoReply = {
    //! this works dont touch  it
    from: '"Facundo Vila - Portfolio" <facundovila03@gmail.com>',
    to: from,
    subject: `Thank you ${name}!`,
    html: html,
  };
  try {
    await transporter.sendMail(mail, (error, info) => {
      if (error) {
        throw Error(error);
      } else {
        transporter.sendMail(autoReply, (error, info) => {
          if (error) {
            throw Error(error);
          } else {
            res.status(200).json({ message: "Message sent successfully!" });
          }
        });
      }
    });
  } catch (error) {
    next(createHttpError(error));
  }
}
