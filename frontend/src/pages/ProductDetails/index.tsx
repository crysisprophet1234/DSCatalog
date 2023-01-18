import './ProductDetails.css';

import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ProductPrice from "components/ProductPrice";

const ProductDetails = () => {


    return (

        <div className="product-details-container">

            <div className="product-details-card">

                <div className="goback-container">
                    <ArrowIcon />
                    <h2>VOLTAR</h2>
                </div>

                <div className="row">

                    <div className="col-xl-6">

                        <div className="img-container">
                            <img src="https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg" alt="Nome do produto" />
                        </div>

                        <div className="name-price-container">
                            <h1>Nome do produto</h1>
                            <ProductPrice price={2345.67} />
                        </div>

                    </div>

                    <div className="col-xl-6">

                        <div className="description-container">
                            <h2>Descrição do Produto</h2>
                            <p>
                                Projetado para garantir a produtividade no seu dia a dia O desempenho que você precisa para uma jornada eficiente é garantido pelos processadores
                                Intel da família Core

                                Conectividade ao seu lcanceSaídas de áudio com qalidade HD e conexões USB estão dipooníveis na frontal do seu CorPc
                                
                                Baixo consumo
                                Mesmo trabalhando todos os dias, você não tera sustos na conta de energia. Fizemos tudo bem feito, para o seu CorPC seja eficiente, silencioso e
                                econômico no consumo de energia elétrica
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default ProductDetails;