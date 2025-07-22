import React from 'react';

interface BenefitItem {
  title: string;
  value: string;
  description: string;
}

interface BenefitsPagesProps {
  heading: string;
  description: string;
  buttonText: string;
  benefits: BenefitItem[];
  onButtonClick?: () => void;
}

const BenefitsPages: React.FC<BenefitsPagesProps> = ({
  heading,
  description,
  buttonText,
  benefits,
  onButtonClick
}) => {
  return (
    <section className="mx-auto py-10 2xl:w-2/3 w-11/12 max-w-7xl font-nunito lg:flex gap-5 items-center">
      <div className="lg:w-1/2">
        <div className="space-y-7 lg:text-md text-base">
          <h2 className="font-semibold lg:text-4xl text-3xl text-primary font-inter">{heading}</h2>
          <p>{description}</p>
        </div>
        <div className="py-8">
          <button
            onClick={onButtonClick}
            className="w-28 h-9 justify-center rounded-md bg-primary text-white hover:bg-primary/80 transition-all duration-500 ease-in flex gap-2 items-center relative z-20"
          >
            {buttonText}
          </button>
        </div>
      </div>

      <div className="lg:w-1/2 md:flex gap-5">
        {[0, 1].map((col) => (
          <div key={col} className={`md:w-1/2 ${col === 1 ? 'md:pt-20 pt-5' : ''} space-y-5`}>
            {benefits
              .filter((_, i) => i % 2 === col)
              .map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white border border-black py-10 px-5 w-62 rounded-xl space-y-2"
                >
                  <p className="text-2xl">{benefit.title}</p>
                  <br />
                  <span className="text-5xl font-bold">{benefit.value}</span>
                  <p className="text-md">{benefit.description}</p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsPages;
