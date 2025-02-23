import Image from "next/image";
import Link from "next/link";
import About from "@/public/assets/sidehug-1.webp"

const AboutUs = () => {
  return (
    <section className="py-16 bg-white md:px-16 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At <span className="text-muted font-semibold">Bristlecore Innovations</span>, we are passionate about turning ideas into reality. 
            Our expertise spans across **branding, web development, mobile applications, data analysis, and AI solutions**. 
            We craft **exceptional digital experiences** that help businesses **stand out, grow, and innovate** in a competitive world.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you need a visually stunning **brand identity**, a high-performing **website**, or cutting-edge **AI-driven solutions**, 
            we’ve got you covered. **Your success is our mission.**
          </p>
          <Link href="/services">
            <button className="bg-muted text-gray-100 px-6 py-3 font-semibold rounded-lg shadow-md hover:shadow-lg transition">
              Explore Our Services
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="relative">
          <Image
            src={About}
            alt="About Us"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -top-6 -left-6 bg-secondary text-white px-4 py-2 text-sm font-semibold rounded-lg">
            5+ Years of Excellence
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
