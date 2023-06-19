import {Link} from "react-router-dom";
function Header(){
    return(
        <header>
            <div className="container flexbox">
                <h1>Maybelline</h1>
                <nav>
                    <ul>
                        <li class="six"><a href="#">About Us</a></li>
                        <li class="home-2"><a href="about.html">Contact us</a></li>
                        <li class="home-3"><a href="#">Details</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header