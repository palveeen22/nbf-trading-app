// 'use client';

// import { ArrowRight, Globe, TrendingUp, Users } from 'lucide-react';
// import { Button, Container } from '@/shared/ui';
// import { scrollToElement } from '@/shared/lib';
// import { COMPANY_INFO } from '../../model/content';


// export function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center bg-linear-to-br from-primary-900 via-primary-800 to-accent-900 text-white overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-float" />
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-400 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
//       </div>


//       {/* Grid Pattern Overlay */}
//       <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[4rem_4rem]" />

//       <Container className="relative z-10 pt-32 pb-16">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Left Content */}
//           <div className="space-y-8 animate-slide-in-left">
//             <div className="inline-block">
//               <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium">
//                 🌏 Global Distribution Excellence
//               </div>
//             </div>

//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
//               {COMPANY_INFO.name}
//             </h1>

//             <p className="text-2xl md:text-3xl font-light text-blue-100">
//               {COMPANY_INFO.tagline}
//             </p>

//             <p className="text-lg text-blue-100 leading-relaxed max-w-2xl">
//               Wholesale distribution specialist connecting Asian markets with quality products in rice, coffee, textiles, electronics, and agricultural equipment.
//             </p>

//             {/* CTA Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <Button
//                 variant="secondary"
//                 size="lg"
//                 onClick={() => scrollToElement('about')}
//                 className="group"
//               >
//                 Discover More
//                 <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </Button>
//               <Button
//                 variant="outline"
//                 size="lg"
//                 onClick={() => scrollToElement('contact')}
//                 className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
//               >
//                 Get in Touch
//               </Button>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
//               <div>
//                 <div className="flex items-center space-x-2 text-white mb-1">
//                   <Globe className="w-5 h-5" />
//                   <span className="text-2xl font-bold">6+</span>
//                 </div>
//                 <p className="text-sm text-blue-200">Markets</p>
//               </div>
//               <div>
//                 <div className="flex items-center space-x-2 text-white mb-1">
//                   <TrendingUp className="w-5 h-5" />
//                   <span className="text-2xl font-bold">8</span>
//                 </div>
//                 <p className="text-sm text-blue-200">Categories</p>
//               </div>
//               <div>
//                 <div className="flex items-center space-x-2 text-white mb-1">
//                   <Users className="w-5 h-5" />
//                   <span className="text-2xl font-bold">100%</span>
//                 </div>
//                 <p className="text-sm text-blue-200">Reliability</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Visual */}
//           <div className="relative hidden lg:block animate-slide-in-right">
//             <div className="relative w-full h-[600px]">
//               {/* Placeholder for hero image - can be replaced with actual image */}
//               <div className="absolute inset-0 bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <div className="text-center space-y-4 p-8">
//                     <div className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
//                       <Globe className="w-16 h-16 text-white" />
//                     </div>
//                     <p className="text-white/80 text-lg">
//                       Professional warehouse & logistics imagery goes here
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Cards */}
//               <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 w-48 animate-float">
//                 <p className="text-primary-900 font-semibold text-sm">Indonesia Based</p>
//                 <p className="text-gray-600 text-xs mt-1">Strategic Location</p>
//               </div>

//               <div className="absolute -bottom-6 -left-6 bg-accent-500 rounded-2xl shadow-2xl p-4 w-48 animate-float" style={{ animationDelay: '1s' }}>
//                 <p className="text-white font-semibold text-sm">Pan-Asian Distribution</p>
//                 <p className="text-blue-100 text-xs mt-1">Quality Assured</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>

//     </section>
//   );
// }



'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Globe, TrendingUp, Users, Sparkles } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Button, Container } from '@/shared/ui';
import { scrollToElement } from '@/shared/lib';
import { COMPANY_INFO } from '../../model/content';

// Typewriter effect component
function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 50 + delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, delay]);

  return <span>{displayText}</span>;
}

// Animated counter component
function AnimatedCounter({ target, suffix = '', delay = 0 }: { target: string; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(target.replace(/\D/g, '')) || 0;

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const duration = 1500;
      const startTime = Date.now();

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);

        start = Math.floor(easeOutQuart * numericValue);
        setCount(start);

        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }, delay);

    return () => clearTimeout(timer);
  }, [numericValue, delay]);

  return (
    <span>
      {target.includes('+') ? `${count}+` : target.includes('%') ? `${count}%` : count}
      {suffix}
    </span>
  );
}

// Particle component
const Particle = ({ index }: { index: number }) => (
  <motion.div
    className="absolute w-1 h-1 bg-white rounded-full"
    style={{
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    }}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1.5, 0],
      y: [0, -100],
    }}
    transition={{
      duration: 3 + Math.random() * 2,
      repeat: Infinity,
      delay: index * 0.3,
      ease: 'easeOut',
    }}
  />
);

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-900 via-primary-800 to-accent-900 text-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-300 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-400 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.15, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Grid Pattern with Pulse */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container className="relative z-10 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Badge with Sparkle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.2,
                type: 'spring',
                stiffness: 200,
              }}
              className="inline-block"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-medium cursor-default group"
              >
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                </motion.div>

                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  className="inline-block"
                >
                  🌏
                </motion.span>{' '}
                Global Distribution Excellence
              </motion.div>
            </motion.div>

            {/* Company Name with Gradient Text */}
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <motion.span
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-white"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              >
                {COMPANY_INFO.name}
              </motion.span>
            </motion.h1>

            {/* Tagline with Typewriter Effect */}
            <motion.div
              className="text-2xl md:text-3xl font-light text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {COMPANY_INFO.tagline}
              {/* {isVisible && <TypewriterText text={COMPANY_INFO.tagline} delay={800} />} */}
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-lg text-blue-100 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Wholesale distribution specialist connecting Asian markets with quality products in rice, coffee, textiles, electronics, and agricultural equipment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => scrollToElement('about')}
                  className="group relative overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 1,
                      ease: 'easeInOut',
                    }}
                  />
                  <span className="relative z-10 flex items-center">
                    Discover More
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.div>
                  </span>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToElement('contact')}
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all"
                >
                  Get in Touch
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats with Animated Numbers */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              {[
                { icon: Globe, value: '6+', label: 'Markets', delay: 1500 },
                { icon: TrendingUp, value: '8', label: 'Categories', delay: 1700 },
                { icon: Users, value: '100%', label: 'Reliability', delay: 1900 },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group cursor-default"
                  whileHover={{
                    scale: 1.1,
                    y: -5,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                  }}
                >
                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-2 bg-white/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />

                  <div className="relative">
                    <div className="flex items-center space-x-2 text-white mb-1">
                      {/* Icon dengan flex center agar tetap sejajar */}
                      <div className="flex items-center justify-center w-5 h-5 flex-shrink-0">
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-bold">
                        <AnimatedCounter target={stat.value} delay={stat.delay} />
                      </span>
                    </div>
                    <p className="text-sm text-blue-200">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual - 3D Card Effect */}
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="relative hidden lg:block"
            style={{ perspective: 1000 }}
          >
            <div className="relative w-full h-[600px]">
              {/* Main Card with 3D Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl border border-white/20 shadow-2xl overflow-hidden"
                whileHover={{
                  rotateY: 5,
                  rotateX: 5,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: 'easeInOut',
                  }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center space-y-6">
                    {/* Rotating Globe */}
                    <motion.div
                      className="w-32 h-32 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm relative"
                      animate={{
                        boxShadow: [
                          '0 0 20px rgba(255,255,255,0.2)',
                          '0 0 40px rgba(255,255,255,0.4)',
                          '0 0 20px rgba(255,255,255,0.2)',
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      >
                        <Globe className="w-16 h-16 text-white" />
                      </motion.div>

                      {/* Orbiting dots */}
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-3 h-3 bg-accent-400 rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                          animate={{
                            rotate: [0, 360],
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3 + i,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: i * 0.5,
                          }}
                        />
                      ))}
                    </motion.div>

                    <motion.p
                      className="text-white/80 text-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    >
                      Professional warehouse & logistics imagery goes here
                    </motion.p>
                  </div>
                </div>

                {/* Decorative Grid Lines */}
                <motion.div
                  className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:2rem_2rem]"
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                />
              </motion.div>

              {/* Floating */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-4 w-48 animate-float">
                <p className="text-primary-900 font-semibold text-sm">Indonesia Based</p>
                <p className="text-gray-600 text-xs mt-1">Strategic Location</p>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-accent-500 rounded-2xl shadow-2xl p-4 w-48 animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-white font-semibold text-sm">Pan-Asian Distribution</p>
                <p className="text-blue-100 text-xs mt-1">Quality Assured</p>
              </div>

              {/* Decorative Glow Effects */}
              <motion.div
                className="absolute top-1/2 -right-12 w-32 h-32 bg-accent-400/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute bottom-1/4 -left-8 w-24 h-24 bg-primary-400/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}