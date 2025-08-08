import Link from "next/link";

const Footer = () => {
  return (
    <div className="sm:w-10/12 w-full text-orange-primary m-auto max-sm:mt-6 bg-black text-center py-6 text-sm font-medium">
      Copyright © 2023{" "}
      <Link href="https://wa.link/886g2l" className="text-white">
        Zomix Studio - Bigweb Developer
      </Link>
    </div>
  );
};

export default Footer;
