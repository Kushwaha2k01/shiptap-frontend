import nodemailer from 'nodemailer';

const SMTP_HOST = process.env.SMTP_HOST!;
const SMTP_PORT = parseInt(process.env.SMTP_PORT || '587');
const SMTP_USER = process.env.SMTP_USER!;
const SMTP_PASS = process.env.SMTP_PASS!;

if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
  throw new Error('Please define SMTP environment variables in .env.local');
}

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_PORT === 465, // true for 465, false for other ports
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface WishlistData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
  newsletter: boolean;
}

export async function sendContactEmail(data: ContactData) {
  const mailOptions = {
    from: SMTP_USER,
    to: 'shiptapindia@gmail.com',
    subject: `New Contact Form Submission: ${data.subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Subject:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully');
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
}

export async function sendWishlistEmail(data: WishlistData) {
  const mailOptions = {
    from: SMTP_USER,
    to: 'shiptapindia@gmail.com',
    subject: `New Wishlist Signup: ${data.name} from ${data.company}`,
    html: `
      <h2>New Wishlist Signup</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
      <p><strong>Interest Level:</strong> ${data.interest}</p>
      <p><strong>Newsletter Subscription:</strong> ${data.newsletter ? 'Yes' : 'No'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message || 'No additional message'}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Wishlist email sent successfully');
  } catch (error) {
    console.error('Error sending wishlist email:', error);
    throw error;
  }
}
