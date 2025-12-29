'use client';

import React, { useState } from 'react';
import './wishlist.css';

interface WishlistFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  interest: string;
  message: string;
  newsletter: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  interest?: string;
  message?: string;
}

const Wishlist: React.FC = () => {
  const [formData, setFormData] = useState<WishlistFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    interest: '',
    message: '',
    newsletter: false
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    }

    if (!formData.interest) {
      newErrors.interest = 'Please select your interest level';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }

    // Update progress
    updateProgress();
  };

  const updateProgress = () => {
    const fields = ['name', 'email', 'company', 'interest'];
    const filledFields = fields.filter(field => formData[field as keyof WishlistFormData] !== '' && formData[field as keyof WishlistFormData] !== false);
    setProgress((filledFields.length / fields.length) * 100);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real application, you would send the data to your backend
      console.log('Wishlist form submitted:', formData);

      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', interest: '', message: '', newsletter: false });
      setProgress(0);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="wishlist" className="wishlist-section">
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h2 className="wishlist-title">🚀 Join Our Wishlist ShipTap</h2>
          <p className="wishlist-subtitle">
            Be the first to know when we launch exciting new features! Fill out this quick form and get exclusive updates.
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-text">{Math.round(progress)}% Complete</p>
        </div>

        {submitStatus === 'success' && (
          <div className="success-message">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>🎉 Awesome! You&apos;re on our wishlist. We&apos;ll keep you posted!</span>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="error-message">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
            </svg>
            <span>Oops! Something went wrong. Please try again.</span>
          </div>
        )}

        <form className="wishlist-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'error' : ''}
                placeholder="Enter your full name"
                required
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="your@email.com"
                required
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="company">Company *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={errors.company ? 'error' : ''}
                placeholder="Your company name"
                required
              />
              {errors.company && <span className="error-text">{errors.company}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? 'error' : ''}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="interest">How interested are you? *</label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={errors.interest ? 'error' : ''}
              required
            >
              <option value="">Select your interest level</option>
              <option value="very-interested">🔥 Very Interested - Can&apos;t wait!</option>
              <option value="interested">👍 Interested - Sounds good</option>
              <option value="curious">🤔 Curious - Tell me more</option>
              <option value="maybe">🤷 Maybe - Keep me updated</option>
            </select>
            {errors.interest && <span className="error-text">{errors.interest}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">What features are you most excited about?</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Tell us what you're looking forward to... (min 20 characters)"
              rows={4}
            ></textarea>
            {errors.message && <span className="error-text">{errors.message}</span>}
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <span className="checkmark"></span>
              📧 Subscribe to our newsletter for exclusive updates and gaming insights
            </label>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <svg className="loading-spinner" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="31.416" strokeDashoffset="31.416">
                    <animate attributeName="stroke-dashoffset" dur="1s" repeatCount="indefinite" values="31.416;0"/>
                  </circle>
                </svg>
                Joining Wishlist...
              </>
            ) : (
              <>
                🚀 Join the Wishlist
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Wishlist;
