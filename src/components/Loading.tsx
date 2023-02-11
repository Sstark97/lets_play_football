const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-2">
      <div className="spinner-grow inline-block w-12 h-12 bg-current rounded-full opacity-0" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loading
