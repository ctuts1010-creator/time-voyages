import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL;

    if (!apiKey) {
      return Response.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    if (!receiverEmail) {
      return Response.json(
        { error: "Missing CONTACT_RECEIVER_EMAIL" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, phone, email, tour, message } = body;

    await resend.emails.send({
      from: "Time Voyages <onboarding@resend.dev>",
      to: receiverEmail,
      subject: `Khách mới: ${name}`,
      html: `
        <h2>Thông tin khách hàng</h2>
        <p><b>Họ tên:</b> ${name}</p>
        <p><b>Số điện thoại:</b> ${phone}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Tour:</b> ${tour}</p>
        <p><b>Nội dung:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("RESEND_ERROR:", error);

    return Response.json(
      { error: "Không gửi được email" },
      { status: 500 }
    );
  }
}