
import './Footer.css';


export default function Footer()
{

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <p>E-mail: exemplo@email.com</p>
                    <p>Telefone: (XX) XXXX-XXXX</p>
                    <p>Endereço: Rua Exemplo, 123</p>
                </div>
                <div className="footer-section">
                    <h2>Links Úteis</h2>
                    <ul>
                        <li><a href='#'>Currículo</a></li>
                        <li><a href='#'>Git Hub</a></li>
                        <li><a href='#'>Linkedin</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h2>Redes Sociais</h2>
                    <ul className="social-icons">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
        </div>


            </div>
        </footer>
    );
}