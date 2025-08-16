import { InfiniteSlider } from "@/components/fragments/infinite-slider/infinite-slider";
import { STACK } from "@/constants/stack";

// TODO: Change stack to colored icon
// TODO: Change stack to front end, back end, and complementary tools

export const StackSection = () => {
  return (
    <section id="stack">
      <div className="relative max-sm:-mx-6">
        {STACK.map((stack, index) => (
          <InfiniteSlider
            key={index}
            speedOnHover={10}
            speed={40 - index * 5}
            reverse={index % 2 === 1}
          >
            {stack.map((item, i) => (
              <div
                key={i}
                className="flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50 mb-4"
              >
                <item.icon />
                <p>{item.name}</p>
              </div>
            ))}
          </InfiniteSlider>
        ))}{" "}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </section>
  );
};
