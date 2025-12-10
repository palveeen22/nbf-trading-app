'use client';

import { Container, Section } from '@/shared/ui';
import { Wheat, Coffee, Utensils, Shirt, Home, Laptop, Sprout, LucideIcon } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import { PRODUCT_CATEGORIES } from '../../model/content';

// Custom Tractor icon component (Lucide doesn't have a tractor, so we'll create a simple representation)
const TractorIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="19" r="2" />
    <circle cx="17" cy="19" r="3" />
    <path d="M2 12h4l2-4h8l2 4h4" />
    <path d="M6 12v7" />
    <path d="M18 12v7" />
    <path d="M10 8V4h4v4" />
  </svg>
);

// Map icon names to components
const iconMap: Record<string, LucideIcon | React.ComponentType<{ className?: string }>> = {
  Wheat,
  Coffee,
  Utensils,
  Shirt,
  Home,
  Laptop,
  TractorIcon,
  Sprout,
};

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
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
      ease: 'easeOut',
    },
  },
};

const bannerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

export function ProductsSection() {
  return (
    <Section id="products" background="white">
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
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900"
              variants={headerVariants}
            >
              Products & Categories
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600"
              variants={headerVariants}
            >
              Comprehensive distribution across diverse product categories
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {PRODUCT_CATEGORIES.map((category) => {
              const Icon = iconMap[category.icon] || Wheat;

              return (
                <motion.div
                  key={category.id}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -8,
                    transition: { type: 'spring', stiffness: 300, damping: 20 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group bg-linear-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-2xl transition-shadow duration-300 border border-gray-100 hover:border-primary-200 cursor-pointer"
                >
                  {/* Icon Container */}
                  <div className="mb-4 flex justify-center">
                    <motion.div
                      whileHover={{ 
                        rotate: 360,
                        scale: 1.1,
                      }}
                      transition={{ 
                        rotate: { duration: 0.6, ease: 'easeInOut' },
                        scale: { duration: 0.3 }
                      }}
                      className="w-16 h-16 bg-linear-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center"
                    >
                      <Icon className="w-8 h-8 text-primary-600" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {category.description}
                    </p>
                  </div>

                  {/* Hover Effect Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 h-1 bg-linear-to-r from-primary-500 to-accent-500 rounded-full origin-left"
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Info Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-150px' }}
            variants={bannerVariants}
            className="mt-16 bg-linear-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 border border-gray-200"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Quality Assurance
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every product category we distribute meets international quality standards. We work directly with trusted manufacturers and suppliers to ensure consistent availability and reliability across our entire range.
                </p>
              </motion.div>

              <motion.div 
                className="grid grid-cols-2 gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.3,
                    },
                  },
                }}
              >
                {[
                  { value: '8', label: 'Categories', color: 'primary' },
                  { value: '100%', label: 'Quality Checked', color: 'accent' },
                  { value: '24/7', label: 'Support', color: 'primary' },
                  { value: '6+', label: 'Markets', color: 'accent' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={statsVariants}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="bg-white p-4 rounded-xl shadow-md text-center cursor-default"
                  >
                    <motion.div 
                      className={`text-3xl font-bold text-${stat.color}-600 mb-1`}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                        delay: 0.4 + (index * 0.1)
                      }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}