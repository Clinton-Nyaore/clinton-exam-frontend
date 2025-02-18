const Footer = () => {
  return (
    <section className="mt-24">
      <div className="w-[90%] mx-auto border-t-2 border-t-cyan-600 flex justify-center py-6">
        Copyright{` ${new Date().getFullYear()}`}&copy;
      </div>
    </section>
  );
};
export default Footer;
