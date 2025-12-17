"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Warp } from "@paper-design/shaders-react"

type Category = "all" | "kulfis" | "popsicles" | "sipup"

const products = {
  kulfis: [
    { name: "Malai Kulfi", description: "Traditional creamy kulfi with cardamom" },
    { name: "Pista Kulfi", description: "Rich pistachio kulfi with real nuts" },
    { name: "Butterscotch Kulfi", description: "Sweet butterscotch with crunchy bits" },
    { name: "Mango Kulfi", description: "Made with real Alphonso mango pulp" },
    { name: "Tender Coconut Kulfi", description: "Fresh coconut pulp in every bite" },
  ],
  popsicles: [
    { name: "Avocado Pop", description: "Creamy avocado with a hint of lime" },
    { name: "Fig & Honey", description: "Sweet figs drizzled with natural honey" },
    { name: "Pineapple Burst", description: "Tangy tropical pineapple chunks" },
    { name: "Jackfruit Fusion", description: "Exotic jackfruit with real fruit pieces" },
    { name: "Watermelon Splash", description: "Refreshing summer watermelon" },
    { name: "Lychee Dream", description: "Delicate lychee with floral notes" },
  ],
  sipup: [
    { name: "Mango Lassi", description: "Traditional yogurt-based mango drink" },
    { name: "Strawberry Shake", description: "Creamy strawberry milk blend" },
    { name: "Chocolate Fudge", description: "Rich chocolate milk drink" },
    { name: "Banana Smoothie", description: "Smooth banana with milk" },
  ],
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("all")

  const getFilteredProducts = () => {
    if (activeCategory === "all") {
      return Object.entries(products).flatMap(([category, items]) => items.map((item) => ({ ...item, category })))
    }
    return products[activeCategory].map((item) => ({ ...item, category: activeCategory }))
  }

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0 opacity-50">
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

      <div className="relative z-10">
        <Header />

        {/* <section className="pt-32 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative group max-w-4xl mx-auto">
              <div className="absolute -inset-1 bg-gradient-to-r from-white/40 via-white/20 to-white/40 rounded-[2rem] blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

              <div className="relative backdrop-blur-[40px] bg-white/20 rounded-[2rem] shadow-[0_8px_32px_rgba(31,38,135,0.15),0_2px_16px_rgba(255,255,255,0.4)_inset] p-12 sm:p-16 border border-white/30 overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white/30 to-transparent blur-2xl"></div>
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/20 to-transparent blur-xl"></div>

                <div className="relative z-10">
                  <h1 className="text-5xl sm:text-6xl font-serif font-bold text-gray-800 mb-6">Our Products</h1>
                  <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                    Discover our handcrafted collection of premium ice creams, kulfis, and frozen treats
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className="py-3 sticky top-20 z-40 backdrop-blur-[40px] bg-white/20 border-b border-white/30 shadow-[0_4px_24px_rgba(31,38,135,0.1)]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border ${
                  activeCategory === "all"
                    ? "bg-primary text-primary-foreground shadow-lg scale-105 border-primary/30"
                    : "bg-white/60 text-gray-700 hover:bg-white/80 hover:scale-105 border-white/60"
                }`}
              >
                All Products
              </button>
              <button
                onClick={() => setActiveCategory("kulfis")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border ${
                  activeCategory === "kulfis"
                    ? "bg-primary text-primary-foreground shadow-lg scale-105 border-primary/30"
                    : "bg-white/60 text-gray-700 hover:bg-white/80 hover:scale-105 border-white/60"
                }`}
              >
                Kulfis
              </button>
              <button
                onClick={() => setActiveCategory("popsicles")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border ${
                  activeCategory === "popsicles"
                    ? "bg-secondary text-secondary-foreground shadow-lg scale-105 border-secondary/30"
                    : "bg-white/60 text-gray-700 hover:bg-white/80 hover:scale-105 border-white/60"
                }`}
              >
                Popsicles
              </button>
              <button
                onClick={() => setActiveCategory("sipup")}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-md border ${
                  activeCategory === "sipup"
                    ? "bg-chart-4 text-background shadow-lg scale-105 border-chart-4/30"
                    : "bg-white/60 text-gray-700 hover:bg-white/80 hover:scale-105 border-white/60"
                }`}
              >
                Sip-Up
              </button>
            </div>
          </div>
        </section>

        <section className="pt-20 mt-4">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {getFilteredProducts().map((product, index) => (
                <div
                  key={index}
                  className="group relative backdrop-blur-[40px] bg-white/20 rounded-[1.5rem] p-8 shadow-[0_8px_32px_rgba(31,38,135,0.12)] hover:shadow-[0_24px_64px_rgba(31,38,135,0.22)] transition-all duration-500 hover:-translate-y-4 border border-white/30 overflow-hidden"
                >
                  <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-white/50 via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-0 rounded-[1.5rem] shadow-[inset_0_2px_20px_rgba(255,255,255,0.5)]" />
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white/30 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    <div className="aspect-square mb-6 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm border border-white/40 shadow-lg group-hover:shadow-xl transition-shadow duration-500">
                      <img
                        src={`/.jpg?height=300&width=300&query=${product.name} ice cream`}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors duration-300">{product.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
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
                    className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
                  >
                    Send Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  )
}
