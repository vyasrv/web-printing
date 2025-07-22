
import Image from 'next/image';

const HQSection = ({ offices }) => {
  return (
    <div className="bg-primary py-12 px-6 text-white font-nunito">
      <div className="max-w-6xl mx-auto space-y-16">
        {offices.map((office, index) => (
          <div 
            key={office.id || index}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center gap-8`}
          >
            <div className="w-full md:w-1/2">
              <Image
                src={office.image}
                alt={office.city}
                title={office.hq}
                width={600}
                height={400}
                className="rounded-xl object-cover w-full h-auto"
              />
            </div>
            <div className="w-full md:w-1/2 ">
              <h2 className="text-xl font-bold font-inter mb-2">
                {office.city} {office.hq && `(${office.hq})`}
              </h2>
              
              <p className="">Address</p>
              {Array.isArray(office.address) ? (
                office.address.map((line, i) => <p key={i}>{line}</p>)
              ) : (
                <p>{office.address}</p>
              )}
              
              {office.phone && (
                <>
                  <p className=" mt-4">Phone</p>
                  <a 
                    href={`tel:${office.phone.replace(/\s/g, '')}`} 
                    className=" font-medium hover:underline"
                  >
                    {office.phone}
                  </a>
                </>
              )}
              
              {office.email && (
                <>
                  <p className=" mt-4">Email</p>
                  <a 
                    href={`mailto:${office.email}`} 
                    className=" font-medium hover:underline"
                  >
                    {office.email}
                  </a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HQSection;