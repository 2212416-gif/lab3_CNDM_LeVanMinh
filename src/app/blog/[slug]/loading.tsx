export default function BlogPostLoading() {
  return (
    <div className="max-w-3xl mx-auto py-12 animate-pulse">
      <div className="h-4 w-24 bg-gray-200 rounded mb-6"></div>
      <div className="h-10 w-3/4 bg-gray-200 rounded mb-6"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}
