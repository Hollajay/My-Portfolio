export const Header = () => {
  return (
    <div className="w-full h-screen flex items-center lg:px-20 md:px-10">
      <div className="lg:px-28 p-4 mt-32 space-y-3">
        <p className="text-2xl font-subhead text-light-400">Hi, my name is</p>
        <h1 className="md:text-7xl text-4xl text-light-500 font-bold text-400">
          Ologunagba Olajide
        </h1>
        <h1 className="md:text-5xl text-2xl font-bold text-light-300">
          A web Developer
        </h1>
        <p className="lg:pr-40 md:text-xl text- text-light-300 ">
          I am a dedicated Software Engineer with over two years plus of
          experience, specializing in Frontend Development. I have a strong
          track record of building user-friendly and SEO-optimized web
          applications, debugging large-scale projects, and solving complex
          problems efficiently.
        </p>
        <div className="space-x-5" data-aos="fade-up">
          <button className="py-3 rounded-lg button-blink px-8 border-2 bg-light-400 border-light-400 text-light-100 ">
            Hire me
          </button>
          <button className="py-3 px-8 border-2 rounded-lg border-light-400 text-light-400">
            Download cv
          </button>
        </div>
      </div>
    </div>
  );
};
