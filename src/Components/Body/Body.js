import React, { useState } from "react";
import { Container } from "reactstrap";
import style from "./body.module.css";

const Body = () => {
  const [reason] = useState([
    {
      title: "INSIGHT",
      icon: (
        <svg
          width="30"
          height="34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22.541 6.375h-1.776a6.611 6.611 0 0 0-.255-.618l1.256-1.264a.711.711 0 0 0 0-1.002l-1.992-2.004a.702.702 0 0 0-.997 0l-1.256 1.264a6.499 6.499 0 0 0-.615-.256V.708A.706.706 0 0 0 16.2 0h-2.817a.706.706 0 0 0-.705.708v1.787c-.209.074-.414.16-.614.255l-1.257-1.262a.702.702 0 0 0-.996 0L7.819 3.49a.711.711 0 0 0 0 1.002l1.257 1.264c-.096.201-.18.408-.255.618H7.044a.706.706 0 0 0-.704.708v2.834c0 .39.315.708.704.708h1.777c.074.21.159.417.254.618L7.82 12.507a.711.711 0 0 0 0 1.002l1.993 2.003c.275.277.72.277.996 0l1.257-1.263c.2.096.405.181.614.256v1.787c0 .39.316.708.705.708h2.818a.706.706 0 0 0 .704-.708v-1.786c.21-.075.414-.16.615-.257l1.257 1.263c.275.277.72.277.996 0l1.992-2.003a.711.711 0 0 0 0-1.002l-1.256-1.264c.095-.201.18-.408.255-.618h1.776a.706.706 0 0 0 .705-.708V7.083a.706.706 0 0 0-.705-.708zm-.704 2.833h-1.593a.705.705 0 0 0-.682.53 4.973 4.973 0 0 1-.525 1.276.711.711 0 0 0 .109.861l1.127 1.134-.996 1.001-1.127-1.133a.701.701 0 0 0-.857-.11 4.914 4.914 0 0 1-1.268.528.708.708 0 0 0-.528.686v1.602h-1.409l.001-1.6a.707.707 0 0 0-.528-.685 4.918 4.918 0 0 1-1.268-.528.701.701 0 0 0-.857.109l-1.127 1.133-.996-1.001 1.127-1.134a.711.711 0 0 0 .109-.861 4.973 4.973 0 0 1-.525-1.275.705.705 0 0 0-.682-.531H7.749V7.793h1.594a.705.705 0 0 0 .682-.531c.115-.448.291-.877.524-1.275a.711.711 0 0 0-.108-.862L9.314 3.992l.994-1.002 1.128 1.133c.227.229.58.274.856.11a4.915 4.915 0 0 1 1.268-.528.708.708 0 0 0 .528-.686V1.417h1.41v1.602c-.001.323.215.605.526.686.445.116.872.294 1.268.528.277.164.63.12.857-.11l1.127-1.132.996 1-1.127 1.133a.711.711 0 0 0-.108.861c.233.399.41.828.525 1.275.08.313.36.532.681.532h1.594v1.416z"
            fill="#3452de"
          ></path>
          <path
            d="M14.792 5.667A2.826 2.826 0 0 0 11.975 8.5a2.826 2.826 0 0 0 2.817 2.833A2.826 2.826 0 0 0 17.61 8.5a2.826 2.826 0 0 0-2.818-2.833zm0 4.25A1.413 1.413 0 0 1 13.383 8.5c0-.782.631-1.417 1.41-1.417.777 0 1.408.635 1.408 1.417s-.63 1.417-1.409 1.417zM9.86 17.708v1.396c0 2.358-1.263 4.271-2.817 4.271-1.554 0-2.818-1.913-2.818-4.27v-1.297a3.008 3.008 0 0 1 2.818-2.225v-1.416a4.411 4.411 0 0 0-4.205 3.37.713.713 0 0 0-.022.171v1.396c0 3.19 1.857 5.688 4.227 5.688s4.226-2.499 4.226-5.688v-1.396H9.86z"
            fill="#3452de"
          ></path>
          <path
            d="M10.567 24.792a1.326 1.326 0 0 1-1.409-1.417H7.749a2.745 2.745 0 0 0 2.818 2.833 2.12 2.12 0 0 1 2.113 2.125V34h1.409v-5.667c-.003-1.955-1.578-3.54-3.522-3.541zM6.34 23.375H4.93a1.33 1.33 0 0 1-1.409 1.417C1.58 24.794.003 26.378.001 28.333V34h1.409v-5.667a2.12 2.12 0 0 1 2.113-2.125 2.747 2.747 0 0 0 2.818-2.833z"
            fill="#3452de"
          ></path>
          <path
            d="M4.225 29.041H2.816V34h1.41V29.04zM11.268 29.041H9.86V34h1.41V29.04zM26.744 17.536a4.411 4.411 0 0 0-4.205-3.37v1.417a3.008 3.008 0 0 1 2.818 2.224v1.297c0 2.358-1.264 4.271-2.818 4.271s-2.818-1.913-2.818-4.27v-1.397h-1.408v1.396c0 3.19 1.856 5.688 4.226 5.688s4.226-2.499 4.226-5.688v-1.396a.71.71 0 0 0-.02-.172z"
            fill="#3452de"
          ></path>
          <path
            d="M26.063 24.792a1.326 1.326 0 0 1-1.409-1.417h-1.409a2.745 2.745 0 0 0 2.818 2.833 2.12 2.12 0 0 1 2.113 2.125V34h1.409v-5.667c-.002-1.955-1.578-3.54-3.522-3.541zM21.836 23.375h-1.41a1.33 1.33 0 0 1-1.409 1.417c-1.943.002-3.519 1.586-3.52 3.541V34h1.408v-5.667a2.12 2.12 0 0 1 2.113-2.125 2.747 2.747 0 0 0 2.818-2.833z"
            fill="##3452de"
          ></path>
          <path
            d="M19.721 29.041h-1.408V34h1.408V29.04zM26.766 29.041h-1.409V34h1.41V29.04zM15.497 18.416h-1.41v1.417h1.41v-1.417zM15.497 21.25h-1.41v1.417h1.41V21.25zM15.497 24.084h-1.41V25.5h1.41v-1.416z"
            fill="#3452de"
          ></path>
        </svg>
      ),
      text: "We understand the specific cause and effect of your project.",
      id: "1",
    },
    {
      title: "ANALYSIS",
      icon: (
        <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
          <title>Analysis Icon</title>
          <g fill="none">
            <path
              d="M20.145 12.049c-3.887-1.8-8.49-.09-10.279 3.82-1.79 3.908-.089 8.536 3.798 10.335.255.112.42.363.423.642v5.029A2.12 2.12 0 0 0 16.2 34h1.409a2.12 2.12 0 0 0 2.113-2.125V26.847a.709.709 0 0 1 .423-.643 7.77 7.77 0 0 0 3.798-3.82c1.79-3.908.089-8.536-3.798-10.335zm-2.536 20.534H16.2a.706.706 0 0 1-.704-.708h2.817a.707.707 0 0 1-.704.708zm-2.113-2.125v-.708h2.817v.708h-2.817zm4.059-5.542a2.136 2.136 0 0 0-1.242 1.93v1.487h-.704v-7.791h1.409a2.12 2.12 0 0 0 2.113-2.125v-.709h-1.409v.709a.706.706 0 0 1-.704.708H14.79a.706.706 0 0 1-.704-.708v-.709h-1.409v.709a2.12 2.12 0 0 0 2.113 2.125h1.41v7.791h-.705v-1.487a2.136 2.136 0 0 0-1.24-1.928 6.373 6.373 0 0 1-3.654-5.065c-.4-3.497 2.095-6.66 5.573-7.062a6.262 6.262 0 0 1 4.956 1.582 6.372 6.372 0 0 1 1.533 2.087c1.463 3.199.071 6.985-3.11 8.456zM7.044 0C3.16 0 0 2.86 0 6.375s3.16 6.375 7.044 6.375c3.884 0 7.044-2.86 7.044-6.375S10.928 0 7.044 0zm0 11.333c-3.107 0-5.635-2.224-5.635-4.958s2.528-4.958 5.635-4.958c3.107 0 5.635 2.224 5.635 4.958s-2.528 4.958-5.635 4.958z"
              fill="#3452de"
            ></path>
            <path
              d="M31.697 0h-12.68a2.12 2.12 0 0 0-2.113 2.125v7.792h1.41V2.125c0-.391.314-.708.704-.708h12.679c.389 0 .704.317.704.708v13.458a.706.706 0 0 1-.704.709h-5.635v1.416h5.635a2.12 2.12 0 0 0 2.113-2.125V2.125A2.12 2.12 0 0 0 31.697 0zM9.654 25.708l-2.818-2.834-.996 1.002L7.456 25.5H4.93a.706.706 0 0 1-.705-.708V13.458H2.816v11.334a2.12 2.12 0 0 0 2.114 2.125h2.526L5.84 28.54l.996 1.002 2.818-2.834a.711.711 0 0 0 0-1.001zM30.785 18.624a.702.702 0 0 0-.996 0l-2.818 2.834.996 1.001 1.615-1.624v6.082c-.002 1.955-1.577 3.539-3.521 3.541h-2.114v1.417h2.114c2.721-.003 4.927-2.221 4.93-4.958v-6.082l1.616 1.624.996-1.001-2.818-2.834z"
              fill="#3452de"
            ></path>
            <path
              d="M28.467 7.083l-1.202-1.209a.702.702 0 0 0-.996 0l-3.024 3.041-1.616-1.624a.702.702 0 0 0-.498-.208h-1.408V8.5h1.117l1.907 1.918a.702.702 0 0 0 .996 0l3.024-3.041.91.916a.702.702 0 0 0 .498.207h2.818V7.083h-2.526zM22.542 30.459h-1.41v1.416h1.41V30.46zM7.749 5.667h-1.41v1.416h1.41V5.667zM10.565 5.667H9.156v1.416h1.409V5.667zM4.93 5.667H3.521v1.416h1.41V5.667z"
              fill="#3452de"
            ></path>
          </g>
        </svg>
      ),
      text: "We examine with detail the elements and structure of your company",
      id: "2",
    },
    {
      title: "BRAINSTORMING",
      icon: (
        <svg width="30" height="34" xmlns="http://www.w3.org/2000/svg">
          <title>Icon of two people with a connected gear</title>
          <g fill="none">
            <path
              d="M22.541 6.375h-1.776a6.611 6.611 0 0 0-.255-.618l1.256-1.264a.711.711 0 0 0 0-1.002l-1.992-2.004a.702.702 0 0 0-.997 0l-1.256 1.264a6.499 6.499 0 0 0-.615-.256V.708A.706.706 0 0 0 16.2 0h-2.817a.706.706 0 0 0-.705.708v1.787c-.209.074-.414.16-.614.255l-1.257-1.262a.702.702 0 0 0-.996 0L7.819 3.49a.711.711 0 0 0 0 1.002l1.257 1.264c-.096.201-.18.408-.255.618H7.044a.706.706 0 0 0-.704.708v2.834c0 .39.315.708.704.708h1.777c.074.21.159.417.254.618L7.82 12.507a.711.711 0 0 0 0 1.002l1.993 2.003c.275.277.72.277.996 0l1.257-1.263c.2.096.405.181.614.256v1.787c0 .39.316.708.705.708h2.818a.706.706 0 0 0 .704-.708v-1.786c.21-.075.414-.16.615-.257l1.257 1.263c.275.277.72.277.996 0l1.992-2.003a.711.711 0 0 0 0-1.002l-1.256-1.264c.095-.201.18-.408.255-.618h1.776a.706.706 0 0 0 .705-.708V7.083a.706.706 0 0 0-.705-.708zm-.704 2.833h-1.593a.705.705 0 0 0-.682.53 4.973 4.973 0 0 1-.525 1.276.711.711 0 0 0 .109.861l1.127 1.134-.996 1.001-1.127-1.133a.701.701 0 0 0-.857-.11 4.914 4.914 0 0 1-1.268.528.708.708 0 0 0-.528.686v1.602h-1.409l.001-1.6a.707.707 0 0 0-.528-.685 4.918 4.918 0 0 1-1.268-.528.701.701 0 0 0-.857.109l-1.127 1.133-.996-1.001 1.127-1.134a.711.711 0 0 0 .109-.861 4.973 4.973 0 0 1-.525-1.275.705.705 0 0 0-.682-.531H7.749V7.793h1.594a.705.705 0 0 0 .682-.531c.115-.448.291-.877.524-1.275a.711.711 0 0 0-.108-.862L9.314 3.992l.994-1.002 1.128 1.133c.227.229.58.274.856.11a4.915 4.915 0 0 1 1.268-.528.708.708 0 0 0 .528-.686V1.417h1.41v1.602c-.001.323.215.605.526.686.445.116.872.294 1.268.528.277.164.63.12.857-.11l1.127-1.132.996 1-1.127 1.133a.711.711 0 0 0-.108.861c.233.399.41.828.525 1.275.08.313.36.532.681.532h1.594v1.416z"
              fill="#3452de"
            ></path>
            <path
              d="M14.792 5.667A2.826 2.826 0 0 0 11.975 8.5a2.826 2.826 0 0 0 2.817 2.833A2.826 2.826 0 0 0 17.61 8.5a2.826 2.826 0 0 0-2.818-2.833zm0 4.25A1.413 1.413 0 0 1 13.383 8.5c0-.782.631-1.417 1.41-1.417.777 0 1.408.635 1.408 1.417s-.63 1.417-1.409 1.417zM9.86 17.708v1.396c0 2.358-1.263 4.271-2.817 4.271-1.554 0-2.818-1.913-2.818-4.27v-1.297a3.008 3.008 0 0 1 2.818-2.225v-1.416a4.411 4.411 0 0 0-4.205 3.37.713.713 0 0 0-.022.171v1.396c0 3.19 1.857 5.688 4.227 5.688s4.226-2.499 4.226-5.688v-1.396H9.86z"
              fill="#3452de"
            ></path>
            <path
              d="M10.567 24.792a1.326 1.326 0 0 1-1.409-1.417H7.749a2.745 2.745 0 0 0 2.818 2.833 2.12 2.12 0 0 1 2.113 2.125V34h1.409v-5.667c-.003-1.955-1.578-3.54-3.522-3.541zM6.34 23.375H4.93a1.33 1.33 0 0 1-1.409 1.417C1.58 24.794.003 26.378.001 28.333V34h1.409v-5.667a2.12 2.12 0 0 1 2.113-2.125 2.747 2.747 0 0 0 2.818-2.833z"
              fill="#3452de"
            ></path>
            <path
              d="M4.225 29.041H2.816V34h1.41V29.04zM11.268 29.041H9.86V34h1.41V29.04zM26.744 17.536a4.411 4.411 0 0 0-4.205-3.37v1.417a3.008 3.008 0 0 1 2.818 2.224v1.297c0 2.358-1.264 4.271-2.818 4.271s-2.818-1.913-2.818-4.27v-1.397h-1.408v1.396c0 3.19 1.856 5.688 4.226 5.688s4.226-2.499 4.226-5.688v-1.396a.71.71 0 0 0-.02-.172z"
              fill="#3452de"
            ></path>
            <path
              d="M26.063 24.792a1.326 1.326 0 0 1-1.409-1.417h-1.409a2.745 2.745 0 0 0 2.818 2.833 2.12 2.12 0 0 1 2.113 2.125V34h1.409v-5.667c-.002-1.955-1.578-3.54-3.522-3.541zM21.836 23.375h-1.41a1.33 1.33 0 0 1-1.409 1.417c-1.943.002-3.519 1.586-3.52 3.541V34h1.408v-5.667a2.12 2.12 0 0 1 2.113-2.125 2.747 2.747 0 0 0 2.818-2.833z"
              fill="#3452de"
            ></path>
            <path
              d="M19.721 29.041h-1.408V34h1.408V29.04zM26.766 29.041h-1.409V34h1.41V29.04zM15.497 18.416h-1.41v1.417h1.41v-1.417zM15.497 21.25h-1.41v1.417h1.41V21.25zM15.497 24.084h-1.41V25.5h1.41v-1.416z"
              fill="#3452de"
            ></path>
          </g>
        </svg>
      ),
      text: "All our great minds are brought together for your benefit",
      id: "3",
    },
    {
      title: "DESIGN",
      icon: (
        <svg width="34" height="32" xmlns="http://www.w3.org/2000/svg">
          <g fill="none">
            <title>Icon with paper and pen and ruler</title>
            <path
              d="M33.607 6.582L27.267.208a.703.703 0 0 0-1.203.5v4.959a2.12 2.12 0 0 0 2.114 2.125h4.93a.703.703 0 0 0 .498-.208.711.711 0 0 0 0-1.002zm-5.43-.207a.706.706 0 0 1-.704-.708V2.418l3.935 3.957h-3.23z"
              fill="#3452de"
            ></path>
            <path
              d="M33.605 6.583L27.265.208A.702.702 0 0 0 26.767 0H2.113A2.12 2.12 0 0 0 0 2.125V17h1.409V2.125c0-.391.315-.708.704-.708h24.363l5.927 5.96V17h1.408V7.083a.71.71 0 0 0-.206-.5z"
              fill="#3452de"
            ></path>
            <path
              d="M24.654 14.167H22.88a6.471 6.471 0 0 0-.256-.619l1.256-1.263a.711.711 0 0 0 0-1.002L21.887 9.28a.702.702 0 0 0-.996 0l-1.257 1.264a6.497 6.497 0 0 0-.615-.257V8.5a.706.706 0 0 0-.704-.708h-2.818a.706.706 0 0 0-.704.708v1.786c-.21.075-.415.16-.615.256L12.92 9.28a.702.702 0 0 0-.996 0l-1.993 2.004a.711.711 0 0 0 0 1.002l1.258 1.263a6.478 6.478 0 0 0-.256.619H9.158a.706.706 0 0 0-.705.708v2.126h1.409v-1.417h1.593c.32 0 .6-.219.68-.531.116-.448.293-.877.527-1.275a.711.711 0 0 0-.11-.862l-1.126-1.133.996-1.002 1.127 1.134c.227.229.58.273.856.109a4.915 4.915 0 0 1 1.268-.528.708.708 0 0 0 .529-.685V9.208h1.408v1.602c0 .323.217.605.528.685.445.116.872.294 1.268.528.277.165.63.12.857-.109l1.127-1.133.996 1.001-1.127 1.134a.711.711 0 0 0-.11.861c.234.398.411.827.527 1.275.08.313.36.53.68.531h1.594V17h1.409v-2.125a.706.706 0 0 0-.705-.708z"
              fill="#3452de"
            ></path>
            <path
              d="M16.906 13.458a2.826 2.826 0 0 0-2.818 2.834V17h1.409v-.708c0-.783.63-1.417 1.408-1.417.779 0 1.41.634 1.41 1.417V17h1.408v-.708a2.825 2.825 0 0 0-2.817-2.834zM21.135 19.125h-1.408v2.833h1.408v-2.833zM14.09 19.125h-1.408v2.833h1.408v-2.833zM7.044 19.125h-1.41v2.833h1.41v-2.833zM28.178 19.125H26.77v2.833h1.408v-2.833z"
              fill="#3452de"
            ></path>
            <path
              d="M31.699 18.417H2.114c-.778 0-1.409.634-1.409 1.416v4.25c0 .783.63 1.417 1.409 1.417h29.585c.778 0 1.409-.634 1.409-1.417v-4.25c0-.782-.631-1.416-1.41-1.416zm0 5.666H2.114v-4.25h29.585v4.25z"
              fill="#3452de"
            ></path>
            <path
              d="M17.612 19.125h-1.409v3.541h1.409v-3.541zM10.567 19.125H9.158v3.541h1.409v-3.541zM24.655 19.125h-1.409v3.541h1.409v-3.541zM7.044 27.625h-1.41v2.833h1.41v-2.833z"
              fill="#3452de"
            ></path>
            <path
              d="M32.794 28.452l-2.113-1.416a.706.706 0 0 0-.39-.12H1.41a.706.706 0 0 0-.705.71v2.832c0 .392.315.709.705.709h28.88c.14 0 .275-.042.39-.12l2.114-1.416a.71.71 0 0 0 0-1.179zM30.08 29.75H2.114v-1.417h27.965l1.056.709-1.056.708zM4.932 3.542H3.523v1.416h1.41V3.542zM7.749 3.542h-1.41v1.416h1.41V3.542zM10.568 6.375H3.523V7.79h7.045V6.375zM30.292 15.583h-2.817V17h2.817v-1.417zM6.341 15.583H3.523V17h2.818v-1.417z"
              fill="#3452de"
            ></path>
          </g>
        </svg>
      ),
      text: "After all the preparation steps the hard work begins.",
      id: 4,
    },
    {
      title: "DEVELOPMENT",
      icon: (
        <svg width="34" height="30" xmlns="http://www.w3.org/2000/svg">
          <title>Icon showing lines of code</title>
          <g fill="none">
            <path
              d="M23.95 0H4.226C1.893.002.002 1.904 0 4.25v16.292c.002 2.346 1.893 4.247 4.226 4.25H23.95c2.333-.003 4.224-1.904 4.226-4.25V4.25C28.174 1.904 26.283.002 23.95 0zm2.817 20.542a2.826 2.826 0 0 1-2.817 2.833H4.226a2.826 2.826 0 0 1-2.817-2.833V4.25a2.826 2.826 0 0 1 2.817-2.833H23.95a2.826 2.826 0 0 1 2.817 2.833v16.292z"
              fill="#3452de"
            ></path>
            <path
              d="M27.47 4.25H.703v1.417H27.47V4.25zM7.042 2.125H3.52v1.417h3.522V2.125zM9.862 2.125H8.453v1.417h1.409V2.125zM12.68 2.125h-1.408v1.417h1.408V2.125z"
              fill="#3452de"
            ></path>
            <path
              d="M29.584 3.542h-.704v1.416h.704a2.825 2.825 0 0 1 2.818 2.834V25.5a2.826 2.826 0 0 1-2.818 2.833H9.861A2.826 2.826 0 0 1 7.044 25.5h-1.41c.003 2.346 1.894 4.248 4.227 4.25h19.723c2.334-.002 4.225-1.904 4.227-4.25V7.792c-.002-2.347-1.893-4.248-4.227-4.25z"
              fill="#3452de"
            ></path>
            <path
              d="M33.105 7.792H28.88v1.416h4.226V7.792zM6.763 8.358l-.845-1.133L3.1 9.35a.71.71 0 0 0 0 1.133l2.818 2.125.845-1.133-2.066-1.558 2.066-1.559zM11.692 9.35L8.875 7.225l-.846 1.133 2.066 1.559-2.066 1.558.846 1.133 2.817-2.125a.711.711 0 0 0 0-1.133zM20.144 14.733l-.845-1.133-2.818 2.125a.71.71 0 0 0 0 1.133l2.818 2.125.845-1.133-2.066-1.558 2.066-1.559zM25.075 15.725L22.257 13.6l-.845 1.133 2.066 1.559-2.066 1.558.845 1.133 2.818-2.125a.711.711 0 0 0 0-1.133zM17.61 7.792h-4.227v1.416h4.226V7.792zM20.424 7.792h-1.408v1.416h1.408V7.792zM23.243 7.792h-1.409v1.416h1.409V7.792zM23.242 10.625h-4.226v1.417h4.226v-1.417zM17.608 10.625h-1.409v1.417h1.409v-1.417zM14.792 10.625h-1.41v1.417h1.41v-1.417zM9.156 14.167H4.93v1.416h4.226v-1.416zM11.975 14.167h-1.409v1.416h1.41v-1.416zM14.792 14.167h-1.41v1.416h1.41v-1.416zM14.793 17h-4.227v1.417h4.227V17zM9.157 17H7.748v1.417h1.409V17zM6.338 17H4.93v1.417h1.408V17zM22.54 19.833H4.93v1.417h17.61v-1.417zM30.993 11.333h-1.409v1.417h1.409v-1.417zM30.993 14.167h-1.409v1.416h1.409v-1.416zM30.993 17h-1.409v1.417h1.409V17z"
              fill="#3452de"
            ></path>
          </g>
        </svg>
      ),
      text:
        "Our developers take charge of translating the design into interactive digits",
      id: "5",
    },
    {
      title: "TESTING",
      icon: (
        <svg width="34" height="34" xmlns="http://www.w3.org/2000/svg">
          <g fill="none">
            <title>Icon of checklists and bell</title>
            <path
              d="M11.269 4.25H4.225v1.417h7.044V4.25zM5.633 7.083H4.225V8.5h1.408V7.084zM8.452 7.083H7.043V8.5h1.409V7.084z"
              fill="#3452de"
            ></path>
            <path
              d="M26.56 5.874L20.927.208A.702.702 0 0 0 20.428 0H2.113A2.12 2.12 0 0 0 0 2.125v29.75A2.12 2.12 0 0 0 2.113 34h7.749v-1.417H2.113a.706.706 0 0 1-.704-.708V2.125c0-.391.315-.708.704-.708h18.023l5.223 5.251v4.665h1.408V6.375a.71.71 0 0 0-.206-.5z"
              fill="#3452de"
            ></path>
            <path
              d="M21.836 5.667a.706.706 0 0 1-.705-.709V.708h-1.408v4.25a2.12 2.12 0 0 0 2.113 2.125h1.409V5.667h-1.41zM33.79 30.994l-.705-2.833a.705.705 0 0 0-.683-.536h-1.41v-8.5c-.002-2.737-2.208-4.955-4.93-4.958h-.793a2.826 2.826 0 0 0-2.027-2.039 2.816 2.816 0 0 0-3.43 2.039h-.794c-2.722.003-4.928 2.22-4.93 4.958v8.5h-1.41a.705.705 0 0 0-.683.536l-.704 2.833a.706.706 0 0 0 .683.88l21.132.001a.708.708 0 0 0 .683-.88zm-20.914-.536l.352-1.416h1.564a.706.706 0 0 0 .704-.709v-9.208c.002-1.955 1.578-3.54 3.522-3.542h1.409a.706.706 0 0 0 .704-.708c0-.782.63-1.417 1.409-1.417.778 0 1.409.635 1.409 1.417 0 .391.315.708.704.708h1.409c1.944.003 3.52 1.587 3.522 3.542v9.208c0 .392.315.709.704.709h1.563l.353 1.416H12.876z"
              fill="#3452de"
            ></path>
            <path
              d="M28.177 27.625H14.793v1.417h13.384v-1.417zM20.17 17a3.407 3.407 0 0 0-3.265 3.542h1.409a2.014 2.014 0 0 1 2.113-2.125V17a3.385 3.385 0 0 0-.257 0zM23.95 31.167c0 .782-.632 1.416-1.41 1.416a1.413 1.413 0 0 1-1.409-1.416h-1.408A2.826 2.826 0 0 0 22.54 34a2.826 2.826 0 0 0 2.818-2.833h-1.409zM7.747 10.625H4.929a.706.706 0 0 0-.704.708v2.834c0 .39.315.708.704.708h2.818a.706.706 0 0 0 .704-.708v-2.834a.707.707 0 0 0-.704-.708zm-2.114 2.833v-1.416h1.41v1.416h-1.41zM7.747 17.708H4.929a.706.706 0 0 0-.704.709v2.833c0 .391.315.708.704.708h2.818a.706.706 0 0 0 .704-.708v-2.833a.706.706 0 0 0-.704-.709zm-2.114 2.834v-1.417h1.41v1.417h-1.41zM7.747 24.792H4.929a.706.706 0 0 0-.704.708v2.833c0 .392.315.709.704.709h2.818a.706.706 0 0 0 .704-.709V25.5a.706.706 0 0 0-.704-.708zm-2.114 2.833v-1.417h1.41v1.417h-1.41zM16.904 10.625H9.859v1.417h7.045v-1.417zM12.677 13.459H9.859v1.416h2.818V13.46zM11.268 17.708H9.86v1.417h1.41v-1.417zM12.677 20.541H9.859v1.417h2.818V20.54zM11.268 24.791H9.86v1.417h1.41V24.79z"
              fill="#3452de"
            ></path>
          </g>
        </svg>
      ),
      text:
        "This is the final step before advertising. The project’s functionality is thoroughly tested and design verified.",
      id: "5",
    },
  ]);
  const content = (
    <>
      <section>
        <Container>
          <h3 className="secHead text-center">Why choose us?</h3>
          <div className="row">
            {reason.map((why) => (
              <>
                <div className="col-md-4 text-center">
                  <div
                    key={why.id}
                    data-aos="fade-up"
                    className={`${style.box}`}
                  >
                    <div className={style.icon}>{why.icon}</div>
                    <h5>{why.title}</h5>
                    <p>{why.text}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </Container>
      </section>
      <section>
        <Container>
          <div className="row">
            <div className="container mx-auto col-md-7">
              <div>
                <h1 className="secHead">
                  Our Quality feature that customers always prefer to use on
                  their products.
                </h1>
                <p className="mt-3">
                  Customers are our first priority and we provide some
                  exceptional features that our customer prefers . That's why
                  our customers never leave us .
                </p>
              </div>
              <div className="row mt-4">
                <div className="col-sm-6 mt-2">
                  <h5>Search Engine Optimization</h5>
                  <p>
                    By using Search Engine Optimization, You will get more
                    Clients.
                  </p>
                </div>
                <div className="col-sm-6 mt-2">
                  <h5>Wireframing Task</h5>
                  <p>
                    We respect our customer opinions and deals with them with
                    perfect wireframing.
                  </p>
                </div>
                <div className="col-sm-6 mt-2">
                  <h5>Content Writing</h5>
                  <p>
                    Proper Content Management is important to find out the real
                    clients for your agencies .
                  </p>
                </div>
                <div className="col-sm-6 mt-2">
                  <h5>UI/UX Desgin</h5>
                  <p>
                    We provide the best UI/UX Design by following the latest
                    trends of the market .
                  </p>
                </div>
              </div>
            </div>
            <div className={`${style.parentDekstop} col-md-5`}>
              <img
                src="https://res.cloudinary.com/codack/image/upload/v1600032347/undraw_progressive_app_m9ms_vabaiv.svg"
                alt="desktop"
                className={`${style.desktop}`}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
  return content;
};

export default Body;
