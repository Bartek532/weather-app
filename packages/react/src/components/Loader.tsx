export const Loader = () => {
  return (
    <div className="loader">
      <span className="sr-only">loading</span>
      <div className="loader__ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
