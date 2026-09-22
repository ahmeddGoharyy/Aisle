interface LoveStorySectionProps {
  title: string;
  body: string;
  imageUrl?: string;
  orderIndex: number;
}

export function LoveStorySection({ title, body, imageUrl, orderIndex }: LoveStorySectionProps) {
  const isReversed = orderIndex % 2 === 1;

  return (
    <div className={`flex flex-col gap-8 md:flex-row ${isReversed ? "md:flex-row-reverse" : ""}`}>
      {imageUrl && (
        <div className="flex-shrink-0 md:w-1/2">
          <img
            src={imageUrl}
            alt={title}
            className="h-64 w-full rounded-xl object-cover shadow-elevated md:h-80"
          />
        </div>
      )}
      <div className={`flex flex-col justify-center ${imageUrl ? "md:w-1/2" : "w-full"}`}>
        <h2 className="font-heading text-2xl font-semibold text-gray-900 dark:text-gray-100">
          {title}
        </h2>
        <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">{body}</p>
      </div>
    </div>
  );
}
