'use client';

import { Container, Section } from '@/shared/ui';
import { Shield, Target, Handshake, Lightbulb, Award } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { CORE_VALUES } from '../../model/content';

// Map icon names to components
const iconMap: Record<string, any> = {
  Shield,
  Target,
  Handshake,
  Lightbulb,
  Award,
};

export function ValuesSection() {
  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const bannerVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <Section id="values" background="gradient">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={headerVariants}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our business and partnerships
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-150px' }}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {CORE_VALUES.map((value) => {
              const Icon = iconMap[value.icon];

              return (
                <motion.div
                  key={value.id}
                  variants={cardVariants}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { 
                      type: 'spring', 
                      stiffness: 300,
                      damping: 20,
                    }
                  }}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-primary-200 cursor-pointer"
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <motion.div
                      whileHover={{ 
                        scale: 1.1, 
                        rotate: 5,
                      }}
                      transition={{ 
                        type: 'spring', 
                        stiffness: 400,
                        damping: 15,
                      }}
                      className="w-16 h-16 bg-linear-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg"
                    >
                      {Icon && <Icon className="w-8 h-8 text-white" />}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative element */}
                  <motion.div
                    initial={{ width: '3rem' }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                    className="mt-6 h-1 bg-linear-to-r from-primary-500 to-accent-500 rounded-full"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={bannerVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="mt-16 bg-linear-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-2xl cursor-pointer"
          >
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Building Trust Through Action
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-blue-100 max-w-3xl mx-auto"
            >
              These values aren't just words on a page – they're the foundation of every relationship we build, every transaction we complete, and every market we serve.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}