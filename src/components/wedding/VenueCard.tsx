import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";

interface VenueCardProps {
  name: string;
  address?: string;
  mapUrl?: string;
  lat?: number;
  lng?: number;
}

export function VenueCard({ name, address, mapUrl }: VenueCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>📍 {name}</CardTitle>
      </CardHeader>
      <CardContent>
        {address && <p className="text-gray-600 dark:text-gray-300">{address}</p>}
        {mapUrl && (
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-sm font-medium text-brand-primary hover:text-brand-primary-dark"
          >
            View on Map →
          </a>
        )}
      </CardContent>
    </Card>
  );
}
