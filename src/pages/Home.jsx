import { useState } from "react";
import { MOCK_PRODUCTS } from "../data";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = MOCK_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Banner */}
      <div className="bg-primary rounded-3xl p-8 mb-8 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative">
        <div className="z-10">
          <h1 className="text-3xl md:text-4xl font-black mb-2 italic">FASTEST DELIVERY</h1>
          <p className="text-white/90 font-medium">Get your society essentials in 10 mins.</p>
        </div>
        <div className="text-6xl md:text-8xl font-black opacity-20 absolute -right-4 -bottom-4 italic select-none">
          KIRANA
        </div>
      </div>

      {/* Section Title */}
      <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <span className="w-2 h-6 bg-primary rounded-full"></span>
        Fresh For You
      </h2>

      {/* Grid Layout */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">No items found for your search.</p>
        </div>
      )}
    </div>
  );
}