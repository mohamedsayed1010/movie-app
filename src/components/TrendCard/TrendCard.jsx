import React from 'react'
import './trendCard.css'

export default function ({slide}) {
  return (
    <div className='trend-card'>
        <img src={slide.previewImg} alt=""  className='img-fluid'/>
        <a href="">
            Add to calendar <ion-icon name="calendar-outline"></ion-icon>
        </a>
    </div>
  )
}
