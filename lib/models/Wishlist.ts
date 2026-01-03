import mongoose from 'mongoose';

const WishlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    default: '',
  },
  interest: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    default: '',
  },
  newsletter: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Wishlist || mongoose.model('Wishlist', WishlistSchema);
