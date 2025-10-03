const Loading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center gap-4 bg-background">
      {/* Simple loading spinner */}
      <div className="relative">
        <div className="w-8 h-8 border-2 border-muted rounded-full"></div>
        <div className="absolute inset-0 w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Loading text */}
      <div className="text-center space-y-1">
        <h3>Loading...</h3>
        <p className="text-pretty font-sans text-sm sm:text-base leading-6 text-muted-foreground text-justify">
          Preparing your experience...
        </p>
      </div>
    </div>
  );
};

export default Loading;
