'use client';

import { useState } from 'react';
import { MapPin, Globe } from 'lucide-react';
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from 'react-simple-maps';
import { motion, Variants } from 'framer-motion';
import { Container, Section } from '@/shared/ui';
import { MARKETS } from '../../model/content';

// GeoJSON URL for Asia (you can also download and serve locally for better performance)
const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json';

// Real coordinates for each market
const MARKET_COORDINATES: Record<string, { coordinates: [number, number]; name: string }> = {
  china: { coordinates: [116.4074, 39.9042], name: 'Beijing, China' },
  hongkong: { coordinates: [114.1694, 22.3193], name: 'Hong Kong' },
  thailand: { coordinates: [100.5018, 13.7563], name: 'Bangkok, Thailand' },
  malaysia: { coordinates: [101.6869, 3.139], name: 'Kuala Lumpur, Malaysia' },
  singapore: { coordinates: [103.8198, 1.3521], name: 'Singapore' },
  indonesia: { coordinates: [106.8456, -6.2088], name: 'Jakarta, Indonesia' },
};

// Animation variants
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const mapContainerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const sidebarVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

const listItemVariants: Variants = {
  hidden: { opacity: 0, x: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

export function MarketsSection() {
  const [hoveredMarket, setHoveredMarket] = useState<string | null>(null);
  const [, setTooltipContent] = useState('');

  return (
    <Section id="markets" background="gradient">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={headerVariants}
            className="text-center max-w-3xl mx-auto space-y-4"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Our Markets
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Strategic presence across key Asian markets
            </motion.p>
          </motion.div>

          {/* Map Container */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={mapContainerVariants}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="grid lg:grid-cols-3">
              {/* Interactive Map Visualization */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="lg:col-span-2 p-8 md:p-12 bg-linear-to-br from-blue-50 to-gray-50"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative w-full h-[500px] bg-white rounded-xl shadow-inner border border-gray-200 overflow-hidden"
                >
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      center: [110, 15],
                      scale: 400,
                    }}
                    className="w-full h-full"
                  >
                    <ZoomableGroup center={[110, 15]} zoom={1}>
                      <Geographies geography={GEO_URL}>
                        {({ geographies }) =>
                          geographies
                            .filter((geo) => {
                              const asianCountries = [
                                'China', 'Hong Kong', 'Thailand', 'Malaysia',
                                'Singapore', 'Indonesia', 'Vietnam', 'Philippines',
                                'Myanmar', 'Cambodia', 'Laos', 'Brunei', 'India',
                                'Bangladesh', 'Japan', 'South Korea', 'North Korea',
                                'Taiwan', 'Mongolia',
                              ];
                              return asianCountries.includes(geo.properties.name);
                            })
                            .map((geo) => {
                              const isHighlighted = MARKETS.some(
                                (market) =>
                                  geo.properties.name.toLowerCase().includes(market.country.toLowerCase()) ||
                                  market.country.toLowerCase().includes(geo.properties.name.toLowerCase())
                              );

                              return (
                                <Geography
                                  key={geo.rsmKey}
                                  geography={geo}
                                  fill={isHighlighted ? '#DBEAFE' : '#F3F4F6'}
                                  stroke="#D1D5DB"
                                  strokeWidth={0.5}
                                  style={{
                                    default: { outline: 'none' },
                                    hover: {
                                      outline: 'none',
                                      fill: isHighlighted ? '#BFDBFE' : '#E5E7EB',
                                      cursor: 'pointer',
                                    },
                                    pressed: { outline: 'none' },
                                  }}
                                  onMouseEnter={() => {
                                    setTooltipContent(geo.properties.name);
                                  }}
                                  onMouseLeave={() => {
                                    setTooltipContent('');
                                  }}
                                />
                              );
                            })
                        }
                      </Geographies>

                      {/* Market Markers */}
                      {MARKETS.map((market, index) => {
                        const location = MARKET_COORDINATES[market.id];
                        if (!location) return null;

                        const isHovered = hoveredMarket === market.id;

                        return (
                          <Marker
                            key={market.id}
                            coordinates={location.coordinates}
                            onMouseEnter={() => setHoveredMarket(market.id)}
                            onMouseLeave={() => setHoveredMarket(null)}
                          >
                            {/* Animated pulsing outer circle */}
                            <motion.circle
                              r={isHovered ? 12 : 10}
                              fill="#3B82F6"
                              fillOpacity={0.2}
                              initial={{ scale: 0 }}
                              animate={{
                                scale: isHovered ? [1, 1.2, 1] : 1,
                              }}
                              transition={{
                                duration: 1,
                                repeat: isHovered ? Infinity : 0,
                                ease: 'easeInOut',
                              }}
                            />

                            {/* Main marker with animation */}
                            <motion.circle
                              r={isHovered ? 8 : 6}
                              fill={isHovered ? '#F59E0B' : '#3B82F6'}
                              stroke="#fff"
                              strokeWidth={2}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{
                                delay: index * 0.1,
                                type: 'spring',
                                stiffness: 200,
                                damping: 15,
                              }}
                              style={{ cursor: 'pointer' }}
                            />

                            {/* Label for hovered marker */}
                            {isHovered && (
                              <g>
                                <motion.rect
                                  x={-50}
                                  y={-35}
                                  width={100}
                                  height={24}
                                  fill="#1F2937"
                                  rx={4}
                                  opacity={0.95}
                                  initial={{ scale: 0, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 0.95 }}
                                  transition={{ duration: 0.2 }}
                                />
                                <motion.text
                                  textAnchor="middle"
                                  y={-20}
                                  style={{
                                    fontFamily: 'system-ui',
                                    fontSize: '12px',
                                    fontWeight: 600,
                                    fill: '#fff',
                                  }}
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.1, duration: 0.2 }}
                                >
                                  {market.country}
                                </motion.text>
                              </g>
                            )}
                          </Marker>
                        );
                      })}

                      {/* Connecting Lines with animation */}
                      {MARKETS.slice(0, -1).map((market, index) => {
                        const start = MARKET_COORDINATES[market.id];
                        const end = MARKET_COORDINATES[MARKETS[index + 1].id];

                        if (!start || !end) return null;

                        return (
                          <motion.line
                            key={`line-${market.id}`}
                            x1={start.coordinates[0]}
                            y1={start.coordinates[1]}
                            x2={end.coordinates[0]}
                            y2={end.coordinates[1]}
                            stroke="#3B82F6"
                            strokeWidth={0.5}
                            strokeDasharray="2,2"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 0.3 }}
                            transition={{
                              delay: 0.5 + index * 0.1,
                              duration: 0.8,
                              ease: 'easeInOut',
                            }}
                            style={{ pointerEvents: 'none' }}
                          />
                        );
                      })}
                    </ZoomableGroup>
                  </ComposableMap>
                </motion.div>
              </motion.div>

              {/* Markets List */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sidebarVariants}
                className="p-8 bg-white"
              >
                <motion.div
                  className="flex items-center space-x-2 mb-6"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <Globe className="w-6 h-6 text-primary-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-gray-900">Active Markets</h3>
                </motion.div>

                <motion.div className="space-y-3" variants={sidebarVariants}>
                  {MARKETS.map((market) => (
                    <motion.div
                      key={market.id}
                      variants={listItemVariants}
                      whileHover={{
                        scale: 1.03,
                        x: 5,
                        transition: { type: 'spring', stiffness: 300, damping: 20 },
                      }}
                      whileTap={{ scale: 0.98 }}
                      className={`flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 cursor-pointer ${hoveredMarket === market.id
                        ? 'bg-primary-50 border-2 border-primary-500 shadow-md'
                        : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                        }`}
                      onMouseEnter={() => setHoveredMarket(market.id)}
                      onMouseLeave={() => setHoveredMarket(null)}
                    >
                      <motion.div
                        animate={
                          hoveredMarket === market.id
                            ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] }
                            : { scale: 1, rotate: 0 }
                        }
                        transition={{ duration: 0.5 }}
                      >
                        <MapPin
                          className={`w-5 h-5 transition-colors ${hoveredMarket === market.id ? 'text-primary-600' : 'text-gray-400'
                            }`}
                        />
                      </motion.div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{market.country}</div>
                        <div className="text-xs text-gray-500">{market.code}</div>
                      </div>
                      {market.isActive && (
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [1, 0.7, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="mt-8 pt-6 border-t border-gray-200"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.5,
                      },
                    },
                  }}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      variants={statsVariants}
                      whileHover={{
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.3 },
                      }}
                      className="text-center p-3 bg-linear-to-br from-primary-50 to-blue-50 rounded-lg cursor-default"
                    >
                      <motion.div
                        className="text-2xl font-bold text-primary-600"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          damping: 10,
                          delay: 0.6,
                        }}
                      >
                        {MARKETS.length}
                      </motion.div>
                      <div className="text-xs text-gray-600 mt-1">Countries</div>
                    </motion.div>

                    <motion.div
                      variants={statsVariants}
                      whileHover={{
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                        transition: { duration: 0.3 },
                      }}
                      className="text-center p-3 bg-linear-to-br from-accent-50 to-blue-50 rounded-lg cursor-default"
                    >
                      <motion.div
                        className="text-2xl font-bold text-accent-600"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          stiffness: 200,
                          damping: 10,
                          delay: 0.75,
                        }}
                      >
                        100%
                      </motion.div>
                      <div className="text-xs text-gray-600 mt-1">Coverage</div>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}