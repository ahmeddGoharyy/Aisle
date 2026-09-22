import { Avatar } from "@/components/ui/Avatar";

interface GuestbookEntryProps {
  authorName: string;
  authorImageUrl?: string;
  message: string;
  createdAt: string;
}

export function GuestbookEntry({ authorName, authorImageUrl, message, createdAt }: GuestbookEntryProps) {
  return (
    <div className="card animate-fade-in-up">
      <div className="flex items-start gap-4">
        <Avatar name={authorName} imageUrl={authorImageUrl} size="md" />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{authorName}</h4>
            <time className="text-xs text-gray-400">
              {new Date(createdAt).toLocaleDateString()}
            </time>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">{message}</p>
        </div>
      </div>
    </div>
  );
}
