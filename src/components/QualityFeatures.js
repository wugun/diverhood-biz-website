import Image from "next/image";

const QualityFeature = ({ imgSrc, title, desc }) => {
  return (
    <div className="flex items-start lg:flex-row sm:flex-col gap-1 sm:gap-4 lg:gap-8">
      <Image src={imgSrc} width={80} height={80} alt="features" />
      <div className="leading-loose">
        <h3 className="text-lg md:text-xl font-semibold mb-4">{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

const QualityFeatures = () => {
  return (
    <section className="container mx-auto px-5 md:px-16">
      <span className="service-name text-center ">MEET DIVERHOOD</span>
      <h2 className="title text-center ">How does Diverhood boost your sales</h2>

      <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 mt-10 md:mt-20 lg:w-[88%] mx-auto">
        <QualityFeature
          imgSrc="/features/1.svg"
          title="Easy Onboarding"
          desc="Fast, secure onboarding assisted by our team ensures your products and shop would get exposed to furniture shoppers everywhere in days."
        />
        <QualityFeature
          imgSrc="/features/2.svg"
          title="AI Product Match"
          desc="Customers search furniture with AI-visualized design instead of keywords, which means only the customers with the strongest shopping intent can view your products."
        />
        <QualityFeature
          imgSrc="/features/3.svg"
          title="Fair Advertising"
          desc="Tired of Amazon and Wayfair where you get little traffic with thousands of dollars spent on ads? Diverhood is an alternative open only to SMB sellers like you."
        />
        <QualityFeature
          imgSrc="/features/4.svg"
          title="Customer Support"
          desc="Our team of experts stand by you to help you navigate on the world's first and only AI-Commerce platform. Got any questions? Ask away."
        />
      </div>
    </section>
  );
};

export default QualityFeatures;
