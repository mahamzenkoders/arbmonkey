import { Button } from '@/components/ui/button';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import MobileNavItems from './MobileNavItems';
import { AlignJustify } from 'lucide-react';

export function MobileNavBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='outline'>
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-white'>
        <MobileNavItems />
      </SheetContent>
    </Sheet>
  );
}
