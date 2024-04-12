import Image from "next/image";

const CoreFeatures = () => {
  return (
    <section className="container mx-auto px-4 md:px-16 flex flex-col lg:flex-row items-center lg:gap-20 gap-14">
      <div className="flex flex-col gap-2 flex-1">
        <span className="text-rose-600 uppercase block font-semibold tracking-widest">
          PRODUCT HIGHLIGHT
        </span>
        <h2 className=" capitalize text-3xl md:text-4xl xl:text-5xl font-bold my-3">
          Surface AI for more conversions
        </h2>
        <p className="text-lg leading-loose">
          Surface AI matches your products with customers' ideal designs, exposing your product to customers with the strongest purchase intent.
        </p>
        <button className="mt-5 w-fit md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-3 px-8 md:px-10 text-white bg-rose-600 hover:border-rose-600 hover:bg-rose-600 hover:shadow-rose-600 hover:shadow-2xl rounded-full">
          Explore
        </button>
      </div>

      <div className="flex-1 relative w-full">
        <div className="md:before:w-full md:before:h-full md:before:absolute md:before:-bottom-24 lg:before:-bottom-20 xl:before:-right-5 lg:before:-right-12 md:before:-right-16 md:before:bg-right-bottom md:before:bg-contain md:before:bg-no-repeat before:-z-50 before:bg-none md:before:bg-[url('/videobg.png')]">
          <Image
            src={"/features/core-feature-1.png"}
            width={300}
            height={300}
            alt="core features"
            className="object-cover w-full md:w-[90%] xl:w-4/5"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
