import "./HomePage.css"
import {useNavigate } from 'react-router-dom';


function HomePage(){
    const navigate = useNavigate();
    return(
        <>
            <section>
                <div className="container">
                    <div className="info">
                        <div className="order">
                            <button className="Registers">
                                Registros
                            </button>
                            <button className="openNewOrder" onClick={() => navigate('/NewOrder')}>
                                Abrir Novo Pedido
                            </button>
                        </div>
                        <div className="financialResults">
                            <div>
                                <p>Resultados:</p>
                                <p>+R$100.000</p>
                            </div>
                            <div>
                                <p>Faturamento:</p>
                                <p>R$400.000</p>
                            </div>
                            <div>
                                <p>Custos:</p>
                                <p>R$300.000</p>
                            </div>
                        </div>
                    </div>
                    <div className="orders">
                        <div className="orderBox">
                            <div>
                                <a href="#">Pedido1</a>
                                <p>Bruno</p>
                                <h3>24:35</h3>
                            </div>
                            <div>
                                <button>Finalizar</button>
                                <button>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 

export default HomePage;