import Image from 'next/image';

function Heros() {
  return (
    <div className='flex'> 
    <section className="hero is-fullheight is-bold">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Find your dream job or internship</h1>
        <p className="text-lg mb-8">Search for jobs and internships from top companies and startups</p>
        <Image src="/job-search.jpg" alt="Job Search" width={500} height={300} className="rounded-lg shadow-lg" />
      </div>
    </section>
     <section className="">
     <div className="container mx-auto p-4">
       <h1 className="text-4xl font-bold mb-4">Find your dream job or internship</h1>
       <p className="text-lg mb-8">Search for jobs and internships from top companies and startups</p>
       <Image src="/job-search.jpg" alt="Job Search" width={500} height={300} className="rounded-lg shadow-lg" />
     </div>
   </section>
   </div>
  );
}

export default Heros;