import React from 'react';

const ContactSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-16 mt-20">
          <p className="text-[#4e1a51] text-sm text-[18px] font-bold  uppercase mb-2">Contact</p>
          <h1 className="text-[40px] md:text-[65px] font-bold text-[#4e1a51] leading-tight mb-6">
            Get in touch with us
          </h1>
          <p className="max-w-3xl mx-auto text-gray-600 text-base md:text-lg">
            Ready to bring authentic Asian flavours to your business? We'd love to hear from you and help you find exactly what you need.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-start">
          
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-[60%] space-y-4">
            <input 
              type="text" 
              placeholder="Name*" 
              className="w-full px-5 py-4 rounded-xl bg-[#E5E5E5] border-none text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[#4e1a51] outline-none"
            />
            <input 
              type="email" 
              placeholder="Email*" 
              className="w-full px-5 py-4 rounded-xl bg-[#E5E5E5] border-none text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[#4e1a51] outline-none"
            />
            <input 
              type="text" 
              placeholder="Phone*" 
              className="w-full px-5 py-4 rounded-xl bg-[#E5E5E5] border-none text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[#4e1a51] outline-none"
            />
            <textarea 
              placeholder="Message*" 
              rows={6} 
              className="w-full px-5 py-4 rounded-xl bg-[#E5E5E5] border-none text-gray-800 placeholder:text-gray-500 focus:ring-2 focus:ring-[#4e1a51] outline-none resize-none"
            />
            
        

            {/* Submit Button */}
            <button className="w-full md:w-auto px-16 py-4 bg-[#4e1a51] text-white rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#3d4d09] transition-all">
              Send message
            </button>
          </div>

          {/* Right Side: Info Details */}
          <div className="w-full md:w-[40%] space-y-10 pt-4">
            
            <div className="space-y-2">
              <h3 className="text-[32px] font-bold text-[#4e1a51]">Visit us</h3>
              <p className="text-gray-700 leading-relaxed">
                Bull Close Road Lenton Industrial Estate, Nottingham <br />
                NG7 2UT, England.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[32px] font-bold text-[#4e1a51]">Call us</h3>
              <p className="text-gray-700 text-xl font-medium">+44 (0) 115 985 1301</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-[32px] font-bold text-[#4e1a51]">Email us</h3>
              <a 
                href="mailto:customer.service@tigertigerfoods.com" 
                className="text-gray-700 hover:text-[#4e1a51] transition-colors"
              >
                customer.service@tigertigerfoods.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;