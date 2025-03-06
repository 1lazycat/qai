'use client';

import Link from 'next/link';
import { FileSearch } from 'lucide-react';
import { MainNav } from '@/components/main-nav';
import { ModeToggle } from '@/components/mode-toggle';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <div className="fixed inset-y-0 z-50 flex w-72 flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r bg-background px-6 pb-4">
            <div className="flex h-16 items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <FileSearch className="h-6 w-6" />
                <span className="font-bold">DocAnalyzer</span>
              </Link>
              <ModeToggle />
            </div>
            <MainNav />
          </div>
        </div>

        {/* Main content */}
        <main className="pl-72 w-full">
          <div className="px-8 py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}