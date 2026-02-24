import { useState, useEffect } from "react";
import { X, CheckCircle, Lightbulb, RefreshCw } from "lucide-react";
import toast from "react-hot-toast";

export default function RequestModal({ onClose, defaultType = "New Suggestion", prefilledItem = "" }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    itemName: prefilledItem,
    type: defaultType,
    quantity: "1",
    phone: ""
  });

  // Effect to update if props change
  useEffect(() => {
    setFormData(prev => ({ ...prev, itemName: prefilledItem, type: defaultType }));
  }, [prefilledItem, defaultType]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Saving Request:", formData);
    setSubmitted(true);
    toast.success(`${formData.type} sent successfully!`);
    
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in duration-300">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-primary" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-500">The owner has been notified about your {formData.type.toLowerCase()}.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-2">
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {formData.type === "Restock" ? "Restock Request" : "Suggest New Item"}
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          {formData.type === "Restock" 
            ? "Let the owner know this item is urgently needed." 
            : "Want us to start selling something new? Tell us here!"}
        </p>

        {/* Request Type Selector (Visual Indicator) */}
        <div className="flex gap-2 mb-6 p-1 bg-gray-100 rounded-xl">
          <button 
            type="button"
            onClick={() => setFormData({...formData, type: "Restock"})}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${formData.type === "Restock" ? "bg-white text-orange-600 shadow-sm" : "text-gray-500"}`}
          >
            <RefreshCw size={14} /> Restock
          </button>
          <button 
            type="button"
            onClick={() => setFormData({...formData, type: "New Suggestion"})}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all ${formData.type === "New Suggestion" ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
          >
            <Lightbulb size={14} /> New Item
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase ml-1 mb-1">Item Name</label>
            <input 
              required
              type="text" 
              placeholder={formData.type === "Restock" ? "Item name..." : "e.g. Trimax Pen Refills"}
              className="w-full p-3 rounded-xl bg-gray-50 border border-transparent focus:border-primary/20 focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all"
              value={formData.itemName}
              onChange={(e) => setFormData({...formData, itemName: e.target.value})}
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/3">
              <label className="block text-xs font-bold text-gray-500 uppercase ml-1 mb-1">Qty</label>
              <input 
                type="text" 
                placeholder="2 pcs"
                className="w-full p-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-bold text-gray-500 uppercase ml-1 mb-1">Your Phone</label>
              <input 
                required
                type="tel" 
                placeholder="For notification"
                className="w-full p-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:ring-4 focus:ring-primary/5 outline-none transition-all"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          <button 
            type="submit" 
            className={`w-full text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 mt-2 ${formData.type === "Restock" ? "bg-orange-500 shadow-orange-100 hover:bg-orange-600" : "bg-blue-600 shadow-blue-100 hover:bg-blue-700"}`}
          >
            Send {formData.type}
          </button>
        </form>
      </div>
    </div>
  );
}