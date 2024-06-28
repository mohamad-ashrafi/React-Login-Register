import React from 'react'
import './Breadcrumb.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

export const Breadcrumb = (props) => {
const {product} = props;
  return (
    <div className='breadcrumb'>
         صفحه اصلی
         {'>'}
         خدمات 
         {'>'} 
         {product.category}
         {'>'}
         {product.name}
    </div>
  )
}
