import { cn } from "@/shared/lib";
import Link from "next/link";

export function DesktopNavLink({ href, children, isScrolled }: { href: string; children: React.ReactNode, isScrolled: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        'relative',
        'transition-colors duration-300 ease-out',
        'font-medium text-sm lg:text-base',
        'group',
        isScrolled ? 'text-primary-500' : 'text-white'

      )}
    >
      {children}
      {/* Animated underline with glass effect */}
      <span
        className={cn(
          'absolute -bottom-1 left-0 h-0.5',
          'w-0 group-hover:w-full',
          'transition-all duration-300 ease-out',
          'rounded-full',
          'shadow-sm',
          isScrolled ? 'bg-linear-to-r from-primary-500 via-primary-400 to-primary-300' : 'bg-linear-to-r from-primary-100 via-primary-200 to-accent-400',
        )}
      />
    </Link>
  );
}
