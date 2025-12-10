'use client';

import { NAVIGATION } from '@/pages/home/model/content';
import { cn, scrollToElement } from '@/shared/lib';
import { X } from 'lucide-react';
import { SetStateAction } from 'react';

type TProps = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: SetStateAction<boolean>) => void;
};

export function NavMobile({ setIsMobileMenuOpen, isMobileMenuOpen }: TProps) {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToElement(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={cn(
        'fixed right-0 top-0 bottom-0 z-50',
        'w-full max-w-sm',
        // Glass effect
        'backdrop-blur-2xl backdrop-saturate-150',
        'bg-white/80',
        'shadow-2xl',
        'border-l border-white/20',
        'transition-transform duration-500 ease-out lg:hidden',
        'overflow-y-auto',
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      {/* Mobile Menu Header - Glass */}
      <div
        className={cn(
          'flex items-center justify-between p-6',
          'border-b border-gray-200/50',
          'backdrop-blur-xl',
          'bg-white/60'
        )}
      >
        <span className="text-xl font-semibold text-gray-900">Menu</span>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className={cn(
            'p-2 rounded-xl',
            'backdrop-blur-xl',
            'bg-gray-100/80 hover:bg-gray-200/80',
            'border border-gray-200/50',
            'transition-colors duration-200'
          )}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div className="flex flex-col p-6 space-y-1">
        {NAVIGATION.map((item, index) => (
          <a
            key={item.id}
            href={item.href}
            onClick={(e) => handleNavClick(e, item.href)}
            className={cn(
              'px-4 py-3 rounded-xl font-medium',
              'text-gray-700 hover:text-primary-600',
              'backdrop-blur-sm',
              'hover:bg-gray-100/80',
              'transition-all duration-300',
              'opacity-0 translate-y-4 animate-fade-in-up',
              `animation-delay-${(index + 1) * 50}`
            )}
            style={{ animationDelay: `${(index + 1) * 50}ms` }}
          >
            {item.label}
          </a>
        ))}

        <div
          className={cn(
            'pt-6 opacity-0 translate-y-4 animate-fade-in-up'
          )}
          style={{ animationDelay: `${(NAVIGATION.length + 1) * 50}ms` }}
        >
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className={cn(
              'flex items-center justify-center gap-2',
              'w-full px-6 py-3.5 rounded-xl',
              // Glass button
              'backdrop-blur-xl backdrop-saturate-150',
              'bg-gradient-to-r from-primary-600/90 to-accent-600/90',
              'hover:from-primary-600 hover:to-accent-600',
              'text-white font-medium',
              'transition-all duration-300 ease-out',
              'hover:shadow-lg hover:scale-105',
              'active:scale-95',
              'border border-white/20',
              'shadow-md'
            )}
          >
            <span>Get in Touch</span>
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </div>
  );
}