import React from 'react'
import styles from '../styles/Yelp.module.css'
import leftArrow from "../public/icons/left-arrow.svg";
import rightArrow from "../public/icons/right-arrow.svg";

const BtnSlider = ({ direction, moveSlide }) => {
  return (
    <button
    onClick={moveSlide}
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
  >
    <img src={direction === "next" ? rightArrow : leftArrow} />
  </button>
  )
}

export default BtnSlider