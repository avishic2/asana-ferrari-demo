export type NavItemProps = {
  ariaLabel: string;
  href: string;
  label: string;
  iconSrc: string;
  linkVariant: string;
  iconWrapperVariant?: string;
  iconVariant: string;
  indicatorVariant: string;
};

export const NavItem = (props: NavItemProps) => {
  return (
    <a
      aria-label={props.ariaLabel}
      href={props.href}
      className={`items-center box-border caret-transparent flex fill-neutral-500 h-8 bg-[position:0px_0px] mb-0.5 pl-1.5 rounded-lg hover:bg-white/10 ${props.linkVariant}`}
    >
      <div className="items-center caret-transparent flex fill-neutral-400 shrink-0 h-5 justify-center w-5">
        {props.iconWrapperVariant ? (
          <div className="relative items-center caret-transparent flex fill-neutral-400 h-5 justify-center w-5">
            <img
              src={props.iconSrc}
              alt="Icon"
              className={`caret-transparent shrink-0 ${props.iconVariant}`}
            />
          </div>
        ) : (
          <img
            src={props.iconSrc}
            alt="Icon"
            className="caret-transparent h-5 w-5"
          />
        )}
      </div>
      <span className="text-stone-100 caret-transparent block fill-neutral-500 leading-[22px] text-ellipsis text-nowrap overflow-hidden ml-2">
        {props.label}
      </span>
      <div
        className={`caret-transparent fill-neutral-500 ${props.indicatorVariant}`}
      ></div>
    </a>
  );
};
