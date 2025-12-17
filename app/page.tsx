import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Warp } from "@paper-design/shaders-react"
import { Heart, Store, Leaf, Milk, ChefHat } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="fixed inset-0 -z-10 opacity-50">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1.2}
          distortion={0.2}
          swirl={0.8}
          swirlIterations={8}
          shape="checks"
          shapeScale={0.15}
          scale={1}
          rotation={0}
          speed={1.8}
          colors={["hsl(340, 100%, 85%)", "hsl(85, 100%, 90%)", "hsl(240, 100%, 90%)", "hsl(45, 100%, 88%)", "#FFD9C2"]}
        />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/40 via-white/20 to-white/40 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative backdrop-blur-[40px] bg-white/20 rounded-[2rem] shadow-[0_8px_32px_rgba(31,38,135,0.15),0_2px_16px_rgba(255,255,255,0.4)_inset] p-8 sm:p-12 lg:p-16 border border-white/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/30 to-transparent blur-2xl"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent blur-xl"></div>

                <div className="relative z-10 text-center space-y-8">
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-gray-800 text-balance">
                    Premium Ice Cream for Everyone
                  </h1>
                  <p className="text-xl sm:text-2xl text-gray-700 font-light text-balance">
                    Crafted with real fruit, pure milk, and love.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                    <Link
                      href="/products"
                      className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg"
                    >
                      Explore Our Flavors
                    </Link>
                    <Link
                      href="#about"
                      className="px-8 py-4 bg-white/70 backdrop-blur-sm text-gray-800 border-2 border-white/50 rounded-full font-semibold text-lg hover:scale-105 hover:bg-white/90 hover:shadow-lg transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                  {/* <div className="pt-8">
                    <img
                      src="/colorful-ice-cream-scoops-and-kulfi-sticks-arrange.jpg"
                      alt="Icezea Ice Cream Products"
                      className="mx-auto rounded-3xl shadow-2xl border border-white/30"
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/40 via-white/20 to-white/40 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative bg-white/20 backdrop-blur-[40px] rounded-[2rem] shadow-[0_8px_32px_rgba(31,38,135,0.15),0_2px_16px_rgba(255,255,255,0.4)_inset] p-8 sm:p-12 border border-white/30 overflow-hidden group-hover:shadow-[0_20px_60px_rgba(31,38,135,0.2),0_4px_20px_rgba(255,255,255,0.5)_inset] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/30 to-transparent blur-2xl"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent blur-xl"></div>

                <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-6">
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800">Our Story</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Icezea is a UAE-based premium ice cream manufacturer dedicated to crafting the finest frozen
                      treats. We believe in using only the best ingredients – real fruit purees, pure milk, and
                      authentic flavors that bring joy to every scoop.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our commitment to quality has made us a trusted name across the Emirates, serving over 350+
                      retailers and bringing smiles to families everywhere.
                    </p>
                    <div className="flex items-center gap-3 text-primary font-semibold text-xl">
                      <Store size={28} />
                      <span>Serving 350+ retailers across all Emirates</span>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="/icecreamI.jpg"
                      alt="Products Collage"
                      className="rounded-3xl shadow-2xl border border-white/30"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/40 via-white/20 to-white/40 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative backdrop-blur-[40px] bg-white/20 rounded-[2rem] shadow-[0_8px_32px_rgba(31,38,135,0.15),0_2px_16px_rgba(255,255,255,0.4)_inset] p-8 sm:p-12 border border-white/30 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/30 to-transparent blur-2xl"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent blur-xl"></div>

                <div className="relative z-10">
                  <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
                      Our Delicious Range
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                      From traditional kulfis to refreshing popsicles, discover our handcrafted collection
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="group/card backdrop-blur-[40px] bg-gradient-to-br from-white/30 to-white/15 border border-white/50 rounded-[1.5rem] p-8 hover:shadow-[0_16px_48px_rgba(31,38,135,0.25)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/30 to-transparent blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-center space-y-5">
                        <div className="relative overflow-hidden rounded-2xl aspect-square mb-2">
                          <img 
                            src="/kulfiImage.jpg" 
                            alt="Kulfis" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-800 group-hover/card:text-primary transition-colors duration-300">Kulfis</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">Malai, Pista, Butterscotch, Mango, Tender Coconut</p>
                        <Link
                          href="/products?category=kulfis"
                          className="inline-block mt-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                          See More
                        </Link>
                      </div>
                    </div>

                    <div className="group/card backdrop-blur-[40px] bg-gradient-to-br from-white/30 to-white/15 border border-white/50 rounded-[1.5rem] p-8 hover:shadow-[0_16px_48px_rgba(31,38,135,0.25)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/30 to-transparent blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-center space-y-5">
                        <div className="relative overflow-hidden rounded-2xl aspect-square mb-2">
                          <img 
                            src="/popsicles.jpg" 
                            alt="Fruit Popsicles" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-800 group-hover/card:text-secondary transition-colors duration-300">Fruit Popsicles</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">Avocado, Fig & Honey, Pineapple, Jackfruit</p>
                        <Link
                          href="/products?category=popsicles"
                          className="inline-block mt-4 px-6 py-2.5 bg-secondary text-secondary-foreground rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                          See More
                        </Link>
                      </div>
                    </div>

                    <div className="group/card backdrop-blur-[40px] bg-gradient-to-br from-white/30 to-white/15 border border-white/50 rounded-[1.5rem] p-8 hover:shadow-[0_16px_48px_rgba(31,38,135,0.25)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-white/15 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/30 to-transparent blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                      <div className="text-center space-y-5">
                        <div className="relative overflow-hidden rounded-2xl aspect-square mb-2">
                          <img 
                            src="/sipups.jpg" 
                            alt="Sip-Up Drinks" 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-gray-800 group-hover/card:text-chart-4 transition-colors duration-300">Sip-Up</h3>
                        <p className="text-sm text-gray-700 leading-relaxed">Fruit & milk-based refreshing drinks</p>
                        <Link
                          href="/products?category=sipup"
                          className="inline-block mt-4 px-6 py-2.5 bg-chart-4 text-background rounded-full font-semibold hover:scale-105 hover:shadow-lg transition-all duration-300"
                        >
                          See More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">Why Choose Icezea</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Quality ingredients and authentic recipes make all the difference
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group backdrop-blur-[40px] bg-white/20 rounded-[1.5rem] p-8 border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.12)] hover:shadow-[0_16px_56px_rgba(31,38,135,0.22)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/40 via-transparent to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/25 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pastel-green/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-pastel-green/80 transition-all duration-300">
                    <Leaf className="text-gray-800 group-hover:text-primary transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">Real Fruit Purees</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Made with authentic fruit purees for natural flavor</p>
                </div>
              </div>

              <div className="group backdrop-blur-[40px] bg-white/20 rounded-[1.5rem] p-8 border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.12)] hover:shadow-[0_16px_56px_rgba(31,38,135,0.22)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/40 via-transparent to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/25 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pastel-green/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-pastel-green/80 transition-all duration-300">
                    <Milk className="text-gray-800 group-hover:text-primary transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">Pure Milk & Ingredients</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Only the finest quality milk and natural ingredients</p>
                </div>
              </div>

              <div className="group backdrop-blur-[40px] bg-white/20 rounded-[1.5rem] p-8 border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.12)] hover:shadow-[0_16px_56px_rgba(31,38,135,0.22)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/40 via-transparent to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/25 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pastel-green/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-pastel-green/80 transition-all duration-300">
                    <ChefHat className="text-gray-800 group-hover:text-primary transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">Handcrafted Recipes</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Traditional methods meet modern innovation</p>
                </div>
              </div>

              <div className="group backdrop-blur-[40px] bg-white/20 rounded-[1.5rem] p-8 border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.12)] hover:shadow-[0_16px_56px_rgba(31,38,135,0.22)] transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/40 via-transparent to-white/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/25 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto bg-pastel-green/60 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-pastel-green/80 transition-all duration-300">
                    <Heart className="text-gray-800 group-hover:text-primary transition-colors duration-300" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">Loved Across UAE</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">Trusted by families and retailers nationwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/40 via-white/20 to-white/40 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative backdrop-blur-[40px] bg-white/20 rounded-[2rem] shadow-[0_8px_32px_rgba(31,38,135,0.15),0_2px_16px_rgba(255,255,255,0.4)_inset] p-12 sm:p-16 border border-white/30 overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/30 to-transparent blur-2xl"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent blur-xl"></div>

                <div className="relative z-10">
                  <Store className="mx-auto text-gray-800 mb-6" size={64} />
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
                    Available Across 350+ Stores & Restaurants
                  </h2>
                  <p className="text-xl text-gray-700 mb-8">In all Emirates</p>
                  <Link
                    href="#contact"
                    className="inline-block px-8 py-4 bg-gray-800 text-white rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg"
                  >
                    Become a Retailer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20" id="contact">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto backdrop-blur-[40px] bg-white/20 rounded-[2.5rem] p-12 shadow-[0_8px_32px_rgba(31,38,135,0.15)] border border-white/30 relative overflow-hidden">
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/50 via-transparent to-white/20" />
              <div className="absolute inset-0 rounded-[2.5rem] shadow-[inset_0_2px_30px_rgba(255,255,255,0.6)]" />
              <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/35 to-transparent rounded-t-[2.5rem] blur-2xl" />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/25 to-transparent blur-xl" />

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-800 mb-4">
                    Want to Bring Icezea to Your Shop?
                  </h2>
                  <p className="text-lg text-gray-700">Let's scoop up a partnership!</p>
                </div>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/25 backdrop-blur-md text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-white/60"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-gray-800 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/25 backdrop-blur-md text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-white/60"
                        placeholder="Your business"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="emirate" className="block text-sm font-medium text-gray-800 mb-2">
                        Emirate
                      </label>
                      <select
                        id="emirate"
                        className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/25 backdrop-blur-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary focus:border-white/60"
                      >
                        <option>Select Emirate</option>
                        <option>Dubai</option>
                        <option>Abu Dhabi</option>
                        <option>Sharjah</option>
                        <option>Ajman</option>
                        <option>Umm Al Quwain</option>
                        <option>Ras Al Khaimah</option>
                        <option>Fujairah</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-800 mb-2">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/25 backdrop-blur-md text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-white/60"
                        placeholder="+971 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/25 backdrop-blur-md text-gray-800 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none focus:border-white/60"
                      placeholder="Tell us about your business..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  )
}
