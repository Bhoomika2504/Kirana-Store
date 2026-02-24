export default function ProductCard({ product, onRequest }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col h-full">
      {/* Product Image */}
      <div className="h-32 w-full flex items-center justify-center mb-4 bg-gray-50 rounded-xl overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="max-h-full max-w-full object-contain hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* category */}
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
        {product.category}
      </span>

      {/* Name */}
      <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mb-2 h-10">
        {product.name}
      </h3>
      
      {/* Price and Action */}
      <div className="mt-auto flex items-center justify-between pt-3">
        <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
        
        {product.inStock ? (
          <button className="bg-primary text-white text-xs px-3 py-2 rounded-lg font-bold hover:bg-primaryDark transition shadow-sm">
            Add
          </button>
        ) : (
          <button 
            onClick={onRequest}
            className="text-red-500 bg-red-50 border border-red-100 text-[10px] px-2 py-2 rounded-lg font-bold hover:bg-red-100 transition"
          >
            Request Item
          </button>
        )}
      </div>
    </div>
  );
}