const Footer = () => {
  return (
    <>
      <section className="mt-24">
        <div className="w-[80%] mx-auto border-t-2 border-t-cyan-600">
          <div className="flex place-items-center">
            <img src="/logo.jpeg" className="h-24" alt="" />
            <div className="space-y-1">
              <p>
                Full screen mode is in effect during your proctored testing.
              </p>
              <p>
                Please Note: Attempting to exit out of Full screen mode or
                pressing the escape button will result in an alert message sent
                to the proctor and may result in the termination of the
                assessment.
              </p>
            </div>
          </div>
          <div className="flex justify-center py-6">
            <div>
              Copyright{` ${new Date().getFullYear()}`}&copy; Assessment
              Technologies Institute, L.L.C. All rights reserved
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Footer;
