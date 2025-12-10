'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Dispatch, SetStateAction } from 'react';
import { cn, scrollToElement } from '@/shared/lib';
import { COMPANY_INFO, NAVIGATION } from '@/pages/home/model/content';
import { DesktopNavLink } from './DesktopNavLink';

type TProps = {
  isScrolled: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export function NavDesktop({
  isScrolled,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: TProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToElement(sectionId);
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50',
        'transition-all duration-500 ease-out'
      )}
    >
      <div
        className={cn(
          'mx-auto transition-all duration-500 ease-out',
          isScrolled
            ? 'max-w-7xl px-12 sm:px-6 py-3'
            : 'max-w-full px-6 sm:px-8 py-5'
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between',
            'transition-all duration-500 ease-out',
            isScrolled && [
              'rounded-2xl',
              'bg-white/80 backdrop-blur-xl',
              'px-4 sm:px-6 py-3.5',
              'border border-white/20',
              'shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
              'ring-1 ring-black/5',
            ],
            !isScrolled && ['border border-transparent']
          )}
        >
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 sm:gap-3 group relative z-10">
            {/* <div
              className={cn(
                'relative overflow-hidden rounded-xl sm:rounded-2xl',
                'bg-gradient-to-br from-primary-600 via-primary-500 to-accent-500',
                'flex items-center justify-center',
                'transition-all duration-300 ease-out',
                'group-hover:scale-110 group-hover:rotate-3',
                'shadow-lg group-hover:shadow-xl',
                'group-hover:shadow-primary-500/50',
                isScrolled ? 'w-10 h-10' : 'w-11 h-11 sm:w-12 sm:h-12'
              )}
            >
              <span className="text-white font-bold text-lg sm:text-xl relative z-10">
                NBF
              </span>
              <div
                className={cn(
                  'absolute inset-0',
                  'bg-gradient-to-br from-white/40 via-white/10 to-transparent',
                  'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300'
                )}
              />
            </div> */}
            <div>
              <span
                className={cn(
                  'font-semibold',
                  'transition-all duration-300 ease-out',
                  'group-hover:text-transparent group-hover:bg-clip-text',
                  'group-hover:bg-linear-to-r group-hover:from-primary-100 group-hover:via-primary-200 group-hover:to-accent-400',
                  isScrolled ? 'text-lg sm:text-xl text-primary-500' : 'text-xl sm:text-2xl text-accent-50'
                )}
              >
                {COMPANY_INFO.name}
              </span>
              <p
                className={cn(
                  'text-xs text-primary-200 hidden sm:block transition-all duration-300',
                  isScrolled ? 'opacity-0 h-0' : 'opacity-100'
                )}
              >
                {COMPANY_INFO.tagline}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAVIGATION.map((item, idx) => (
              <DesktopNavLink
                key={idx}
                href={item?.href}
                isScrolled={isScrolled}
              >
                {item?.label}
              </DesktopNavLink>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className={cn(
                'hidden md:flex group relative overflow-hidden',
                'px-5 lg:px-6 py-2.5 rounded-full font-medium',
                // Glass button effect
                'backdrop-blur-xl backdrop-saturate-150',
                'bg-gray-900/90 hover:bg-gray-900',
                'text-white',
                'items-center gap-2',
                'transition-all duration-300 ease-out',
                'hover:scale-105',
                'shadow-lg hover:shadow-xl',
                'hover:shadow-gray-500/50',
                'active:scale-95',
                'border border-gray-700/20'
              )}
            >
              {/* Animated gradient background */}
              <div
                className={cn(
                  'absolute inset-0',
                  'bg-gradient-to-r from-primary-600 to-accent-600',
                  'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-300'
                )}
              />
              <span className="relative z-10">Get in Touch</span>
              <svg
                className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            {/* Mobile Menu Button - Glass style */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'lg:hidden p-2.5 rounded-xl',
                'backdrop-blur-xl backdrop-saturate-150',
                'bg-gray-100/80 hover:bg-gray-200/80',
                'border border-gray-200/50',
                'transition-all duration-300 ease-out',
                'active:scale-90',
                'shadow-sm',
                isMobileMenuOpen && 'bg-gray-200/80'
              )}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <Menu
                  className={cn(
                    'absolute inset-0 w-5 h-5',
                    'transition-all duration-300 ease-out',
                    isMobileMenuOpen
                      ? 'rotate-90 opacity-0 scale-0'
                      : 'rotate-0 opacity-100 scale-100'
                  )}
                />
                <X
                  className={cn(
                    'absolute inset-0 w-5 h-5',
                    'transition-all duration-300 ease-out',
                    isMobileMenuOpen
                      ? 'rotate-0 opacity-100 scale-100'
                      : '-rotate-90 opacity-0 scale-0'
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}