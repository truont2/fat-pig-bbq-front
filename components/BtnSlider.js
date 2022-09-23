import React from 'react'
import styles from '../styles/Fade.module.css'
import leftArrow from "../public/icons/left-arrow.svg";
import rightArrow from "../public/icons/right-arrow.svg";
import test from '../public/assets/meals/corn.jpg'
const BtnSlider = ({ direction, moveSlide }) => {
  console.log(direction)
  return (
    <button
    onClick={moveSlide}
    className={`${styles.btnSlide} ${
      direction === "next"
        ? `${styles.next}`
        : `${styles.prev}`
    }`}
  >
    hello
  </button>
  )
}

export default BtnSlider