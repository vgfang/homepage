export default function Footer() {
  const scrollToTop = (e) => {
    e.preventDefault();
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  };

  return (
    <div className="flex flex-wrap justify-between">
      <span>vgfang © 2024</span>
      <a href="" onClick={scrollToTop}>
        Top [↑]
      </a>
    </div>
  );
}
