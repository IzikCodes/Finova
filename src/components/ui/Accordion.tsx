import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-6">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;

        return (
          <div
            key={index}
            className="rounded-xl border border-accent/20 bg-secondary
                       shadow-lg transition-all duration-300
                       hover:shadow-accent/40 hover:-translate-y-1"
          >
            <button
              onClick={() => toggle(index)}
              className="group flex w-full items-center justify-between p-6 text-left"
            >
              <span className="text-white font-semibold tracking-wide">
                {item.title}
              </span>

              <ChevronDown
                className={`transition-all duration-300 ${
                  isOpen
                    ? "rotate-180 text-accent"
                    : "text-slate-400 group-hover:text-accent"
                }`}
              />
            </button>

            {/* Smooth Animated Content */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-slate-300 text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}