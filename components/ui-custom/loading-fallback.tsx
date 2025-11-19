export default function LoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 rounded-full border-4 border-mint-green border-t-transparent animate-spin"></div>
        <p className="text-forest-green font-medium">Loading...</p>
      </div>
    </div>
  )
}
