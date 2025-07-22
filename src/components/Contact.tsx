const Contact = ({ contact, heading }) => {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12  lg:pb-0 pb-2">
      <h2 className="text-3xl text-primary md:text-4xl font-semibold text-center mb-10">
        {heading}
      </h2>
    
      {contact.map((region) => (
        <div key={region.name} className="mb-16">
          <h3 className="text-2xl  font-semibold text-center mb-12">
            {region.name}
          </h3>
    
          <div className="flex flex-wrap gap-16 justify-center">
            {region.countries.map((country) => (
              <div key={country.name} className="w-72 text-center">
                <h4 className="text-lg font-bold mb-4">{country.name}</h4>
    
                <ul className="space-y-2">
                  {country.numbers.map((num, index) => (
                    <li key={`${country.name}-${index}`}>
                      <a
                        href={`tel:${num.number.replace(/\s/g, '')}`}
                        className="text-base font-semibold text-primary hover:underline"
                      >
                        {num.number}{' '}
                        <span className="font-normal text-gray-600">
                          ({num.language})
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    
    );
  };
  
  export default Contact;
  