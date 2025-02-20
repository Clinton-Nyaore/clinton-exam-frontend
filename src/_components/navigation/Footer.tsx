import footerLogo from "@/assets/footer-logo.jpeg";

const Footer = () => {
  return (
    <>
      <section className="mt-16 text-sm montserrat-footer ">
        <div className="w-[80%] mx-auto border-t border-t-gray-400">
          <div className="flex place-items-center">
            <img src={footerLogo} className="h-24" alt="" />
            <div className="space-y-1  text-gray-600">
              <p>
                Full screen mode is in effect during your proctored testing.
              </p>
              <p>
                Please Note: Attempting to exit out of full screen mode or
                pressing the escape button will result in an alert message sent
                to the proctor and may result in the termination of the
                assessment.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
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
