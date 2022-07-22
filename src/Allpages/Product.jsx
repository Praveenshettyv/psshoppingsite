import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {updatethecart} from '../redux/action/index'
import './Product.css'
export default function Product() {
  const disptach=useDispatch();
  const selected_data=useSelector(state=>state.products)
    const url = window.location.href;
    const lastSegment = url.split("?").pop();
    console.log(lastSegment);
    function selecteditem(id){
      disptach(updatethecart(id))
  }
  return (
    <div className='Selected_main_div'>
         {Array.from(selected_data)?.map((data)=>{
          if(data.id==lastSegment){
            return <div key={data.id} className="sub_items">
                    <div className='selected_images'><img  src={data.image} alt="title" /></div>
                    <div className='selected_items_data'>
                        <span className='no_emi item_title'>{data.title}</span><br />
                        <span>Deal of the Day:   {data.price} $ M.R.P</span><br />
                        <span>{data.count} ratings {data.rating.rate}</span><br />
                        <span>{data.description}</span><br />
                        <span className='no_emi'>No Cost EMI: Avail No Cost EMI on select cards for orders<br /> above ₹3000 
                        DetailsNo Cost EMI: Avail No Cost <br />EMI on select 
                        cards for <br />orders above ₹3000 Details</span>
                        <button className='button_addtocart' onClick={()=>selecteditem(data.id)}>Add to cart</button>
                    </div>
                  </div>
          }
       })}
    </div>
  )
}
