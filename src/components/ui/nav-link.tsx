import { Link, useLocation } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  icon: LucideIcon;
}

export function NavLink({ to, children, icon: Icon }: NavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={cn(
        'group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
        isActive ? 'bg-accent' : 'transparent'
      )}
    >
      <Icon className="mr-2 h-4 w-4" />
      <span>{children}</span>
    </Link>
  );
}