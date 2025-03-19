// TODO: Add redirect to project page
// TODO: Add custom animation
// TODO: Send email or connect on linkedin

export const ContactSection = () => {
  return (
    <section id="contact" className="space-y-2">
      <div className="rounded-md bg-foreground text-background px-2 py-1 text-sm mx-auto w-fit">
        Connect 💌
      </div>
      <h2 className="text-center">Say Hello 👋</h2>
      <p className="text-pretty font-sans text-sm sm:text-base leading-6 text-muted-foreground text-center">
        Have an exciting project in mind, a brilliant idea you&apos;re eager to
        discuss, or simply want to explore new possibilities within the realm of
        web development and design{"? "}
        <a
          className="dark:text-white text-foreground underline"
          href="mailto:mas.angkasa27@gmail.com"
        >
          Drop me an email
        </a>
      </p>
      <p className="text-pretty font-sans text-sm sm:text-base leading-6 text-muted-foreground text-center">
        Let&apos;s connect
        {" on "}
        <a
          className="dark:text-white text-foreground underline"
          href="https://www.linkedin.com/in/dimasangkasa"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        to expand our networks and discover how we can grow together
      </p>
    </section>
  );
};
