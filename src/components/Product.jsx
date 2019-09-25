import React, { Component } from 'react'
import axios from 'axios'
import './Product.styles.css'
import Button from '@material-ui/core/Button';

class ProductImage extends Component {
    constructor(props){
        super(props);
        this.state={
            productsImage : [],
        }

    }

    componentDidMount() {
        let categoryId = 226;
        if(this.props.categoryId !== null) {
            categoryId = this.props.categoryId;
        }

        setTimeout(() => { axios.get(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${categoryId}`)
        .then(response => this.setState({productsImage: response.data.products}))
        .catch() }, 100);
    }

    componentDidUpdate() {
        let categoryId = 226;
        if(this.props.categoryId !== null) {
            categoryId = this.props.categoryId;
        }

        setTimeout(() => { axios.get(`https://backend.ustraa.com/rest/V1/api/catalog/v1.0.1?category_id=${categoryId}`)
        .then(response => this.setState({productsImage: response.data.products}))
        .catch() }, 100);
    }


    render() {
        const { productsImage } = this.state
        return (
            <div >
                {
                    productsImage.length ?
                    productsImage.map(productImage => <div className='productContainer' key={productImage.id}>
                        <img className='procuctImage' key={productImage.id} alt='categoryImage' src={productImage.image_urls.x120}/>
                        <div style={{display:'flex'}}>
                            <p className='productName'>{ productImage.name.substring(0, 60) }</p>
                            <div className='rating'>
                                {
                                    productImage.rating ?
                                    <span>{ productImage.rating }&#9733;</span>:
                                    null                             
                                }
                            </div>
                            {
                            productImage.weight !== 0 ?
                            <div className='volume'>
                                <div className='quantity'>
                                    <p>{ productImage.weight }<span> { productImage.weight_unit }</span></p>
                                </div>
                            </div> : null
                            }
                        </div>
                        <div className='priceBox'>
                            <p className='specialPrice'><span>&#x20b9;</span>{ productImage.final_price }</p>
                            <p className='originalPrice'>&#x20b9;{ productImage.price }</p>
                        </div>
                        <div className='button'>
                        {   
                            productImage.is_in_stock ?
                            <Button style={{backgroundColor : '#4fcf64'}} className='available'><span className='buttonText'>ADD TO CART</span></Button> :
                            <Button style={{backgroundColor : '#757575'}} className='notAvailable'><span className='buttonText'>OUT OF STOCK</span></Button>
                        }
                        </div>
                        </div>) :
                    null
                }
            </div>
        )
    }
}

export default ProductImage
