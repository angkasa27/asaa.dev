<script lang="ts">
  const currentYear = new Date().getFullYear();

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-5 group-hover:transform group-hover:-translate-y-1/3 transition-transform duration-300 ease-in-out"
      aria-hidden="true"
    >
      <path d="m18 15-6-6-6 6"></path>
    </svg>
    <span class="group-hover:underline"> Back to Top</span>
  </button>
</footer>
