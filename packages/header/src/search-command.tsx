"use client";
import { Command, CommandInput } from "@repo/ui/components/ui/command";

export default function SearchCommand() {
  return (
    <>
      <div style={{ flexGrow: 1 }}>
        <Command className="rounded-lg border shadow-md md:min-w-[450px]">
          <CommandInput placeholder="This is a dummy search" />
        </Command>
      </div>
    </>
  );
}
