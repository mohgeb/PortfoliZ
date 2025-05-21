export default function Loading() {
  return (
    <div className="p-6 space-y-8">
      <div className="h-8 w-48 bg-muted rounded animate-pulse" />

      <div className="space-y-4">
        <div className="h-10 w-full bg-muted rounded animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-card rounded-lg p-6 border shadow animate-pulse">
              <div className="h-6 w-3/4 bg-muted rounded mb-4" />
              <div className="space-y-2">
                <div className="h-4 w-full bg-muted rounded" />
                <div className="h-4 w-5/6 bg-muted rounded" />
                <div className="h-4 w-4/6 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
