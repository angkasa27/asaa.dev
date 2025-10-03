import { NotFoundContainer } from "@/containers/not-found";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where do you think you're going?",
  description:
    "Hmmm... It seems the page you're looking for doesn't exist. Let's get you back on track!",
};

export default function NotFoundPage() {
  return <NotFoundContainer />;
}
