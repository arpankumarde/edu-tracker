const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-4 bg-gray-800 text-white text-center font-semibold">
      <p>© {currentYear} Wordpiece | All rights reserved</p>
    </footer>
  );
};

export default Footer;
