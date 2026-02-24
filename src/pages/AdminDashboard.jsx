import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { MOCK_PRODUCTS } from "../data";
import { Package, MessageSquare, LogOut, CheckCircle2, Clock } from "lucide-react";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const { logout } = useAuth();
  const [activeTab, setActiveTab] = useState("requests");
  
  // Mock requests for demo purposes
  const [requests, setRequests] = useState([
    { id: 1, itemName: "Maggi Noodles", type: "Restock", phone: "9876543210", status: "Pending", date: "2026-02-24" },
    { id: 2, itemName: "Trimax Blue Refills", type: "New Suggestion", phone: "9988776655", status: "Completed", date: "2026-02-23" },
    { id: 3, itemName: "Amul Butter 500g", type: "Restock", phone: "9123456789", status: "Pending", date: "2026-02-24" },
  ]);

  const handleMarkComplete = (id) => {
    setRequests(requests.map(req => req.id === id ? { ...req, status: "Completed" } : req));
    toast.success("Request marked as completed!");
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 hidden md:flex flex-col">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800 italic uppercase tracking-tighter">Admin Panel</h2>
        </div>
        
        <nav className="flex-1 px-4 space-y-2">
          <button 
            onClick={() => setActiveTab("requests")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "requests" ? "bg-primary text-white shadow-lg shadow-green-100" : "text-gray-500 hover:bg-gray-50"}`}
          >
            <MessageSquare size={20} /> Customer Requests
          </button>
          <button 
            onClick={() => setActiveTab("products")}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "products" ? "bg-primary text-white shadow-lg shadow-green-100" : "text-gray-500 hover:bg-gray-50"}`}
          >
            <Package size={20} /> Inventory
          </button>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <button 
            onClick={logout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-red-500 hover:bg-red-50 transition-all"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8">
        <header className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-black text-gray-800">
              {activeTab === "requests" ? "Customer Demand" : "Stock Management"}
            </h1>
            <p className="text-gray-500 text-sm">Managing society shop operations.</p>
          </div>
        </header>

        {activeTab === "requests" ? (
          <div className="grid gap-4">
            {requests.map((req) => (
              <div key={req.id} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-between group hover:border-primary/30 transition-all">
                <div className="flex gap-4 items-center">
                  <div className={`p-3 rounded-xl ${req.type === "Restock" ? "bg-orange-50 text-orange-600" : "bg-blue-50 text-blue-600"}`}>
                    {req.type === "Restock" ? <Clock size={24} /> : <MessageSquare size={24} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-gray-800">{req.itemName}</h3>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${req.type === "Restock" ? "bg-orange-100 text-orange-700" : "bg-blue-100 text-blue-700"}`}>
                        {req.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">From: {req.phone} • {req.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {req.status === "Pending" ? (
                    <button 
                      onClick={() => handleMarkComplete(req.id)}
                      className="bg-gray-900 text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-primary transition-all flex items-center gap-2"
                    >
                      <CheckCircle2 size={14} /> Mark Done
                    </button>
                  ) : (
                    <span className="text-green-500 flex items-center gap-1 font-bold text-sm bg-green-50 px-3 py-1 rounded-lg">
                      <CheckCircle2 size={16} /> Completed
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="p-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Product</th>
                  <th className="p-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Price</th>
                  <th className="p-5 text-sm font-bold text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_PRODUCTS.map(p => (
                  <tr key={p.id} className="border-b border-gray-50 last:border-0">
                    <td className="p-5 font-bold text-gray-800">{p.name}</td>
                    <td className="p-5 text-gray-600">₹{p.price}</td>
                    <td className="p-5">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${p.inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {p.inStock ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
}