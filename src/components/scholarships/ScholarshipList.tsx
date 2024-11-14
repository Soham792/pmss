import { useState } from 'react';
import { ScholarshipCard } from './ScholarshipCard';
import { ScholarshipForm } from './ScholarshipForm';

const MOCK_SCHOLARSHIPS = [
  {
    id: '1',
    title: 'Merit Excellence Scholarship',
    amount: 50000,
    deadline: '2024-05-15',
    category: 'Merit-based',
  },
  {
    id: '2',
    title: 'Need-based Financial Aid',
    amount: 75000,
    deadline: '2024-05-20',
    category: 'Need-based',
  },
  {
    id: '3',
    title: 'Research Innovation Grant',
    amount: 100000,
    deadline: '2024-05-25',
    category: 'Research',
  },
];

export function ScholarshipList() {
  const [selectedScholarship, setSelectedScholarship] = useState<{
    id: string;
    title: string;
  } | null>(null);

  const handleApply = (id: string) => {
    const scholarship = MOCK_SCHOLARSHIPS.find((s) => s.id === id);
    if (scholarship) {
      setSelectedScholarship({
        id: scholarship.id,
        title: scholarship.title,
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MOCK_SCHOLARSHIPS.map((scholarship) => (
          <ScholarshipCard
            key={scholarship.id}
            scholarship={scholarship}
            onApply={handleApply}
          />
        ))}
      </div>
      
      <ScholarshipForm
        open={!!selectedScholarship}
        onClose={() => setSelectedScholarship(null)}
        scholarship={selectedScholarship}
      />
    </div>
  );
}