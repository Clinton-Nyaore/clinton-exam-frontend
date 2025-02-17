const Footer = () => {
  return (
    <section className="header-bg text-white">
      <div className="w-[90%] mx-auto flex justify-center py-6">
        Copyright{` ${new Date().getFullYear()}`}&copy; 
      </div>
    </section>
  );
};
export default Footer;
