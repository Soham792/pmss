import { GraduationCap, LayoutDashboard, LogOut, Users, FileText, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { NavLink } from '@/components/ui/nav-link';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/auth';

export function Sidebar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="hidden border-r bg-background md:block">
      <div className="flex h-14 items-center border-b px-6">
        <GraduationCap className="h-6 w-6" />
        <span className="ml-2 font-semibold">PSMS</span>
      </div>
      <ScrollArea className="h-[calc(100vh-3.5rem)] px-3 py-2">
        <div className="space-y-1">
          <NavLink to="/dashboard" icon={LayoutDashboard}>
            Dashboard
          </NavLink>
          {user?.role === 'student' && (
            <>
              <NavLink to="/documents" icon={FileText}>
                Documents
              </NavLink>
              <NavLink to="/status" icon={Users}>
                Application Status
              </NavLink>
            </>
          )}
          {user?.role === 'sag' && (
            <NavLink to="/applications" icon={Users}>
              Review Applications
            </NavLink>
          )}
          {user?.role === 'finance' && (
            <>
              <NavLink to="/payments" icon={CreditCard}>
                Process Payments
              </NavLink>
              <NavLink to="/summary" icon={FileText}>
                Summary
              </NavLink>
            </>
          )}
        </div>
        <Separator className="my-4" />
        <div className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </ScrollArea>
    </div>
  );
}