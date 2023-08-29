import React from 'react'
import { head, smile, eye_l, eye_r, happy_smile, happy_eye_l, happy_eye_r } from './paths';
import styles from './style.module.scss';
import SVGMorph from '../svgMorph';
export default function index() {
    return (
      <div className={styles.svgContainer}>
        <svg className={styles.svg} viewBox="0 0 192 192">
          <path d={head} fill="white"/>
          <SVGMorph paths={[smile, happy_smile, smile]}/>
          <SVGMorph paths={[eye_l, happy_eye_l, eye_l]}/>
          <SVGMorph paths={[eye_r, happy_eye_r, eye_r]}/>
        </svg>
      </div>
    )
  }
