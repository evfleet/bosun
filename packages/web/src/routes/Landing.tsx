import Layout from "../components/Layout";

const Landing = () => {
  return (
    <Layout>
      <div className="flex gap-4">
        <section className="basis-6/12">
          <h1 className="mb-5 text-4xl font-semibold">
            Let us deal with your images
          </h1>

          <p className="mb-4">
            Kick back and relax knowing your images are being taken care of.
            We'll make sure your images load fast, look great, and are always
            available.
          </p>

          <button className="rounded bg-blue-500 px-4 py-2 text-white shadow-sm">
            Get Started
          </button>
        </section>

        <section className="basis-6/12">
          <div className="flex h-full w-full content-center justify-center border-2 border-dashed border-gray-700">
            <button>Upload</button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;
