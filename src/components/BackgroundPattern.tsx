const BackgroundPattern = () => (
  <>
    <div className="fixed inset-0 pointer-events-none z-0 bg-[#0a0a0a]"></div>
    <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.15] bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] opacity-60"></div>
  </>
);

export { BackgroundPattern };
