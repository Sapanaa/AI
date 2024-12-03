import { SignedIn, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { FilePlus2 } from 'lucide-react';

function Header() {
  return (
    <div className="flex justify-between bg-white shadow-sm p-4">
      <Link href="/dashboard" className="text-2xl font-bold">
        Chat to <span className="text-indigo-600">PDF</span>
      </Link>

      <SignedIn>
        <div className="flex gap-2 items-center space-x-2">
          {/* Pricing Button */}
          <Button asChild variant="outline" className=" hover:bg-indigo-500">
            <Link href="/dashboard/upgrade">Pricing</Link>
          </Button>

          {/* My Documents Button */}
          <Button asChild variant="outline" className=" hover:bg-indigo-500">
            <Link href="/dashboard/upgrade">My Documents</Link>
          </Button>

          {/* Upload Button */}
          <Button asChild variant="outline" className=" hover:bg-indigo-500">
            <Link href="/dashboard/upload">
              <span className="flex items-center">
                <FilePlus2 className="mr-2 h-4 w-4" />
                
              </span>
            </Link>
          </Button>

          <UserButton />
        </div>
      </SignedIn>
    </div>
  );
}

export default Header;
