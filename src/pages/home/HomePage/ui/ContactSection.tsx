'use client';

import { useState, useRef } from 'react';
import { Container, Section } from '@/shared/ui';
import { Mail, MapPin, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion, useInView, Variants } from 'framer-motion';
import { COMPANY_INFO } from '../../model/content';
import Link from 'next/link';
import { sendMail } from '@/shared/lib';

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants  = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const formItemVariants: Variants  = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
};

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export function ContactSection() {
  const { legalName, address, contact } = COMPANY_INFO;
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [formStatus, setFormStatus] = useState<FormStatus>({
    type: 'idle',
    message: '',
  });
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  // Validation functions
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (!validateForm()) {
      setFormStatus({
        type: 'error',
        message: 'Please fix the errors above',
      });
      return;
    }

    setFormStatus({ type: 'loading', message: 'Sending your message...' });

    // Simulate API call
    setTimeout(() => {
      try {
        // In production, replace with actual API call
        const mailtoLink = sendMail(
          contact.email,
          `Business Inquiry from ${formData.name}`,
          `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nPhone: ${formData.phone || 'N/A'}\n\nMessage:\n${formData.message}`
        );

        window.location.href = mailtoLink;

        setFormStatus({
          type: 'success',
          message: 'Message sent successfully! We\'ll get back to you soon.',
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
        });
        setTouched({});
      } catch (error) {
        setFormStatus({
          type: 'error',
          message: 'Something went wrong. Please try again.',
        });
      }
    }, 1500);
  };

  return (
    <Section id="contact" background="white">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative">
                Get In Touch
                <motion.div
                  className="absolute -bottom-2 left-1/2 h-1 bg-linear-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full"
                  initial={{ width: 0, x: '-50%' }}
                  whileInView={{ width: '70%', x: '-50%' }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                />
              </h2>
            </motion.div>
            <motion.p
              className="text-lg text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
          </motion.div>

          {/* Contact Grid */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information - Minimalist Cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariants}
              className="lg:col-span-2 space-y-4"
            >
              {/* Email */}
              <motion.div variants={itemVariants}>
                <Link href={sendMail(contact.email, 'Business Inquiry')}>
                  <motion.div
                    whileHover={{ x: 8, borderColor: '#3B82F6' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="group flex items-center space-x-4 p-4 rounded-xl border-2 border-gray-200 hover:bg-primary-50/30 transition-colors cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                      className="w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"
                    >
                      <Mail className="w-5 h-5 text-primary-600" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                        Email
                      </div>
                      <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors truncate">
                        {contact.email}
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send className="w-4 h-4 text-primary-600" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Address - Compact */}
              <motion.div variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start space-x-4 p-4 rounded-xl border-2 border-gray-200 bg-gray-50"
                >
                  <div className="w-11 h-11 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                      Office
                    </div>
                    <div className="text-sm text-gray-900 space-y-0.5">
                      <p className="font-medium">{legalName}</p>
                      <p className="text-gray-600 text-xs leading-relaxed">
                        {address.street}, {address.city}
                        <br />
                        {address.province}, {address.postalCode}
                        <br />
                        {address.country}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Phone */}
              {contact.phone && (
                <motion.div variants={itemVariants}>
                  <a href={`tel:${contact.phone}`}>
                    <motion.div
                      whileHover={{ x: 8, borderColor: '#3B82F6' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="group flex items-center space-x-4 p-4 rounded-xl border-2 border-gray-200 hover:bg-primary-50/30 transition-colors cursor-pointer"
                    >
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                        className="w-11 h-11 bg-primary-100 rounded-lg flex items-center justify-center shrink-0"
                      >
                        <Phone className="w-5 h-5 text-primary-600" />
                      </motion.div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-0.5">
                          Phone
                        </div>
                        <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                          {contact.phone}
                        </div>
                      </div>
                    </motion.div>
                  </a>
                </motion.div>
              )}

              {/* Response Time */}
              <motion.div variants={itemVariants} className="pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-2 h-2 bg-green-500 rounded-full"
                  />
                  <span>Typically responds within 24 hours</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form - Minimalist Design */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <motion.div
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 md:p-8"
                whileHover={{ boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    animate={isFormInView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Name *
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: '#3B82F6' }}
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition-all outline-none ${
                        touched.name && formErrors.name
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {touched.name && formErrors.name && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs text-red-600 flex items-center space-x-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Email & Company - 2 columns */}
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Email */}
                    <motion.div
                      variants={formItemVariants}
                      initial="hidden"
                      animate={isFormInView ? 'visible' : 'hidden'}
                      transition={{ delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email *
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: '#3B82F6' }}
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur('email')}
                        className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition-all outline-none ${
                          touched.email && formErrors.email
                            ? 'border-red-300 bg-red-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        placeholder="you@company.com"
                      />
                      {touched.email && formErrors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-1 text-xs text-red-600 flex items-center space-x-1"
                        >
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.email}</span>
                        </motion.p>
                      )}
                    </motion.div>

                    {/* Company */}
                    <motion.div
                      variants={formItemVariants}
                      initial="hidden"
                      animate={isFormInView ? 'visible' : 'hidden'}
                      transition={{ delay: 0.3 }}
                    >
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1.5">
                        Company
                      </label>
                      <motion.input
                        whileFocus={{ scale: 1.01, borderColor: '#3B82F6' }}
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg hover:border-gray-300 focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition-all outline-none"
                        placeholder="Company name"
                      />
                    </motion.div>
                  </div>

                  {/* Phone */}
                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    animate={isFormInView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.4 }}
                  >
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone (optional)
                    </label>
                    <motion.input
                      whileFocus={{ scale: 1.01, borderColor: '#3B82F6' }}
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-lg hover:border-gray-300 focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition-all outline-none"
                      placeholder="+62 812 3456 7890"
                    />
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    variants={formItemVariants}
                    initial="hidden"
                    animate={isFormInView ? 'visible' : 'hidden'}
                    transition={{ delay: 0.5 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message *
                    </label>
                    <motion.textarea
                      whileFocus={{ scale: 1.01, borderColor: '#3B82F6' }}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      onBlur={() => handleBlur('message')}
                      rows={4}
                      className={`w-full px-4 py-2.5 border-2 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 transition-all outline-none resize-none ${
                        touched.message && formErrors.message
                          ? 'border-red-300 bg-red-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Tell us about your inquiry..."
                    />
                    {touched.message && formErrors.message && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-1 text-xs text-red-600 flex items-center space-x-1"
                      >
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.message}</span>
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Status Message */}
                  {formStatus.type !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`flex items-center space-x-2 p-3 rounded-lg ${
                        formStatus.type === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : formStatus.type === 'error'
                          ? 'bg-red-50 text-red-800 border border-red-200'
                          : 'bg-blue-50 text-blue-800 border border-blue-200'
                      }`}
                    >
                      {formStatus.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 shrink-0" />
                      ) : formStatus.type === 'error' ? (
                        <AlertCircle className="w-5 h-5 shrink-0" />
                      ) : (
                        <Loader2 className="w-5 h-5 shrink-0 animate-spin" />
                      )}
                      <span className="text-sm font-medium">{formStatus.message}</span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={formStatus.type === 'loading'}
                    whileHover={{ scale: formStatus.type === 'loading' ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-linear-to-r from-primary-600 to-accent-600 text-white font-medium rounded-lg hover:from-primary-700 hover:to-accent-700 focus:ring-4 focus:ring-primary-200 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    {formStatus.type === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}