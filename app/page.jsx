import Feed from "@components/Feed";

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Ignite Your Imagination with
      <br className="max-md:hidden" />
      <span className="orange_gradient head_logo text-center"> Inspiro</span>
    </h1>
    <p className="desc text-center">
      Inspiro is your portal to boundless creativity and inspiration. Join our
      vibrant community of creators and visionaries today and experience the
      transformative power of AI-driven prompts to fuel your imagination.
    </p>

    <Feed />
  </section>
);

export default Home;
