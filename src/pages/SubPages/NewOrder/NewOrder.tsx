import React, { useState } from "react";
import "./NewOrder.css";

function NewOrder() {

    return (
        <>
            <section>
                <div className="container">
                    <div className="functions">
                        <div className="filterBox">
                            <form action="#">
                                <input type="search" placeholder="Buscar..." />
                                <select name="type" id="type">
                                    <option value="#">Todos</option>
                                    <option value="#">Combos</option>
                                    <option value="#">Lanches</option>
                                    <option value="#">Massas</option>
                                    <option value="#">Carnes</option>
                                    <option value="#">Bebidas</option>
                                </select>
                                <select name="orderBy" id="orderBy">
                                    <option value="#">Maior Preço</option>
                                    <option value="#">Menor Preço</option>
                                </select>
                                <input type="submit" value="Buscar" />
                            </form>
                        </div>
                        <div className="orderAction">
                            <button className="finalize">Finalizar Pedido</button>
                            <button className="cancel">Cancelar Pedido</button>
                        </div>
                    </div>
                    <div className="functionsBottom">
                        <div className="orderProducts">
                            <div className="product">
                                <img src="/icons/images/foodsPic/0001.jpg" alt="X-Bacon" />
                                <div className="containerProduct">
                                    <div className="infoProduct">
                                        <p>Supreme X-Bacon</p>
                                        <p>0001</p>
                                        <p>Pão / (3) Carne / Bacon / Queijo / Tomate / Maionese </p>
                                        <h2>R$36,90</h2>
                                    </div>
                                    <div className="containerBottom">
                                        <div className="quantity">
                                            <button>-</button>
                                            <span>0</span>
                                            <button>+</button>
                                        </div>
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="cart">
                            <ul>
                                <li>1x Supreme X-Bacon - R$36,90</li>
                            </ul>
                            <p>Total: R$36,90</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default NewOrder;
