import Image from "next/image";
import Brand1 from "@/public/assets/petromin.webp"
import Brand2 from "@/public/assets/akzo.webp"
import Brand3 from "@/public/assets/reserva.webp"
import Brand4 from "@/public/assets/kotak.webp"

const TrustedBrands = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Trusted by Leading Brands
        </h2>
        <p className="text-gray-600 mb-8">
          We have worked with top brands to deliver high-quality digital solutions.
        </p>

        {/* Brands Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <Image src={Brand1} alt="Brand 1" width={150} height={50} className="mx-auto" />
          <Image src={Brand2} alt="Brand 2" width={150} height={50} className="mx-auto" />
          <Image src={Brand3} alt="Brand 3" width={150} height={50} className="mx-auto" />
          <Image src={Brand4} alt="Brand 4" width={150} height={50} className="mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default TrustedBrands;
