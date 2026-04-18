"use client";

export default function RootError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold text-red-600 mb-4">Ối! Có lỗi xảy ra.</h2>
      <p className="text-gray-600 mb-6">{error.message}</p>
      <button 
        onClick={() => reset()} 
        className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Tải lại trang
      </button>
    </div>
  );
}
