const Menu = ({ config, Link }: { config: any; Link: any }) => {
  return (
    <>
      <div className="ui-w-[100px] ui-h-screen ui-bg-[#e2e4e7] ui-fixed ui-left-0 ui-top-[45px]">
        <div>
          {config.items.map(({ title, path }: { title: string; path: string }) => {
            return (
              <li
                className="[&_a:hover]:ui-text-[blue] ui-flex ui-flex-col ui-m-0 ui-p-0 [&_a]:ui-w-[100px] [&_a]:ui-block [&_a]:ui-h-[100%] [&_a]:ui-py-[10px] [&_a]:ui-px-[15px] [&_a]:ui-border-b-[2px] [&_a]:ui-border-solid [&_a]:ui-border-[#ccc]"
                key={path}
              >
                <Link href={path}>{title}</Link>
              </li>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
