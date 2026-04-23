export default function Home() {
  const features = [
    {
      title: "Custom Learning Programs",
      desc: "Tailored programs designed for your workforce goals.",
    },
    {
      title: "Industry Certifications",
      desc: "Recognized certifications that build credibility.",
    },
    {
      title: "Dedicated Mentorship",
      desc: "Experts guiding learners throughout the journey.",
    },
    {
      title: "Employee Upskilling",
      desc: "Future-ready skills for business growth.",
    },
    {
      title: "Progress Tracking",
      desc: "Measure learning outcomes with real insights.",
    },
    {
      title: "24/7 Support",
      desc: "Always available assistance for your teams.",
    },
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "1M+", label: "Learners Trained" },
    { value: "95%", label: "Completion Rate" },
    { value: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      quote:
        "Accredian transformed our employee learning process. Engagement increased dramatically.",
      name: "HR Manager",
      company: "Tech Company",
    },
    {
      quote:
        "The certifications and mentorship helped our teams perform better.",
      name: "L&D Head",
      company: "Finance Company",
    },
    {
      quote:
        "One of the most effective workforce upskilling platforms we used.",
      name: "Operations Lead",
      company: "Startup",
    },
  ];

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 shadow-sm sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-blue-600">Accredian</h1>

        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#features" className="hover:text-blue-600 transition">
            Features
          </a>
          <a href="#stats" className="hover:text-blue-600 transition">
            Impact
          </a>
          <a href="#reviews" className="hover:text-blue-600 transition">
            Reviews
          </a>
          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition">
          Get Started
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6 bg-gradient-to-b from-blue-50 to-white">
        <p className="text-blue-600 font-semibold mb-3">
          Trusted Enterprise Learning Platform
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Upskill Your Workforce <br /> with Accredian
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Build future-ready teams with structured programs, certifications,
          mentorship, and measurable business outcomes.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg transition">
            Book Free Demo
          </button>

          <button className="border border-gray-300 hover:border-blue-600 px-8 py-4 rounded-xl text-lg transition">
            Explore Programs
          </button>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 md:px-10 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm p-6 text-center">
              <h3 className="text-3xl font-bold text-blue-600">{item.value}</h3>
              <p className="text-gray-500 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-6 md:px-10">
        <h3 className="text-4xl font-bold text-center mb-4">
          Why Choose Accredian
        </h3>

        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Everything your organization needs to train, grow, and retain talent.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl border shadow-sm hover:shadow-xl transition"
            >
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Grid */}
      <section id="reviews" className="py-20 bg-gray-50 px-6 md:px-10">
        <h3 className="text-4xl font-bold text-center mb-12">
          What Our Clients Say
        </h3>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
              <p className="italic text-gray-700">“{item.quote}”</p>
              <h4 className="mt-5 font-bold text-blue-600">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.company}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-6 md:px-10">
        <div className="max-w-3xl mx-auto bg-blue-50 rounded-3xl p-10">
          <h3 className="text-4xl font-bold text-center mb-4">
            Request a Free Consultation
          </h3>

          <p className="text-center text-gray-600 mb-8">
            Fill in your details and our team will reach out soon.
          </p>

          <form className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="email"
              placeholder="Work Email"
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="border rounded-xl px-4 py-3"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border rounded-xl px-4 py-3"
            />

            <button className="md:col-span-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl transition">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8">
        © 2026 Accredian Clone by Nikitha
      </footer>
    </main>
  );
}