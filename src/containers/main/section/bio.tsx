// TODO: Add in animation to each component or even each word
// TODO: Add hover effect to some words

export const BioSection = () => {
  return (
    <section id="bio">
      <h2>About</h2>
      <div className="max-w-full text-pretty font-sans text-sm md:text-md leading-6 text-muted-foreground text-justify space-y-2 mt-2">
        <p>
          I’m Dimas, a Frontend Developer who loves turning ideas into clean,
          functional, and visually stunning web experiences. Whether it’s
          crafting pixel-perfect UI with React and Tailwind or optimizing
          performance to make things run buttery smooth, I’m all about pushing
          the web forward. Always experimenting, always learning, and always
          excited to build something that makes a difference.
        </p>
        <p>
          When I’m not coding, you’ll find me diving into graphic design, going
          for a run, or exploring new places to soak in fresh inspiration.
          Whether it’s creating, moving, or discovering, I’m always chasing new
          experiences that fuel my creativity.
        </p>
        {/* <p> Let’s connect and make something amazing! 🚀</p> */}
      </div>
    </section>
  );
};
