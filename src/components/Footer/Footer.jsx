const Footer = () => {
  return (
    <footer className="footer bg-black text-white p-10 mt-10">
      <div className="flex justify-between mx-auto gap-10 w-10/12">
        <aside className="w-1/5">
          <h1 className="font-bold text-3xl mb-3">CareerHub</h1>
          <p className="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="flex gap-3">
            <a href="www.facebook.com"><img src="https://img.icons8.com/?size=48&id=118497&format=png" alt="" /></a>
            <a href="www.x.com"><img src="https://img.icons8.com/?size=48&id=114450&format=png" alt="" /></a>
            <a href="www.instagram.com"><img src="https://img.icons8.com/?size=48&id=32323&format=png" alt="" /></a>
          </div>
        </aside>
        <nav className="grid gap-3 w-1/5">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className="grid gap-3 w-1/5">
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav className="grid gap-3 w-1/5">
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav className="grid gap-3 w-1/5">
          <h6 className="footer-title">Contact</h6>
          <p>524 Broadway, NYC</p>
          <p>+1 777-928-5570</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
