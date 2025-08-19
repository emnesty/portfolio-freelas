import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

const ContactFormSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Serviço é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
})

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const validation = ContactFormSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { success: false, message: "Dados inválidos", errors: validation.error.issues },
        { status: 400 }
      )
    }

    const { name, email, service, description } = validation.data

    const gmailUser = process.env.GMAIL_USER
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || gmailUser

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Configuração de email não encontrada. Verifique as variáveis de ambiente GMAIL_USER e GMAIL_APP_PASSWORD.",
        },
        { status: 500 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    })

    const mailOptions = {
      from: gmailUser,
      to: receiver,
      replyTo: email,
      subject: `Novo contato: ${service} - ${name}`,
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #101828; margin-bottom: 20px;">Nova mensagem de contato</h2>

          <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0;"><strong>Nome:</strong> ${name}</p>
            <p style="margin: 0 0 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #4075FF; text-decoration: none;">${email}</a></p>
            <p style="margin: 0 0 10px 0;"><strong>Serviço:</strong> ${service}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <h3 style="color: #344054; margin-bottom: 10px;">Descrição:</h3>
            <p style="color: #475467; line-height: 1.5; white-space: pre-wrap;">${description}</p>
          </div>

          <div style="background: #e0f2fe; padding: 16px; border-radius: 8px; border-left: 4px solid #4075FF; margin: 20px 0;">
            <p style="margin: 0; color: #0c4a6e; font-size: 14px;">
              💡 <strong>Dica:</strong> Você pode responder diretamente a este email para contactar ${name}
            </p>
          </div>

          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">

          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Esta mensagem foi enviada através do formulário de contato do seu site.
          </p>
        </div>
      `,
      text: `
Nova mensagem de contato

Nome: ${name}
Email: ${email}
Serviço: ${service}

Descrição:
${description}

---
Você pode responder diretamente a este email para contactar ${name}
Esta mensagem foi enviada através do formulário de contato do seu site.
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ success: true, message: "Email enviado com sucesso!" })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json(
      { success: false, message: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 }
    )
  }
}
