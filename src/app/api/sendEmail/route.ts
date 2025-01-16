const serviceEmail = process.env.EMAIL
const sentToEmail = process.env.SEND_TO_EMAIL
const emailAppPassword = process.env.EMAIL_APP_PASSWORD
import type { NextRequest } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: serviceEmail,
      pass: emailAppPassword
    }
  })
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; font-size: 16px;">
      <h2>New Contact Message</h2>
      <p><b>From:</b> ${name} (${email})</p>
      <p><b>Subject:</b> ${subject}</p>
      <p><b>Message:</b></p>
      <p>${message}</p>
    </div>
  `

  try {
    await transporter.sendMail({
      from: serviceEmail,
      to: sentToEmail,
      subject: `New Contact Message: ${subject}`,
      html: htmlContent
    })

    return new Response(
      JSON.stringify({ message: 'Email sent successfully' }),
      {
        status: 200,
          headers: {
            'Content-Type': 'application/json'
          }
      }
    )
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'Error sending email' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
