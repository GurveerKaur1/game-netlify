import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function Details() {
    const { selectedProduct } = useParams();
    const [product, setProduct] = useState({});
    const fetchProduct = async () => {
        try {
            const response = await axios.get(
                `https://makeup-api.herokuapp.com/api/v1/products/${encodeURIComponent(
                    selectedProduct
                )}.json`
            );
            const productData = response.data;
            setProduct(productData);
        } catch (error) {
            console.error(error);
        }
    };
    const formatCreatedAt = (createdAt) => {
        const date = new Date(createdAt);
        return date.toLocaleDateString();
    };

    useEffect(() => {
        fetchProduct();
    }, [selectedProduct]);

    return (
        <div className='container details-page'>
            <Helmet>
                <title>
                    {product.name}
                </title>
            </Helmet>
            <div className='detail-row'>
                <div className="column-1">
                    <figure className="poster-detail">
                        <img src={product.image_link} alt={product.title} />
                    </figure>
                </div>
                <div className="column-2">
                    <p className='name'> {product.name}</p>
                    <ul className='ul'>
                        <li>
                            Price {product.price}
                        </li>
                        <li>Created At {formatCreatedAt(product.created_at)}</li>
                    </ul>
                    <div className='desc'>
                        <p> {product.description}</p>
                    </div>
                    <button className='buy'>Buy Now</button>
                </div>
            </div>
        </div>
    );
}

export default Details;
