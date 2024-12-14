// import { useEffect, useRef, useState } from 'react'
// import style from './carousel.module.scss'
// import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
// // import { Modal } from '../../Modal/Modal'
// //ширина каждого элемента слайда
// const WIDTH_DIV = 300

// export function Carousel({
//   images,
//   modalActive,
//   setModalActive,
//   setSelectedImage,
// }: any) {
//   const [offSet, setOffSet] = useState(0)
//   const [sliderWidth, setSliderWidth] = useState(0)
//   const [mousePositionX, setMousePositionX] = useState({
//     startX: 0,
//     endX: 0,
//     startY: 0,
//     endY: 0,
//   })
//   const [swipeScroll, setSwipeScroll] = useState({
//     isSwipe: false,
//     isScroll: false,
//   })

//   const [clickSlider, setClickSlider] = useState(false)
//   const [touchSlider, setTouchSlider] = useState(false)
//   // const [onWheel, setOnwheel] = useState(false)
//   // const [modalActive, setModalActive] = useState(false)
//   // const [selectedImageKeeper, setSelectedImageKeeper] = useState(null)

//   const sliderRef = useRef<HTMLInputElement>(null)

//   //Движение слайда вправо
//   const autoChangeRight = (current: number, distance: number) => {
//     const sideLine = current - distance

//     if (sideLine > -(WIDTH_DIV * images.length - sliderWidth)) {
//       return sideLine
//     } else if (
//       //убрать (images.length - 1) * 20 если убрать марджин
//       -WIDTH_DIV * images.length - (images.length - 1) * 20 ==
//       sideLine
//     ) {
//       return 0
//     } else {
//       //убрать (images.length - 1) * 20 если убрать марджин
//       return -WIDTH_DIV * images.length + sliderWidth - (images.length - 1) * 20
//     }
//   }

//   //движение слайда влево
//   const autoChangeLeft = (current: number, distance: number) => {
//     const sideLine = current + distance
//     if (sideLine < 0) {
//       return sideLine
//     } else if (sliderWidth - sideLine == 0) {
//       //(images.length - 1) * 20 убрать если нет маргин
//       return -WIDTH_DIV * images.length + sliderWidth - (images.length - 1) * 20
//     } else {
//       return 0
//     }
//   }

//   //расчёт на сколько двигать слайдер
//   const calculated = (event: any) => {
//     if (mousePositionX.startX > mousePositionX.endX) {
//       const differentX = mousePositionX.startX - mousePositionX.endX
//       setOffSet((current: number) => {
//         return autoChangeRight(current, differentX)
//       })
//       //двигаю ленту влево на разницу
//     } else if (mousePositionX.startX < mousePositionX.endX) {
//       const differentX = mousePositionX.endX - mousePositionX.startX
//       //двигаю ленту в право на разницу
//       setOffSet((current: number) => {
//         return autoChangeLeft(current, differentX)
//       })
//     } else if (
//       mousePositionX.startX === mousePositionX.endX &&
//       event.target.tagName !== 'path'
//     ) {
//       setModalActive(true)
//       return
//     }
//   }
//   //проверка если модальное окно true отправляю картинку
//   const handleImageClick = (img: any) => {
//     if (modalActive) {
//       setSelectedImage(img)
//     }
//   }

//   //Событие для onMouseDown,onMouseUp
//   useEffect(() => {
//     const updateMouseDown = (event: any) => {
//       //проверка на нажатие левой кнопки мыши
//       if (event.button === 0) {
//         //задано первоначальное значение
//         setMousePositionX(
//           Object.assign(mousePositionX, { startX: event.clientX })
//         )
//       }
//     }

//     const updateMouseUp = (event: any) => {
//       //проверка на нажатие левой кнопки мыши
//       if (event.button === 0) {
//         //задано конечное значение
//         setMousePositionX(
//           Object.assign(mousePositionX, { endX: event.clientX })
//         )
//         return calculated(event)
//       }
//     }

//     sliderRef.current?.addEventListener('mousedown', updateMouseDown)
//     sliderRef.current?.addEventListener('mouseup', updateMouseUp)
//     return () => {
//       sliderRef.current?.removeEventListener('mousedown', updateMouseDown)
//       sliderRef.current?.removeEventListener('mouseup', updateMouseUp)
//     }
//   }, [clickSlider])

//   //событие для scrollStart, scrollMove, scrollEnd
//   useEffect(() => {
//     const updateTouchStart = (event: any) => {
//       //проверяет может ли событие быть отменено, и если да отменяет его
//       if (event.cancelable) {
//         event.preventDefault()
//       }

//       setMousePositionX(
//         Object.assign(mousePositionX, {
//           startX: event.touches[0].clientX,
//           startY: event.touches[0].clientY,
//         })
//       )
//     }
//     const updateTouchMove = (event: any) => {
//       setMousePositionX(
//         Object.assign(mousePositionX, {
//           endX: event.touches[0].clientX,
//           endY: event.touches[0].clientY,
//         })
//       )
//       //проверка события slide или scroll
//       if (!swipeScroll.isSwipe && !swipeScroll.isScroll) {
//         let differentY = mousePositionX.startY - mousePositionX.endY
//         let differentX = mousePositionX.startX - mousePositionX.endX
//         //можно убрать Math.ceil он сокращает в большую сторону
//         let posX = Math.ceil(Math.abs(differentX))
//         let posY = Math.abs(differentY)
//         if (posX == 0 && posY == 0) {
//           console.log('object')
//         }
//         if (posY > 7 && posX < 5) {
//           setSwipeScroll(Object.assign(swipeScroll, { isScroll: true }))
//         } else if (posY < 7 && posX > 5) {
//           setSwipeScroll(Object.assign(swipeScroll, { isSwipe: true }))
//         }
//       }

//       //проверяет может ли событие быть отменено, и если да отменяет его
//       if (swipeScroll.isSwipe) {
//         return calculated(event)
//       }
//       if (swipeScroll.isScroll) {
//         window.scrollBy(0, mousePositionX.startY - mousePositionX.endY)
//       }
//     }
//     const updateTouchEnd = (event: any) => {
//       // определяем что произошёл клик
//       if (
//         mousePositionX.endX === 0 &&
//         mousePositionX.endY === 0 &&
//         event.target.tagName !== 'path'
//       ) {
//         setModalActive(true)
//         return
//       }

//       if (event.cancelable) {
//         event.preventDefault()
//       }
//       //обнуление значений скрола и свипера
//       setSwipeScroll(
//         Object.assign(swipeScroll, { isSwipe: false, isScroll: false })
//       )
//       //обнуление значений положения мышки
//       setMousePositionX({
//         startX: 0,
//         endX: 0,
//         startY: 0,
//         endY: 0,
//       })
//     }

//     sliderRef.current?.addEventListener('touchstart', updateTouchStart)
//     sliderRef.current?.addEventListener('touchmove', updateTouchMove)
//     sliderRef.current?.addEventListener('touchend', updateTouchEnd)
//     return () => {
//       sliderRef.current?.removeEventListener('touchstart', updateTouchStart)
//       sliderRef.current?.removeEventListener('touchmove', updateTouchMove)
//       sliderRef.current?.removeEventListener('touchend', updateTouchEnd)
//     }
//   }, [touchSlider])

//   //определение ширины объекта при его изменении для адаптивности
//   useEffect(() => {
//     const changeWidth = () => {
//       setSliderWidth(
//         sliderRef.current ? sliderRef.current.offsetWidth : sliderWidth
//       )
//     }
//     changeWidth()
//     window.addEventListener('resize', changeWidth)
//     return () => window.addEventListener('resize', changeWidth)
//   }, [sliderWidth])

//   //функция движения слайда влево
//   const goLeft = () => {
//     setOffSet((current: number) => {
//       return autoChangeLeft(current, sliderWidth)
//     })
//   }

//   //функция движения слайда вправо
//   const goRight = () => {
//     setOffSet((current: number) => {
//       return autoChangeRight(current, sliderWidth)
//     })
//   }

//   //прокрутка колёсиком мыши и запрет прокрутки всей страницы
//   const handleScroll = (e: any) => {
//     if (e.cancelable) {
//       e.preventDefault()
//     }
//     const delta = Math.sign(e.deltaY)
//     const slider = sliderRef.current
//     if (slider) {
//       if (delta > 0) {
//         const differentX = 300
//         setOffSet((current: number) => {
//           return autoChangeRight(current, differentX)
//         })
//       } else {
//         const differentX = 300
//         setOffSet((current: number) => {
//           return autoChangeLeft(current, differentX)
//         })
//       }
//     }
//   }

//   useEffect(() => {
//     sliderRef.current?.addEventListener('wheel', handleScroll)

//     return () => {
//       sliderRef.current?.removeEventListener('wheel', handleScroll)
//     }
//   }, [sliderWidth])

//   return (
//     <div ref={sliderRef} className={style.slider}>
//       <div className={style.window}>
//         <div
//           style={{
//             transform: `translateX(${offSet}px)`,
//           }}
//           className={style.sliderLine}
//         >
//           {images.map((img: any, index: number) => {
//             return (
//               <div
//                 onMouseDown={() => setClickSlider(true)}
//                 onMouseUp={() => {
//                   handleImageClick(img.highQualitySrc)
//                   setClickSlider(false)
//                 }}
//                 onTouchStart={() => setTouchSlider(true)}
//                 onTouchEnd={() => {
//                   handleImageClick(img.highQualitySrc)
//                   setTouchSlider(false)
//                 }}
//                 key={index}
//                 style={{
//                   maxWidth: `${WIDTH_DIV}px`,
//                   minWidth: `${WIDTH_DIV}px`,
//                 }}
//               >
//                 {<img src={img.lowQualitySrc} />}
//               </div>
//             )
//           })}
//         </div>
//       </div>

//       <AiOutlineCaretLeft
//         onTouchStart={goLeft}
//         onClick={goLeft}
//         className={style.arrow1}
//       />
//       <AiOutlineCaretRight
//         onTouchStart={goRight}
//         onClick={goRight}
//         className={style.arrow2}
//       />
//     </div>
//   )
// }
