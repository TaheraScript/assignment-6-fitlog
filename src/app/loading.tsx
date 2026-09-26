const GlobalLoading = () => {
  return (
    <div className="container mx-auto py-24 flex flex-col items-center justify-center gap-4 min-h-[40vh]">
      <span className="loading loading-spinner loading-lg text-[#ccff00]" />
      <p className="text-[#8A92A0] text-[14px] font-inter">
        Loading workouts…
      </p>
    </div>
  );
};

export default GlobalLoading;