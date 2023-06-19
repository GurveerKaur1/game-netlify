import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function Catalog() {
    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('price');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    'https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
                );
                const productData = response.data;
                setProducts(productData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, []);

    const navigate = useNavigate();
    const displayProduct = products.slice(0, 24);

    const productOnClick = (selectedProductName) => {
        navigate(`/product/${encodeURIComponent(selectedProductName)}`);
    };

    const sortByName = () => {
        if (sortBy === 'price') {
            const sortedProduct = [...products].sort((a, b) => {
                return a.name.localeCompare(b.name);
            });
            setProducts(sortedProduct);
            setSortBy('name');
        }
    };

    const sortByPrice = () => {
        if (sortBy === 'name') {
            const sortedProduct = [...products].sort((a, b) => {
                return a.price.localeCompare(b.price);
            });
            setProducts(sortedProduct);
            setSortBy('price');
        }
    };

    return (
        <div className='container'>
            <Helmet>
                <title>Maybelline</title>
            </Helmet>
            <div className='sort-div'>
                <button className='sort' onClick={sortBy === 'price' ? sortByName : sortByPrice}>
                    {sortBy === 'price' ? 'Sort by Name' : 'Sort by Price'}
                </button>
                <Link to="/new">
                    <button type="submit" className="addPrd" value="Add Product">Add Product</button>
                </Link>
            </div>
            <section className='child' id='catalog'>
                {console.log(displayProduct)}
                {displayProduct.map((product) => (
                    <div
                        key={product.dealId}
                        className='movie-item'
                        onClick={() => productOnClick(product.id)}
                    >
                        <Link
                            to={{
                                pathname: `/product/${encodeURIComponent(product.id)}`,
                            }}
                        >
                            <div className='figure'>
                                <figure>
                                    <img src={product.image_link} alt={product.title} />
                                </figure>
                                <div className='img-name'>
                                    <div className='left'><p>  {product.name}</p></div>
                                    <div className='right'><p> ${product.price}</p></div>
                                </div>
                            </div>
                        </Link>

                    </div>
                ))}
            </section>
        </div>
    );
}

export default Catalog;
