import "./NavBar.css";

export function NavBar() {
  return (
    <>
      <div className="Navbar-cs">
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about/">About</a></li>
                <li><a href="/trabajo/:numero">Trabajos</a></li>
                <li><a href="/calendario/">Calendario</a></li>
                <li><a href="/event/:id">Eventos</a></li>
            </ul>
        </nav>
      </div>
    </>
  );
}
