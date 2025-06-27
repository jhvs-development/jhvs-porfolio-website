export const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-primary-blue rounded-full flex justify-center">
        <div className="w-1 h-3 bg-primary-blue rounded-full mt-2" />
      </div>
    </div>
  )
}
