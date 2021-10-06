export const BackToTopNav = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="back-to-top-nav-div hand-cursor">
        <button className="back-to-top-nav-bt" onClick={backToTop}>
          Back to top
        </button>
      </div>
    </div>
  );
};
