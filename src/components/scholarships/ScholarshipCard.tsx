import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, DollarSign } from 'lucide-react';

interface ScholarshipCardProps {
  scholarship: {
    id: string;
    title: string;
    amount: number;
    deadline: string;
    category: string;
  };
  onApply: (id: string) => void;
}

export function ScholarshipCard({ scholarship, onApply }: ScholarshipCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{scholarship.title}</CardTitle>
            <Badge variant="secondary" className="mt-2">
              {scholarship.category}
            </Badge>
          </div>
          <div className="flex items-center text-lg font-semibold text-green-600 dark:text-green-400">
            <DollarSign className="h-5 w-5" />
            {scholarship.amount.toLocaleString('en-IN', {
              style: 'currency',
              currency: 'INR',
            })}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4" />
          <span>Deadline: {new Date(scholarship.deadline).toLocaleDateString()}</span>
        </div>
        <Button className="w-full" onClick={() => onApply(scholarship.id)}>
          Apply Now
        </Button>
      </CardContent>
    </Card>
  );
}