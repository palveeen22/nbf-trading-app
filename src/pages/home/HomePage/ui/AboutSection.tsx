'use client';

import { Building2, Target, Users, Zap } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { Container, Section } from '@/shared/ui';
import { COMPANY_INFO } from '../../model/content';

export function AboutSection() {
  const highlights = [
    {
      icon: Building2,
      title: 'Established Presence',
      description: 'Based in Indonesia with strong existing customer relationships',
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Targeting key Asian markets with precision distribution',
    },
    {
      icon: Users,
      title: 'Network Approach',
      description: 'Growing through partnerships, referrals, and industry events',
    },
    {
      icon: Zap,
      title: 'Quality Commitment',
      description: 'International standards met across all product categories',
    },
  ];

  // Animation variants dengan tipe yang benar
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1], // easeOut sebagai cubic-bezier array
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <Section id="about" background="white">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={itemVariants}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Us
            </h2>
            <p className="text-xl text-gray-600">
              Leading wholesale distribution across Asia
            </p>
          </motion.div>

          {/* Main Description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                {COMPANY_INFO.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -8, 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center mb-4"
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission Section */}
          <div className="mt-16">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 mb-8 text-center"
            >
              Our Mission & Goals
            </motion.h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={containerVariants}
              className="grid md:grid-cols-2 gap-6"
            >
              {COMPANY_INFO.mission.map((goal, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    x: 8,
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-md border border-gray-100 cursor-pointer"
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="flex-shrink-0 w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold"
                  >
                    {index + 1}
                  </motion.div>
                  <p className="text-gray-700 leading-relaxed flex-1">
                    {goal}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
}