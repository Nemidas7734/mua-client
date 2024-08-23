export default function Loading() {
    return (
      <div className="container mx-auto px-4 pt-10 md:pt-20">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-64 mb-5"></div>
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-64"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }