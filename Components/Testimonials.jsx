function Testimonials() {
    return (
      <section className="testimonials py-20">
        <div className="container mx-auto p-4 ">
          <h2 className="text-3xl font-bold mb-4">What our users say</h2>
          
          <ul className="flex flex-wrap justify-center ">
         
            <li className="w-full md:w-1/2 xl:w-1/3 p-4 border-gray-600" >
              <p className="text-lg">"I found my dream job through this platform! Thank you so much!"</p>
              <p className="text-lg text-gray-600">- John Doe</p>
            </li>
     

            <li className="w-full md:w-1/2 xl:w-1/3 p-4">
              <p className="text-lg">"This platform is so easy to use and has so many job listings!"</p>
              <p className="text-lg text-gray-600">- Jane Doe</p>
            </li>
            
            <li className="w-full md:w-1/2 xl:w-1/3 p-4">
              <p className="text-lg">"I got an internship through this platform and it was an amazing experience!"</p>
              <p className="text-lg text-gray-600">- Bob Smith</p>
            </li>
          </ul>
        </div>
      </section>
    );
  }
  
  export default Testimonials;