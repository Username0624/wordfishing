export const FullPageLoadingIndicator = () => {
  return (
    <div className="flex items-center justify-center min-h-[400px] flex-1">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
    </div>
  )
}