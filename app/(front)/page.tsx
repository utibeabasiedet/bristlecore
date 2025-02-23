
import Link from "next/link"
import { ArrowRight, Code2, Boxes } from "lucide-react"
import TrustedBrands from "@/components/frontend/brands";
import AboutUs from "@/components/frontend/about";

export default function Home() {
  return (
    <div className="bg-primary">
      {/* hero section */}
  


    <section className="w-full min-h-[90vh] flex items-center bg-black">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="h-1 w-8 bg-[#FEF200]" />
                <p className="text-white font-medium">Software Development Agency</p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                We Build <span className="text-[#21409A]">Digital Solutions</span> That Drive Growth
              </h1>
              <p className="text-lg text-zinc-400 max-w-[600px]">
                Transform your business with cutting-edge software solutions. We deliver innovative, scalable, and
                secure applications that help you stay ahead.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#21409A] hover:bg-[#21409A]/90 text-white font-medium rounded-lg transition-colors"
              >
                Start Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center justify-center px-6 py-3 border border-zinc-800 hover:bg-zinc-900 text-white font-medium rounded-lg transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#21409A]/20 rounded-full blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-4">
                <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800">
                  <Code2 className="w-8 h-8 text-[#FEF200]" />
                  <h3 className="mt-4 text-lg font-semibold text-white">Custom Development</h3>
                </div>
                <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800">
                  <Boxes className="w-8 h-8 text-[#ED1B24]" />
                  <h3 className="mt-4 text-lg font-semibold text-white">Scalable Solutions</h3>
                </div>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <div className="p-6 bg-[#21409A] rounded-2xl">
                  <h3 className="text-3xl font-bold text-white">10+</h3>
                  <p className="text-zinc-200">Years Experience</p>
                </div>
                <div className="p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800">
                  <h3 className="text-3xl font-bold text-white">200+</h3>
                  <p className="text-zinc-200">Project Delivered</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <TrustedBrands />
    <AboutUs />
 


    </div>
  );
}
