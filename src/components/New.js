import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';


function NewProduct() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        reset
    } = useForm({ mode: 'onChange' });

    const [productData, setProductData] = useState(null);

    const onSubmit = (data) => {
        setProductData(data);
        reset();
    };

    return (
        <div className='container grid'>
            <Helmet>
                <title>New</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='cross-flex'>
                    <h2>Add New Product</h2>
                    <Link to="/game-api">
                        <FontAwesomeIcon className="icon" icon={faTimes} />
                    </Link>
                </div>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div>
                    <label>Created Date:</label>
                    <input
                        type="date"
                        {...register('date', { required: true })}
                        max="9999-12-31"
                        min="1000-01-01"
                    />
                    {errors.createdDate && <span>This field is required</span>}
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        {...register("price", { required: true })}
                    />
                    {errors.price && <span>This field is required</span>}
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        {...register("description", { required: true })}
                    ></textarea>
                    {errors.description && <span>This field is required</span>}
                </div>
                <button type="submit" className="submit" disabled={!isValid}>
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default NewProduct;
