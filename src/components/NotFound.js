import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function NotFound() {
    return (
        <div className='notFound container'>
            <Helmet>
                <title>404 Not found</title>
            </Helmet>
            <div className='contents'>
                <h2 className='notfound-message'>404 Not Found</h2>
                <Link to="/">
                    <button type='button' className="returnBtn" value="Return home" >Return</button>
                </Link >
            </div>
        </div>
    )
}
export default NotFound