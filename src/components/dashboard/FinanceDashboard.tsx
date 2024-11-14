import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  CreditCard,
  DollarSign,
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
} from 'lucide-react';

export function FinanceDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Pending Disbursements</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-2xl font-bold">₹125,000</p>
                <p className="text-sm text-muted-foreground">
                  8 applications pending
                </p>
              </div>
              <DollarSign className="h-8 w-8 text-muted-foreground" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Today's Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Processed</span>
                </div>
                <span className="font-medium">₹45,000</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-yellow-500" />
                  <span>Pending</span>
                </div>
                <span className="font-medium">₹80,000</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full justify-between" variant="outline">
                <span className="flex items-center">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Process Payments
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button className="w-full justify-between" variant="outline">
                <span className="flex items-center">
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Review Pending
                </span>
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
              >
                <div>
                  <p className="font-medium">Scholarship Payment #{i}</p>
                  <p className="text-sm text-muted-foreground">
                    Processed 2 days ago
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">₹15,000</p>
                  <p className="text-sm text-green-500">Completed</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}