import { useState } from "react";
import { MOCK_PRODUCTS } from "../data";
import ProductCard from "../components/ProductCard";
import RequestModal from "../components/RequestModal";

export default function Home({ searchQuery }) {
  // Centralized state to handle modal visibility, type, and specific items
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    type: "New Suggestion",
    item: ""
  });

  // Filters the list based on the search query passed from App.jsx
  const filteredProducts = MOCK_PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Triggered by the "Restock Alert" button on a ProductCard
  const handleRestockRequest = (productName) => {
    setModalConfig({ 
      isOpen: true, 
      type: "Restock", 
      item: productName 
    });
  };

  // Triggered by the "Suggest New Item" blue banner
  const handleNewSuggestion = () => {
    setModalConfig({ 
      isOpen: true, 
      type: "New Suggestion", 
      item: "" 
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Hero Banner - Branding Section */}
      <div className="bg-primary rounded-3xl p-8 mb-8 text-white flex flex-col md:flex-row items-center justify-between overflow-hidden relative shadow-lg shadow-green-100">
        <div className="z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-black mb-2 italic tracking-tighter uppercase">
            Relicon Mart
          </h1>
          <p className="text-white/90 font-medium">
            Fresh essentials at your society gate.
          </p>
        </div>
        <div className="text-6xl md:text-8xl font-black opacity-20 absolute -right-4 -bottom-4 italic select-none hidden md:block uppercase">
          Kirana
        </div>
      </div>

      {/* Suggest New Item Banner - Feedback loop for inventory expansion */}
      <div className="bg-blue-50 border border-blue-100 rounded-3xl p-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-top duration-500">
        <div className="flex items-center gap-4">
          <div className="bg-blue-500 p-3 rounded-2xl text-white shadow-lg shadow-blue-200 text-2xl">
            💡
          </div>
          <div>
            <h3 className="text-lg font-bold text-blue-900 leading-tight">
              Want something we don't have?
            </h3>
            <p className="text-blue-700/80 text-sm">
              Suggest items like Trimax refills, specific snacks, or tools.
            </p>
          </div>
        </div>
        <button 
          onClick={handleNewSuggestion}
          className="bg-blue-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all active:scale-95 whitespace-nowrap shadow-md hover:shadow-lg"
        >
          Suggest New Item
        </button>
      </div>

      {/* Section Title & Counter */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-black text-gray-800 flex items-center gap-3 uppercase">
          <span className="w-2 h-8 bg-primary rounded-full"></span>
          Available Items
        </h2>
        <span className="text-sm font-bold text-gray-400 bg-gray-100 px-4 py-1.5 rounded-full">
          {filteredProducts.length} Items Found
        </span>
      </div>

      {/* Grid Layout - Product Listing */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onRequest={() => handleRestockRequest(product.name)} 
            />
          ))}
        </div>
      ) : (
        /* Empty State - Encourages user interaction if search fails */
        <div className="text-center py-24 bg-white rounded-[2.5rem] border-2 border-dashed border-gray-100 shadow-inner">
          <div className="text-6xl mb-4 text-gray-200 grayscale">🛒</div>
          <p className="text-gray-500 font-bold text-lg">
            We don't have "{searchQuery}" yet.
          </p>
          <button 
            onClick={handleNewSuggestion} 
            className="mt-4 text-primary font-bold hover:underline decoration-2 underline-offset-4"
          >
            Click here to suggest it!
          </button>
        </div>
      )}

      {/* Modal - Conditionally rendered with configuration based on trigger */}
      {modalConfig.isOpen && (
        <RequestModal 
          defaultType={modalConfig.type}
          prefilledItem={modalConfig.item}
          onClose={() => setModalConfig({ ...modalConfig, isOpen: false })} 
        />
      )}
    </div>
  );
}