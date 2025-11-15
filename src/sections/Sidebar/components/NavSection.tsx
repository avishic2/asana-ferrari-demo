import { Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type NavSectionProps = {
  ariaLabel: string;
  title: string;
  hasNewButton?: boolean;
  newButtonAriaLabel?: string;
  items: Array<{
    label: string;
    href: string;
    iconUrl: string;
  }>;
};

export const NavSection = (props: NavSectionProps) => {
  return (
    <nav aria-label={props.ariaLabel} className="mb-6">
      <div className="flex items-center justify-between mb-2 py-1">
        <div className="flex items-center gap-1">
          <ChevronDown size={16} className="text-[#737373]" />
          <h2 className="text-xs font-semibold text-[#E5E5E5] uppercase tracking-wider">
            {props.title}
          </h2>
        </div>
        {props.hasNewButton && (
          <Button
            variant="ghost"
            size="icon"
            aria-label={props.newButtonAriaLabel}
            className="h-6 w-6 text-[#737373] hover:bg-[#181818] hover:text-[#DC0000]"
          >
            <Plus size={16} />
          </Button>
        )}
      </div>

      <div className="flex flex-col gap-0.5">
        {props.items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            aria-label={item.label}
            className="flex items-center gap-3 px-3 py-2 text-[#E5E5E5] hover:bg-[#181818] hover:text-white rounded-lg text-sm transition-all"
          >
            <img
              src={item.iconUrl}
              alt=""
              className="w-5 h-5 brightness-0 invert"
            />
            <span className="overflow-hidden text-ellipsis whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
};
