import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Contact from '../../../lib/models/Contact';

export async function GET() {
  try {
    // Connect to database
    await connectToDatabase();

    // Retrieve all contact entries
    const contacts = await Contact.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { contacts, count: contacts.length },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving contacts:', error);
    if (error instanceof Error) {
      if (error.message.includes('connect')) {
        return NextResponse.json(
          { error: 'Database connection failed' },
          { status: 503 }
        );
      }
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDatabase();

    // Save contact to database
    const contact = new Contact({
      name,
      email,
      subject,
      message,
    });

    await contact.save();

    // Send email (optional, comment out if not needed)
    // await sendContactEmail({ name, email, subject, message });

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
