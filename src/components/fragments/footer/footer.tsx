"use client";
import { format } from "date-fns-tz";
import { useMemo } from "react";
import { LuArrowUp } from "react-icons/lu";

export const Footer = () => {
  const currentYear = useMemo(() => format(new Date(), "yyyy"), []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: smooth scrolling
    });
  };

  return (
    <footer className="flex justify-between mt-24">
      <p className="text-muted-foreground">
        &copy; Dimas Angkasa Nurindra {currentYear}{" "}
      </p>
      <button
        onClick={scrollToTop}
        className="flex items-center gap-1 cursor-pointer group"
      >
        <LuArrowUp className="size-5 group-hover:transform group-hover:-translate-y-1/3 transition-transform duration-300 ease-in-out" />
        <span className="group-hover:underline"> Back to Top</span>
      </button>
    </footer>
  );
};
