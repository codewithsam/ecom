"use client";

import { Tabs, TabsList, TabsTrigger } from "@repo/ui/components/ui/tabs";

const Subheader = ({ config, Link }: { config: any; Link: any }) => {
  return (
    <>
      <div className="ui-w-[100%] ui-flex ui-justify-center [&_a]:ui-w-[100%] [&_a]:ui-p-2 [&_a]:ui-h-[100%] [&_a]:ui-block [&_button]:ui-pt-0 [&_button]:ui-pb-0">
        <Tabs defaultValue="" className="w-[400px]">
          <TabsList>
            {config.buttons.map(({ title, path }: { title: string; path: string }) => {
              return (
                <TabsTrigger value={path} key={path} style={{ padding: "0" }}>
                  <Link href={path}>{title}</Link>
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </>
  );
};

export default Subheader;
