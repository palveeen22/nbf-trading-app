import { cn } from "@/shared/lib";
import Link from "next/link";

export function MobileNavLink({
  href,
  children,
  onClick,
  delay
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
  delay: string;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        'group flex items-center gap-3 px-4 py-3.5 rounded-xl',
        'text-lg font-medium text-gray-700 dark:text-gray-300',
        'hover:text-gray-900 dark:hover:text-white',
        // Glass hover effect
        'backdrop-blur-xl',
        'hover:bg-gray-100/60 dark:hover:bg-gray-800/60',
        'hover:border hover:border-gray-200/50 dark:hover:border-gray-700/50',
        'transition-all duration-300 ease-out',
        'active:scale-95',
        'opacity-0 translate-y-4 animate-fade-in-up',
        delay
      )}
    >
      <span className="relative">
        {children}
        <span 
          className={cn(
            'absolute -bottom-0.5 left-0 h-0.5',
            'bg-linear-to-r from-blue-500 to-purple-600',
            'w-0 group-hover:w-full',
            'transition-all duration-300 ease-out',
            'rounded-full'
          )}
        />
      </span>
      <svg
        className={cn(
          'w-4 h-4 ml-auto opacity-0 -translate-x-2',
          'group-hover:opacity-100 group-hover:translate-x-0',
          'transition-all duration-300 ease-out'
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </Link>
  );
}