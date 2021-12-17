import React from 'react'

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Home </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Blocs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/salle">Salles</a>
                        </li>
                       
                        <li class="nav-item">
                            <a class="nav-link" href="/chrono">Chronos</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/occupation">Occupations</a>
                        </li>     
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
