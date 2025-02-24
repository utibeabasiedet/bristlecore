import { Code2, Smartphone, Cloud, Shield, Database, LineChart, ArrowRight } from "lucide-react"

export default function Services() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-zinc-50 to-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-1/2 -right-24 w-72 h-72 bg-[#FEF200]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#21409A]/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(33, 64, 154, 0.05) 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <div className="flex items-center space-x-4">
            <div className="h-1 w-8 bg-[#21409A]" />
            <p className="text-[#21409A] font-medium">Our Services</p>
            <div className="h-1 w-8 bg-[#21409A]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900">Comprehensive Software Solutions</h2>
          <p className="text-zinc-600 max-w-[600px] text-lg">
            We offer end-to-end software development services to help your business thrive in the digital age
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white/80 backdrop-blur-sm rounded-2xl border border-zinc-200/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col space-y-4">
                <span className="p-3 w-fit rounded-lg bg-[#21409A]/10 text-[#21409A]">
                  {<service.icon className="w-6 h-6" />}
                </span>
                <h3 className="text-xl font-semibold text-zinc-900">{service.title}</h3>
                <p className="text-zinc-600">{service.description}</p>
                <div className="pt-4 flex items-center text-[#21409A] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your specific business requirements and drive growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications that provide seamless user experiences across devices.",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to modernize your business operations.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets and ensure data privacy.",
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Efficient database design, optimization, and maintenance services for optimal performance.",
  },
  {
    icon: LineChart,
    title: "Digital Transformation",
    description: "Strategic guidance and implementation to help your business embrace digital innovation.",
  },
]

