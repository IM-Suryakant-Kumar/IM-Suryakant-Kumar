const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 p-4 bg-secondary shadow-lg rounded-t-lg">
      <small className="text-gray-700 dark:text-gray-300 text-sm tracking-wide">
        &copy; 2025, all rights reserved
      </small>
      <small className="flex items-center gap-1 text-gray-600 dark:text-gray-200 text-sm">
        Designed &amp; Built by
        <span className="text-logo font-secondary font-bold ml-1 underline underline-offset-2 decoration-logo">
          Suryakant Kumar
        </span>
      </small>
    </footer>
  );
};

export default Footer;