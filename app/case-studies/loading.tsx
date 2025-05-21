export default function Loading() {
  return (
    <div className="p-6 space-y-8">
      <div className="h-8 w-48 bg-muted rounded animate-pulse" />

      <div className="space-y-4">
        <div className="h-10 w-full bg-muted rounded animate-pulse" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-card rounded-lg border shadow animate-pulse">
              <div className="aspect-video bg-muted" />
              <div className="p-4 space-y-2">
                <div className="h-6 w-3/4 bg-muted rounded" />
                <div className="h-4 w-1/2 bg-muted rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 space-y-4">
        <div className="h-7 w-40 bg-muted rounded animate-pulse" />
        <div className="h-[300px] bg-card rounded-lg border animate-pulse" />
      </div>
    </div>
  )
}
