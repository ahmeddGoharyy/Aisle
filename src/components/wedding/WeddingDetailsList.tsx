import { Card, CardContent } from "@/components/ui/Card";

interface WeddingDetail {
  key: string;
  value: string;
}

interface WeddingDetailsListProps {
  details: WeddingDetail[];
}

export function WeddingDetailsList({ details }: WeddingDetailsListProps) {
  return (
    <Card>
      <CardContent>
        <dl className="divide-y divide-gray-100 dark:divide-gray-700">
          {details.map((detail) => (
            <div key={detail.key} className="flex justify-between py-3">
              <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">{detail.key}</dt>
              <dd className="text-sm text-gray-900 dark:text-gray-100">{detail.value}</dd>
            </div>
          ))}
        </dl>
      </CardContent>
    </Card>
  );
}
