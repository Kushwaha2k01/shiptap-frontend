import { NextRequest, NextResponse } from 'next/server';
import connectToDatabase from '../../../lib/mongodb';
import Wishlist from '../../../lib/models/Wishlist';

export async function GET() {
  try {
    // Connect to database
    await connectToDatabase();

    // Retrieve all wishlist entries
    const wishlists = await Wishlist.find({}).sort({ createdAt: -1 });

    return NextResponse.json(
      { wishlists, count: wishlists.length },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error retrieving wishlists:', error);
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
