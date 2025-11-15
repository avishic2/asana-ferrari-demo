export type TabItemProps = {
  label: string;
  iconUrl: string;
  spanVariant: string;
  showBottomBorder?: boolean;
};

export const TabItem = (props: TabItemProps) => {
  return (
    <li className="text-neutral-500 font-medium caret-transparent flex fill-neutral-500 text-nowrap">
      <div className="relative items-center caret-transparent flex fill-neutral-500 h-5 justify-center text-nowrap mb-1.5 px-2 py-1 rounded-md hover:bg-orange-950/0">
        <div
          role="tab"
          aria-label={props.label}
          className="items-center caret-transparent flex fill-neutral-500 text-nowrap hover:text-zinc-900 hover:border-zinc-900"
        >
          <span className="caret-transparent block fill-neutral-500 text-nowrap">
            <span
              className={`items-center caret-transparent flex fill-neutral-500 text-nowrap ${props.spanVariant}`}
            >
              <img
                src={props.iconUrl}
                alt="Icon"
                className="caret-transparent shrink-0 h-3 text-nowrap w-3 mr-1"
              />
              <span className="caret-transparent block fill-neutral-500 leading-[22px] max-w-[200px] text-ellipsis text-nowrap overflow-hidden">
                {props.label}
              </span>
            </span>
          </span>
        </div>
        {props.showBottomBorder && (
          <div className="absolute caret-transparent fill-neutral-500 text-nowrap w-[calc(100%_-_16px)] border-neutral-500 border-b-2 -bottom-1.5"></div>
        )}
      </div>
    </li>
  );
};
