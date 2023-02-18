import './Catalog.css';
import ProductCard from 'components/ProductCard';
import Pagination from 'components/Pagination';
import CardLoader from './cardLoader/index';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/requests';


const Catalog = () => {

  const [page, setPage] = useState<SpringPage<Product>>();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const params  = {

      method: 'GET',
      url: "/products",
      baseURL: BASE_URL,
      params: {
        page: 0,
        size: 12
      }

    }

    setIsLoading(true);

    axios(params)
      .then(response => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (

    <div className="container my-4 catalog-container">

      <div className="row catalog-title-container">
        <h1>Catálogo de Produtos</h1>
      </div>

      <div className="row">

        {isLoading || !page ? <CardLoader /> :

          (

            page?.content.map(product => {

              return (

                <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
                  <Link to={`products/${product.id}`}>
                    <ProductCard product={product} />
                  </Link>
                </div>

              );

            })
          )
        }

      </div>

      <div className="row">
        <Pagination />
      </div>

    </div>

  );

};

export default Catalog;
