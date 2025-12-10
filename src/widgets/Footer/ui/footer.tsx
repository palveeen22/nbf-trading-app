'use client';

import { COMPANY_INFO, NAVIGATION } from '@/pages/home/model/content';
import { scrollToElement } from '@/shared/lib';
import { Container } from '@/shared/ui';
import { Mail, MapPin } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToElement(sectionId);
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-linear-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">NBF</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {COMPANY_INFO.name}
                </h3>
              </div>
              <p className="text-sm text-gray-400 mb-4 max-w-md">
                {COMPANY_INFO.tagline}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed max-w-md">
                Leading wholesale distributor connecting Asian markets with quality products across multiple categories.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {NAVIGATION.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="text-sm hover:text-primary-400 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-primary-400" />
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="text-sm hover:text-primary-400 transition-colors break-all"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </li>
                <li className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary-400" />
                  <span className="text-sm">
                    Jakarta, Indonesia
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-400">
                © {currentYear} {COMPANY_INFO.legalName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
