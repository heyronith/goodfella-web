import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email } = req.body;

    const { data, error } = await resend.emails.send({
      from: 'GoodFella <hello@yourdomain.com>',
      to: [email],
      subject: `Welcome to GoodFella, ${firstName}! 🎉`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #f59e0b; text-align: center;">Welcome to GoodFella!</h1>
          
          <p>Hi ${firstName},</p>
          
          <p>Thank you for joining the GoodFella waitlist! We're excited to have you on board.</p>
          
          <p>Here's what happens next:</p>
          <ul>
            <li>We'll notify you as soon as early access is available</li>
            <li>You'll be among the first to experience a tool that truly understands you</li>
            <li>We'll keep you updated on our progress</li>
          </ul>
          
          <p>In the meantime, follow us for updates:</p>
          <p style="text-align: center;">
            <a href="#" style="background: #f59e0b; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px;">Follow GoodFella</a>
          </p>
          
          <p>Best regards,<br>The GoodFella Team</p>
        </div>
      `,
    });

    if (error) {
      return res.status(400).json({ error });
    }

    res.status(200).json({ data });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
} 