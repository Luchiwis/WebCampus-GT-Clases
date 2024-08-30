import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <div className="Navbar-cs">
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/trabajo/">Trabajos</a></li>
                <li><a href="/calendario/">Calendario</a></li>
            </ul>
        </nav>
      </div>
    </>
  );
}
