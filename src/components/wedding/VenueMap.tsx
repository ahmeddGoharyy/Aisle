interface VenueMapProps {
  lat: number;
  lng: number;
  name: string;
}

export function VenueMap({ lat, lng, name }: VenueMapProps) {
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${lat},${lng}&zoom=15`;

  return (
    <div className="overflow-hidden rounded-xl shadow-soft">
      <iframe
        src={mapSrc}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map of ${name}`}
      />
    </div>
  );
}
