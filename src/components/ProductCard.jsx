export default function ProductCard({ product, onRequest }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full relative overflow-hidden group">
      
      {/* Product Image Container */}
      <div className="h-32 w-full flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`max-h-full max-w-full object-contain transition-all duration-300 ${
            !product.inStock ? "brightness-50 grayscale" : "group-hover:scale-110"
          }`}
        />

        {/* Quantity/Weight Badge - Top Right */}
        <div className="absolute top-2 right-2 bg-white/80 backdrop-blur-md px-2 py-0.5 rounded-lg border border-gray-200 text-[10px] font-bold text-gray-700 shadow-sm">
          {product.weight}
        </div>

        {/* Out of Stock Stamp Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
            <img 
              src="/out-of-stock.png" 
              alt="Out of Stock" 
              className="w-full h-auto object-contain animate-in zoom-in duration-300 rotate-12"
            />
          </div>
        )}
      </div>

      {/* Category Label */}
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
        {product.category}
      </span>

      {/* Product Name */}
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 h-10 leading-snug">
        {product.name}
      </h3>
      
      {/* Price and Action Section */}
      <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-50">
        <div className="flex flex-col">
           <span className={`text-lg font-black ${!product.inStock ? "text-gray-400" : "text-gray-900"}`}>
             ₹{product.price}
           </span>
        </div>
        
        {product.inStock ? (
          <button className="bg-primary text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-primaryDark transition shadow-sm active:scale-95">
            Add
          </button>
        ) : (
          <button 
            onClick={onRequest}
            className="text-orange-600 bg-orange-50 border border-orange-100 text-[10px] px-3 py-2 rounded-lg font-bold hover:bg-orange-100 transition-all active:scale-95"
          >
            Restock
          </button>
        )}
      </div>

      {/* Subtle border highlight for out of stock items */}
      {!product.inStock && (
        <div className="absolute inset-0 border-2 border-orange-100/30 rounded-2xl pointer-events-none"></div>
      )}
    </div>
  );
}