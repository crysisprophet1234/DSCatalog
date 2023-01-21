import './ProductDetails.css';

import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import ProductPrice from "components/ProductPrice";

import { Product } from 'types/product';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'utils/requests';

type UrlParam = {

    productId : string;

}

const ProductDetails = () => {

    const { productId } = useParams<UrlParam>();

    const [product, setProduct] = useState<Product>();

    useEffect(() => {

        axios.get(`${BASE_URL}/products/${productId}`)
            .then(response => {
                setProduct(response.data);
            })

    }, [productId]);

    return (

        <div className="product-details-container">

            <div className="product-details-card">

                <div className="goback-container">
                    <Link to="/products" style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowIcon />
                        <h2>VOLTAR</h2>
                    </Link>
                </div>

                <div className="row">

                    <div className="col-xl-6">

                        <div className="img-container">
                            <img
                                src={product?.imgUrl}
                                alt={product?.name}
                            />
                        </div>

                        <div className="name-price-container">
                            <h1>{product?.name}</h1>
                            {product ? <ProductPrice price={product?.price} /> : "price not found"}
                        </div>

                    </div>

                    <div className="col-xl-6">

                        <div className="description-container">
                            <h2>Descrição do Produto</h2>
                            <p>{product?.description}</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default ProductDetails;