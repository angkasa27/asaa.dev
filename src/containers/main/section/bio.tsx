// TODO: Add in animation to each component or even each word
// TODO: Add hover effect to some words

export const BioSection = () => {
  return (
    <section id="bio">
      <h3>About</h3>
      <div className="max-w-full text-pretty font-sans text-sm sm:text-base leading-6 text-muted-foreground text-justify space-y-2 mt-2">
        <p>
          I’m Dimas, a Software Engineer who delivers enterprise systems
          end-to-end and a front-end creative at heart. By day I design robust
          architectures, implement features across the stack, and own
          deployment: provisioning servers, hardening access, and automating
          releases so shipping is smooth and repeatable.
        </p>
        <p>
          Outside the enterprise lane, I specialize in stunning, high-polish
          websites and portfolio experiences with thoughtful layouts, clean
          typography, accessible design, and subtle motion that feels alive. I
          care about performance, maintainability, and details that delight.
        </p>
        {/* <p> Let’s connect and make something amazing! 🚀</p> */}
      </div>
    </section>
  );
};
