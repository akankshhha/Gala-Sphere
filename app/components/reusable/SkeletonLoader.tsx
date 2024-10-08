import React from 'react';
import Skeleton from 'react-loading-skeleton';

const SkeletonLoader = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {Array.from({ length: 12 }).map((_, idx) => (
      <div key={idx} className="skeleton">
        <Skeleton height={300} />
        <Skeleton height={20} />
        <Skeleton height={20} />
      </div>
    ))}
  </div>
);

export default SkeletonLoader;
