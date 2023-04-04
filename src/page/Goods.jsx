import '../css/index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
function Goods({goods,setGoods,convertPrice}){
    useEffect(()=>{
        axios.get('/data/prd.json').then((data)=>{
            setGoods(data.data.products)
        })
    },[setGoods])
    return(
        <>
            <div className="goods_wrapper">
                <div className="title">
                    <ul>
                        <li>전세계가 사랑해요</li>
                        <li>전세계 150개 매장에서 만나는 요기보</li>
                    </ul>
                </div>
                {
                    goods.map((prd,i)=>{
                        return(
                        <div className="goods_list" key={i}>
                            <Link to={`/detail/${goods[i].id}`}><div className="img"><img src={goods[i].img} alt="이미지"/></div></Link>
                            <div className="title">{goods[i].name}</div>
                            <div className="subtitle">{goods[i].subtitle}</div>
                            <div className="price">{convertPrice(goods[i].price)}원</div>
                        </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Goods