import Typewriter from "typewriter-effect";
const Banner = () => {
  return (
    <div className="h-screen text-white flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold">
        Hi, I&apos;m <span className="text-[#ff0052]">MD. Shafiul Alom</span>
      </h2>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2500)
            .typeString(
              "<span style='font-size:80px;font-weight:bold'>I'm a Graphics <span style='color:#ff0052'>Designer</span></span>"
            )
            .pauseFor(300)
            .deleteChars(8)
            // .typeString("<span style='font-size:70px'>Designer</span>")
            .typeString(
              "<span style='font-size:80px;font-weight:bold;color:#ff0052'>Expert</span>"
            )
            .pauseFor(1000)
            .start();
        }}
        options={{
          autoStart: true,
          loop: true,
        }}
      />
      {/* <h3 className="text-4xl font-bold">I&apos;m Graphics Expart!</h3>
      <h4 className="text-2xl font-semibold">I will visualize your imagination</h4> */}
    </div>
  );
};

export default Banner;
