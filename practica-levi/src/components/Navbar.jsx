const Navbar =({})=>{


    return(
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Menú</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>

    <div class="collapse navbar-collapse" id="navbarNavDarkDropdown">
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Listado 1°B4
          </button>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">Emely</a></li>
            <li><a class="dropdown-item" href="#">Karen</a></li>
            <li><a class="dropdown-item" href="#">Cynthia</a></li>
            <li><a class="dropdown-item" href="#">Steven</a></li>
            <li><a class="dropdown-item" href="#">Rafa</a></li>
            <li><a class="dropdown-item" href="#">Emilio</a></li>
            <li><a class="dropdown-item" href="#">Daniel</a></li>
            <li><a class="dropdown-item" href="#">Nelson</a></li>
            <li><a class="dropdown-item" href="#">David Z</a></li>
            <li><a class="dropdown-item" href="#">Michelle</a></li>
            <li><a class="dropdown-item" href="#">Miguelito</a></li>
            <li><a class="dropdown-item" href="#">Emir</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
    )
}

export default Navbar