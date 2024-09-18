import { Skeleton } from '@/components/ui/skeleton';

export function SkeletonCard() {
  return (
    <div className='bg-white p-4 rounded-lg shadow-md'>
      <div className='flex flex-col'>
        <div className='flex items-center space-x-3'>
          <Skeleton className='h-10 w-20 rounded-[35%] bg-gray-300' />{' '}
          <div>
            <Skeleton className='h-4 w-[150px] bg-gray-300' />{' '}
            <Skeleton className='h-4 w-[100px] mt-1 bg-gray-300' />{' '}
          </div>
        </div>

        <div className='mt-4'>
          <Skeleton className='h-6 w-[250px] mb-2 bg-gray-300' />{' '}
          <Skeleton className='h-4 w-[200px] bg-gray-300' />{' '}
          <Skeleton className='h-4 w-[180px] bg-gray-300' />{' '}
        </div>
      </div>
    </div>
  );
}
