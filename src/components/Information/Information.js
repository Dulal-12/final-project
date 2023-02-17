import { useParams } from 'react-router-dom';
import SingleProduct from '../../CustomHook/singleProduct';
import ProductInformation from '../ProductInformation/ProductInformation';
import Table from 'react-bootstrap/Table';
import './Information.css';

const Information = () => {

    /*
    get the product id from react router useParams hook
    */
    const { productId } = useParams();

    /*
      call the singleProduct function which is coming from custom hook  for single product information form database
    */
    const singleProduct = SingleProduct(productId);




    return (
        <div className='container text-center information-container'>
            <h2><span style={{ borderBottom: "2px solid green" }}>Product Information</span></h2>

            <div className='row'>
                <div className='singleProduct col-md-5 col-sm-12'>
                    {/* call product information component for show product information */}
                    <ProductInformation product={singleProduct} key={singleProduct.id}></ProductInformation>

                </div>
                <div className='col-md-4 col-sm-12'>
                    <Table striped bordered hover className='my-5'>
                        <thead>
                            <tr>
                                <th>Serial</th>
                                <th>Days</th>
                                <th>Rent Price</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td style={{ color: "red", fontWeight: "bold" }}>7 days</td>
                                <td style={{ color: "red", fontWeight: "bold" }}>{singleProduct.rentPrice}</td>

                            </tr>
                            <tr>
                                <td>2</td>
                                <td style={{ color: "red", fontWeight: "bold" }}>14 days</td>
                                <td style={{ color: "red", fontWeight: "bold" }}>{singleProduct.rentPrice * 1.5}</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>
            </div>



        </div>
    );
};

export default Information;