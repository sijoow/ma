import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import '../css/detail.css';
import $ from 'jquery';

function Detail({cart,setCart,convertPrice,whatma}){
    const {id} = useParams();
    const [product,setProduct] =useState({});
    useEffect(()=>{
        axios.get('/data/prd.json').then((data)=>{
            setProduct(data.data.products.find((prd)=>prd.id===parseInt(id)))
        })
    },[id]);
    //select 옵션값 설정하기 
    const [count,setcount]=useState(0);
    const [content, setContent] = useState(true);
    const onChangeHanlder=(e)=>{
        setContent(e.currentTarget.value)
    }    
    const Options =[
        {key:1, value:"-옵션을 선택"},
        {key:2, value:"블랙"},
        {key:3, value:"핑크"},
    ]
 
    //색상 선택시 counter 및 가격도 함께 뜨게 해야함
    //그럼 조건식을 선택해야함
    return(
        <>
            <div className="detail_wrapper">
                <div className="detail_img_wrapper" >
                    <img src={product.img} alt="" />
                </div>
                <div className="detail_goods_wrapper">
                    <div className="prd_wrapper">
                        <div className="prd_name">{product.name}</div>
                        <div className="prd_subtitle">{product.subtitle}</div>
                        <div className="prd_price">{convertPrice(product.price+"")}원</div>
                        <div className="prd_section">
                            <dl>
                                <dt>{product.button_title} 색상</dt>
                                <dd>
                                    <select onChange={onChangeHanlder} value={content} >
                                        {Options.map((a,i)=>(
                                         <option key={i} value={a.value} className="option">{a.value}</option>
                                        ))}
                                    </select>
                                </dd>
                            </dl>
                        </div>
                        <div className="hide_option_value">
                         {content}<button onClick={(()=>{
                            {setcount(count+1)}
                         })}>+</button>{count}
                         
                         <button
                          onClick={(()=>{
                            {setcount(count-1)}
                         })}
                         >-</button>
                        </div>
                    </div>
                    <div className="totalPrice">
                        <dl>
                            <dt>총 합계<span>(수량) :</span></dt>
                            <dd>원</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </>
    )
}

$(function(){
    $('.option').click(function(){
       // $('.hide_option_value').show()
    })
})
export default Detail