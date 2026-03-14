<script lang="ts">
  import { format } from "date-fns-tz";
  import { LuArrowUp } from "react-icons/lu";

  const currentYear = format(new Date(), "yyyy");

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
</script>

<footer
  class="flex flex-col-reverse sm:flex-row items-center sm:justify-between mt-24 mb-10 md:mb-0 gap-6"
>
  <p class="text-muted-foreground text-sm sm:text-base">
    &copy; Dimas Angkasa Nurindra {currentYear}
  </p>
  <button
    onclick={scrollToTop}
    class="flex items-center gap-1 cursor-pointer group"
  >
    <LuArrowUp
      class="size-5 group-hover:transform group-hover:-translate-y-1/3 transition-transform duration-300 ease-in-out"
    />
    <span class="group-hover:underline"> Back to Top</span>
  </button>
</footer>
