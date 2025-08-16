'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 px-4">
        {/* Header skeleton */}
        <div className="space-y-4 text-center">
          <Skeleton className="mx-auto h-12 w-12 rounded-full bg-primary/20" />
          <Skeleton className="mx-auto h-8 w-32 bg-primary/20" />
          <Skeleton className="mx-auto h-4 w-48 bg-primary/20" />
        </div>
        
        {/* Content skeleton */}
        <div className="space-y-6">
          <div className="space-y-3">
            <Skeleton className="h-4 w-full bg-primary/20" />
            <Skeleton className="h-4 w-5/6 bg-primary/20" />
            <Skeleton className="h-4 w-4/6 bg-primary/20" />
          </div>
          
          <div className="space-y-3">
            <Skeleton className="h-4 w-full bg-primary/20" />
            <Skeleton className="h-4 w-3/4 bg-primary/20" />
          </div>
          
          <div className="pt-4">
            <Skeleton className="h-10 w-full rounded-lg bg-primary/20" />
          </div>
        </div>
        
        {/* Footer skeleton */}
        <div className="flex justify-center space-x-4 pt-8">
          <Skeleton className="h-10 w-10 rounded-full bg-primary/20" />
          <Skeleton className="h-10 w-10 rounded-full bg-primary/20" />
          <Skeleton className="h-10 w-10 rounded-full bg-primary/20" />
        </div>
      </div>
    </div>
  );
}