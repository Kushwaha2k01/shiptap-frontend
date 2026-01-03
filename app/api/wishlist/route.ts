import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Wishlist from '../../../lib/models/Wishlist';
import { sendWishlistEmail } from '../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    const { name, email, company, phone, interest, message, newsletter } = await request.json();

    // Validate required fields
    if (!name || !email || !company || !interest) {
      return NextResponse.json(
        { error: 'Name, email, company, and interest are required' },
        { status: 400 }
      );
    }

    // Connect to database
    await connectToDatabase();

    // Save wishlist entry to database
    const wishlistEntry = new Wishlist({
      name,
      email,
      company,
      phone,
      interest,
      message,
      newsletter,
    });

    await wishlistEntry.save();

    // Send email notification (optional, comment out if not needed)
    // await sendWishlistEmail({ name, email, company, phone, interest, message, newsletter });

    return NextResponse.json(
      { message: 'Wishlist entry submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing wishlist form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
