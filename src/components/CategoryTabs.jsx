import React, { Component } from 'react'
import axios from 'axios'
import './CategoryTab.style.css'

class CategoryTabs extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: []
            
        }
    }

    componentDidMount(){
        axios.get('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
        .then(response => this.setState({categories: response.data.category_list}))
        // .then(response => console.log(response.data.category_list))

        .catch()
    }

    render() {
        const { categories } = this.state
        return (
            <div className='category-div'>
                {
                    categories.length ?
                    categories.map(category => <div id='cat' key={category.category_id} className='slider'>
                        <div className='category' key={category.category_id} alt='categoryImage' style={{ backgroundImage: `url(${category.category_image})` }} onClick={() => this.props.setCategoryId(category.category_id)}>
                        <span key={category.category_id}><p style={{color:'white'}} key={category.category_id} className='categoryName'>{ category.category_name }</p></span>
                        </div>
                    </div>
                    ) :
                    null
                }
            </div>
        )
    }
}

export default CategoryTabs
