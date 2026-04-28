import React from 'react';

const TigerAboutBody = () => {
  return (
    <main className="bg-[#FFFDF9]">
      
      {/* 1. Who We Are Section */}
      <section className="my-20 px-6 text-center max-w-7xl sm:mt-[50px] md:mt-40">
        <span className="text-[#4B2452] font-bold tracking-widest text-[20px]">ABOUT US</span>
        <h1 className="text-[50px] text-[#4B2452] mt-4 mb-4 font-black uppercase">
          Who We Are
        </h1>

        <div className="space-y-6 text-[#333333] leading-relaxed text-lg text-justify md:text-center">
          <p>
            Tiger Tiger has been a developer and supplier of Asian foods and services to major hubs, 
            including supermarkets, retailers, restaurants and direct customers, for a long time. 
            Our parent company, JK FOODS UK, with nearly five decades of experience, is widely 
            recognised in the market for providing authenticity in products. Founded by Mark Johal, 
            who recognised the demand for high-quality, authentic Asian flavours, he sought out 
            the very best-tasting, quality Asian foods from the Far East. He began by introducing 
            exceptional quality and taste preferred across the UK, Europe, and the Americas. 
            To this day, the brand is well-known for its dedication to delivering taste and 
            quality to customers at manageable prices.
          </p>
          <p>
            At Tiger Tiger, we redefine value without compromising on the flavours that make every 
            bite memorable. Our consistent quality and recognition for a taste appreciated by 
            individuals and professional kitchens alike let us lead developers of Asian food. 
            We keep offering a deep variety of food products that spans Japanese, Thai, Chinese, 
            and Indian cuisines and commit to keeping up the trend. By providing a range of tasty 
            possibilities with top quality, we only aim to support businesses and elevate dishes 
            for the desired effect. With this approach and commitment, we will continue bringing 
            the combination of quality, irresistible taste, and competition.
          </p>
          <p>
            Across the UK’s kitchens! Try Tiger Tiger, the UK’s leading developers of Asian food, 
            and fill your kitchens with the texture and aroma you recall at events. 
            Within a single supplier, you will have multiple options dedicated to being delivered across 
            Japanese, Thai, Chinese, Korean, Vietnamese, and Indian cuisines.
          </p>
        </div>

        <div className="mt-10 flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full border-2 border-[#4B2452] text-[#4B2452] font-bold hover:bg-[#4B2452] hover:text-white transition">
            View Products
          </button>
          <button className="px-8 py-3 rounded-full bg-[#4B2452] text-white font-bold hover:opacity-90 transition">
            Discover Cuisine
          </button>
        </div>
      </section>

      {/* 2. Our Food Section */}
      <section className="max-w-7xl mx-auto my-20 px-4">
        <div className="p-10 md:p-16 bg-[#4B2452] backdrop-blur-lg border border-white/20 rounded-[10px] shadow-xl flex flex-col md:flex-row items-stretch gap-12">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-4xl text-white mb-6 font-black uppercase" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              Our Food
            </h2>
            <p className="text-lg text-white mb-4">
              At Tiger Tiger UK, we redefine value without compromising on the flavours.
            </p>
            <p className="text-white text-lg">
              Our commitment is to bring authentic flavours to our valued customers.
            </p>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <div className="h-[80%] border-l-4 border-white"></div>
          </div>

          <div className="flex-1 w-full flex items-center justify-center">
            <p className="text-white text-lg leading-relaxed text-justify md:text-left">
              We are the UK’s leading developers of Asian food, offering a diverse selection that spans Japanese, Thai, Chinese, and Indian cuisines. We provide a range of tasty possibilities with our top-quality ingredients that make and enhance your dishes. At Tiger Tiger UK, we guarantee unmatched quality, irresistible taste, and competitive pricing. Our commitment is to bring authentic flavours to our valued customers, ensuring an unparalleled culinary experience.
            </p>
          </div>
        </div>
      </section>

      {/* 3. How We Develop Section */}
      <section className="max-w-7xl mx-auto my-20 px-6">
        <div className="bg-[#F8F1E2] backdrop-blur-lg border border-white/20 rounded-[10px] shadow-xl grid md:grid-cols-2">
          <div className="p-12 md:p-20 flex flex-col justify-center gap-8">
            <p className="text-[#4B2452] text-lg leading-relaxed font-medium text-justify">
              We begin our development of Asian foods by delving deeply into the culinary heritage of Asia. This leads us to draw inspiration from centuries-old recipes and cooking techniques. Since supplying indicates a specific chore and a thoughtful process to adhere to multiple food services, we partner with experts. Working with our expert chefs and food artists paves a way for us to specialise in Asian cuisine. That’s where we keep every product creation sticking true to its origins.
            </p>
            <p className="text-[#4B2452] text-lg leading-relaxed font-medium text-justify">
              In our every step is excellence and skill on top. We don’t just list but carefully source the finest ingredients. Our tasty products collection includes aromatic spices, premium frozen food, and fresh produce that offer authentic flavours and textures. With current and rising trends like sustainability preferences, we keep serving ethical sourcing practices. We aim to partner with suppliers who share our commitment to environmental stewardship.
            </p>
          </div>

          <div className="p-12 md:p-20 border-l-0 md:border-l-4 border-[#4B2452]/20 flex flex-col justify-center">
            <h2 className="text-5xl text-[#4B2452] mb-6 font-black uppercase">
              How We Develop
            </h2>
            <p className="text-[#4B2452]/90 text-lg leading-relaxed text-justify md:text-left">
              Tiger Tiger begins with research and strategic planning, with researching and strategising many options. We keep attuned to our customers’ and partners’ needs in developing our range of Asian foods. Our passion for authenticity, quality, and culinary excellence is the foundation that reflects our understanding that Asian cuisine is as diverse as it is flavourful. This is why we organise our product listings to honour the rich traditions and regional nuances, making each dish unique.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Choose Tiger Tiger Section */}
      <section className="my-20 px-6 max-w-7xl mx-auto text-center">
        <p className="text-[#4B2452] text-lg mb-2 italic">Ok But Why</p>
        <h2 className="text-4xl text-[#4B2452] mb-2 font-black uppercase"> Choose Tiger Tiger Foods UK?</h2>
        <p className="text-[#4B2452] text-lg mb-10">Let Us Simplify It For You.</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#4B2452] p-10 rounded-3xl hover:shadow-lg transition">
            <h3 className="text-white md:text-[24px] mb-4 font-bold uppercase">High Quality</h3>
            <p className="text-lg text-white text-justify">
              We assure the essence of what’s best with Asian ingredients. Celebrating natural colours 
              and fermented delicacies across the UK food spots, we take pride in our offerings. 
              Our authentic taste of pan-Asian cuisine is the result of combined effort, planning, 
              strategy, and sourcing from the Far East. We continually expand but extend across 
              borders to bring the real taste and textures. So, our customers delight their appetites 
              and discerning palates with premium Asian flavours. Tiger Tiger embraces authenticity 
              and serves in the UK, Europe, and the Americas, ensuring a global culinary journey.
            </p>
          </div>
          <div className="bg-[#FEF3D2] p-10 rounded-3xl hover:shadow-lg transition border border-[#4B2452]/10">
            <h3 className="text-[#4B2452] md:text-[24px] mb-4 font-bold uppercase">Affordable Rates</h3>
            <p className="text-lg text-[#4B2452]/80 text-justify">
              Beyond quality in every flavour and in every taste, Tiger Tiger is concerned with its customers’ and businesses’ budgets. Hence, we plan ahead of the product supply and serve strategically when developed. This allows us to keep prices fair and accessible for each food item without the quality being compromised. An efficient sourcing, developing, and management of the supply chain makes us unique in offering customers access and grabbing the attention of a wider audience.
            </p>
          </div>
          <div className="bg-[#4B2452] p-10 rounded-3xl hover:shadow-lg transition">
            <h3 className="text-white md:text-[24px] mb-4 font-bold uppercase">Mesmerising Taste</h3>
            <p className="text-lg text-white text-justify">
              Tiger Tiger helps create delectable dishes with carefully selected ingredients to bring you the authentic taste of Asia, no matter where you are. From our irresistibly flavourful sauces, pastes, and curries to our tempting range of frozen foods, core products, and all the essential ingredients, each item is designed to make every bite an irresistible journey into the heart of Asian cuisine.
            </p>
          </div>
        </div>
      </section>

      {/* 5. How We Work Section */}
      <section className="my-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#4B2452] text-lg mb-2 italic">Want To Know More About Us?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2452] mb-6 uppercase" style={{ fontFamily: 'serif' }}>
            How we work
          </h2>
          <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed text-[15px] md:text-center text-justify">
            Tiger Tiger works to fulfil a mission to bring the authentic flavours and culinary Asian trends to every table around the United Kingdom. This approach leads us to have a focus and dedication towards our work on sourcing and developing the highest quality food products. Our customers will get a delight in every bite, and businesses will thrive. Here's how we ensure our quality transports bring vibrancy to the streets and bustling markets of Asia:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F8F1E2] p-8 rounded-sm">
            <h3 className="text-lg font-bold text-[#4B2452] mb-4 uppercase">Cultural understanding & expertise</h3>
            <p className="text-[#4B2452] text-[14px] leading-relaxed text-justify">
              We have highly inspired food enthusiasts in our team that work more interestingly than just to fulfill the responsibility. Their cultural understanding and deep passion for Asian cuisines sure the rich tapestry of Asian culinary traditions. We immerse ourselves in exploring diverse flavours, ingredients, and cooking techniques that keep us innovation drivers for keeping the culinary alive and lasting.
            </p>
          </div>
          <div className="bg-[#F5F5F5] p-8 rounded-sm">
            <h3 className="text-lg font-bold text-[#4B2452] mb-4 uppercase">Global Sourcing</h3>
            <p className="text-[#4B2452] text-[14px] leading-relaxed text-justify">
              Tiger Tiger doesn't just rely on the name or fame but on self-research and assessment. That's why we scour the Asian markets that can help us source the finest ingredients and products from trusted suppliers and producers. We have earned an extensive network of trusted partners in the region, opening up our access and extending our services for a wide variety of authentic and premium-quality ingredients.
            </p>
          </div>
          <div className="bg-[#F5F5F5] p-8 rounded-sm">
            <h3 className="text-lg font-bold text-[#4B2452] mb-4 uppercase">Innovation and Adaptability</h3>
            <p className="text-[#4B2452] text-[14px] leading-relaxed text-justify">
              If it belongs to success, it is tied to effort! With innovation as our focus and a future-driven method, we never hesitate to adapt to new trends. That's why our customers trust us and keep us at the forefront of the Asian food industry. Through research, experimentation, and creative exploration, we constantly push the boundaries of flavour and innovation.
            </p>
          </div>
          <div className="bg-[#F8F1E2] p-8 rounded-sm">
            <h3 className="text-lg font-bold text-[#4B2452] mb-4 uppercase">Collaborative Development</h3>
            <p className="text-[#4B2452] text-[14px] leading-relaxed text-justify">
              Our Asian ingredient offerings are the result of close collaboration with chefs, culinary experts, and food artisans across Asia. With this escort and trust, we develop unique and innovative food products. While keeping ahead with the modern interpretations, we never leave traditional recipes passed down through generations.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Call to Action Banner */}
      <section className="bg-[#4E1A51] mt-20 py-20 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-10">
            Tiger Tiger are explorers and ambassadors of Asian cuisine. Our customer-first approach in Asian food supply and passion for discovery keep us committed to making stories real. We are dedicated to satisfying our customers while sharing the vibrant and diverse flavours of Asia with the world.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white px-10 py-3 rounded-full font-bold text-[#4E1A51] shadow-sm hover:bg-gray-100 transition">
              Contact Us
            </button>
            <button className="bg-white px-10 py-3 rounded-full font-bold text-[#4E1A51] shadow-sm hover:bg-gray-100 transition">
              Discover Products
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

export default TigerAboutBody;