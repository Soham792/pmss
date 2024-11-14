import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileUp, Clock, CheckCircle } from 'lucide-react';
import { ScholarshipList } from '@/components/scholarships/ScholarshipList';

export function StudentDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Application Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-yellow-500" />
              <p className="text-lg font-medium">Under Review</p>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Last updated 2 hours ago
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>ID Proof</span>
                </div>
                <Button size="sm" variant="outline">
                  <FileUp className="h-4 w-4 mr-2" />
                  Update
                </Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <span>Income Certificate</span>
                </div>
                <Button size="sm" variant="outline">
                  <FileUp className="h-4 w-4 mr-2" />
                  Upload
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Complete document verification</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Wait for SAG review</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Scholarships</CardTitle>
        </CardHeader>
        <CardContent>
          <ScholarshipList />
        </CardContent>
      </Card>
    </div>
  );
}