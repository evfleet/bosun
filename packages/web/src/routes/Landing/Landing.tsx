import clsx from "clsx";

import Layout from "@/components/Layout";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <Layout>
      <section className="grid">
        <div className={classes.background} />

        <div className={clsx(classes.content, "container mx-auto p-4")}>
          <h1 className="mb-5 text-3xl font-semibold text-white">
            Let us take care of your images
          </h1>

          <p className="mb-5 text-white">
            Sit back and relax as we take care of your images so you can focus
            on your business instead of infrastructure. We'll make sure your
            images load fast, look great, and are always available.
          </p>

          <button className="rounded bg-green-500 px-4 py-2 font-semibold shadow-sm">
            Get Started
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Landing;
