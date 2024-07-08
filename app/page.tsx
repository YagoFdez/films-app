'use client'

import Image from "next/image";
import { Movies } from "./components/Movies/Movies";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function Home() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1>Films</h1>
        <Movies/>
      </div>
    </main>
    </QueryClientProvider>
  );
}
