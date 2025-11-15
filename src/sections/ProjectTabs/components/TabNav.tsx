import { TabItem } from "@/sections/ProjectTabs/components/TabItem";

export const TabNav = () => {
  return (
    <nav className="caret-transparent flex fill-neutral-500 text-nowrap">
      <ul className="caret-transparent flex fill-neutral-500 list-none max-w-full text-nowrap pl-0">
        <div className="absolute bg-[linear-gradient(90deg,rgb(255,255,255)_20%,rgba(255,255,255,0)_100%)] caret-transparent fill-neutral-500 h-full text-nowrap w-6 z-10 -ml-6"></div>
        <div
          role="presentation"
          className="items-end caret-transparent flex fill-neutral-500 h-[42px] min-w-px text-nowrap overflow-auto -ml-6 -mt-2"
        >
          <div className="caret-transparent fill-neutral-500 text-nowrap">
            <div className="caret-transparent fill-neutral-500 text-nowrap">
              <div className="caret-transparent gap-x-1 flex fill-neutral-500 h-full text-nowrap w-full">
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap ml-4">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="Overview"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-38.svg"
                        spanVariant="hover:text-zinc-900 hover:border-zinc-900"
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="List"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-39.svg"
                        spanVariant="hover:text-zinc-900 hover:border-zinc-900"
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="Board"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-40.svg"
                        spanVariant="text-zinc-900"
                        showBottomBorder={true}
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="Timeline"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-41.svg"
                        spanVariant="hover:text-zinc-900 hover:border-zinc-900"
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="Dashboard"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-42.svg"
                        spanVariant="hover:text-zinc-900 hover:border-zinc-900"
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="Calendar"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-43.svg"
                        spanVariant="hover:text-zinc-900 hover:border-zinc-900"
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="Workflow"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-44.svg"
                        spanVariant="hover:text-zinc-900 hover:border-zinc-900"
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="Messages"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-45.svg"
                        spanVariant="hover:text-zinc-900 hover:border-zinc-900"
                      />
                    </div>
                  </div>
                </div>
                <div className="caret-transparent fill-neutral-500 shrink-0 text-nowrap">
                  <div className="caret-transparent fill-neutral-500 h-full text-nowrap w-full">
                    <div className="caret-transparent fill-neutral-500 text-nowrap">
                      <TabItem
                        label="Files"
                        iconUrl="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-46.svg"
                        spanVariant="hover:text-zinc-900 hover:border-zinc-900"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="items-center caret-transparent gap-x-1 flex fill-neutral-500 gap-y-1 text-nowrap pb-1">
          <div className="caret-transparent fill-neutral-500 text-nowrap">
            <div
              role="button"
              aria-label="Add tab"
              className="items-center box-border caret-transparent inline-flex fill-neutral-500 h-7 justify-center min-h-7 min-w-7 text-nowrap w-7 border bg-[position:0px_0px] rounded-md border-solid border-transparent hover:bg-orange-950/0"
            >
              <img
                src="https://c.animaapp.com/mhy17x94TAovbr/assets/icon-47.svg"
                alt="Icon"
                className="caret-transparent shrink-0 h-4 text-nowrap w-4"
              />
            </div>
          </div>
        </div>
      </ul>
    </nav>
  );
};
