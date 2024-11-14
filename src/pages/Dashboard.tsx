import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/lib/auth';
import { StudentDashboard } from '@/components/dashboard/StudentDashboard';
import { SAGDashboard } from '@/components/dashboard/SAGDashboard';
import { FinanceDashboard } from '@/components/dashboard/FinanceDashboard';

export function DashboardPage() {
  const { user } = useAuth();

  const renderDashboard = () => {
    switch (user?.role) {
      case 'student':
        return <StudentDashboard />;
      case 'sag':
        return <SAGDashboard />;
      case 'finance':
        return <FinanceDashboard />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, {user?.name}</h1>
      {renderDashboard()}
    </div>
  );
}