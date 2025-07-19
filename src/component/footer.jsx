function Footer(){
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>{currentYear} My Demo App. All rights reserved.</p>
    </footer>
  );
};

export default Footer;