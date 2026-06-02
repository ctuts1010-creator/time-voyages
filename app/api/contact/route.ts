import { Resend } from "resend";


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, tour, message } = body;

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      subject: `Khách mới: ${name}`,
      html: `
        <h2>Thông tin khách hàng</h2>

        <p><b>Họ tên:</b> ${name}</p>

        <p><b>Số điện thoại:</b> ${phone}</p>

        <p><b>Email:</b> ${email}</p>

        <p><b>Tour:</b> ${tour}</p>

        <p><b>Nội dung:</b></p>

        <p>${message}</p>
      `,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}