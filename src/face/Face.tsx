import { useEffect, useState } from 'react'
import style from './face.module.scss'
// import { Carousel } from './Carousel3/carousel'
import { Modal } from '../Modal/Modal'
import Carousel4 from './Carousel4/carousel'

const images = [
  {
    lowQualitySrc: '/carousel1/1small.jpg',
    highQualitySrc: '/carousel1/1orig.jpeg',
    text: 'Белый харёк',
  },
  {
    lowQualitySrc: '/carousel1/2small.jpg',
    highQualitySrc: '/carousel1/2orig.jpg',
    text: 'Тюлень',
  },
  {
    lowQualitySrc: '/carousel1/3small.jpeg',
    highQualitySrc: '/carousel1/3orig.jpg',
    text: 'Пара туканов',
  },
  {
    lowQualitySrc: '/carousel1/4small.jpg',
    highQualitySrc: '/carousel1/4orig.jpg',
    text: 'Удивлённая сова',
  },
  {
    lowQualitySrc: '/carousel1/5small.jpg',
    highQualitySrc: '/carousel1/5orig.jpeg',
    text: 'Балдеющий морской лев',
  },
  {
    lowQualitySrc: '/carousel1/6small.webp',
    highQualitySrc: '/carousel1/6orig.jpg',
    text: 'Безумный бизон',
  },
  {
    lowQualitySrc: '/carousel1/7small.jpg',
    highQualitySrc: '/carousel1/7orig.jpg',
    text: 'Белый медвед',
  },
  {
    lowQualitySrc: '/carousel1/8small.jfif',
    highQualitySrc: '/carousel1/8orig.jpg',
    text: 'Сладкое детям',
  },
  {
    lowQualitySrc: '/carousel1/9small.jpg',
    highQualitySrc: '/carousel1/9orig.jpg',
    text: 'Семейная идилия',
  },
  {
    lowQualitySrc: '/carousel1/10small.jpg',
    highQualitySrc: '/carousel1/10orig.jpg',
    text: 'Дай погрызть',
  },
  {
    lowQualitySrc: '/carousel1/11small.jpg',
    highQualitySrc: '/carousel1/11orig.jpg',
    text: 'Уф как могу',
  },
  {
    lowQualitySrc: '/carousel1/12.jpg',
    highQualitySrc: '/carousel1/12.jpg',
    text: 'Суда иди',
  },
]

const images2 = [
  {
    lowQualitySrc: '/carousel2/1smal.jpg',
    highQualitySrc: '/carousel2/1max.jpg',
    text: 'Зелёная трава',
  },
  {
    lowQualitySrc: '/carousel2/2smal.jpg',
    highQualitySrc: '/carousel2/2max.jpg',
    text: 'Ледяная осенняя трава',
  },
  {
    lowQualitySrc: '/carousel2/3smal.jpg',
    highQualitySrc: '/carousel2/3max.jpg',
    text: 'Инопланетная трава',
  },
  {
    lowQualitySrc: '/carousel2/4smal.jpg',
    highQualitySrc: '/carousel2/4max.jpg',
    text: 'Грибы в лесу',
  },
  {
    lowQualitySrc: '/carousel2/5smal.jpg',
    highQualitySrc: '/carousel2/5max.jpg',
    text: 'Тропические заросли',
  },
  {
    lowQualitySrc: '/carousel2/6smal.jpg',
    highQualitySrc: '/carousel2/6max.jpg',
    text: 'Капли стекающие',
  },
  {
    lowQualitySrc: '/carousel2/7smal.jpg',
    highQualitySrc: '/carousel2/7max.jpg',
    text: 'Листва во время дождя',
  },
  {
    lowQualitySrc: '/carousel2/8smal.jpg',
    highQualitySrc: '/carousel2/8max.jpg',
    text: 'красивая росса',
  },
  {
    lowQualitySrc: '/carousel2/9smal.jpg',
    highQualitySrc: '/carousel2/9max.jpg',
    text: 'капли на стекле',
  },
  {
    lowQualitySrc: '/carousel2/10smal.jpg',
    highQualitySrc: '/carousel2/10max.jpg',
    text: 'капли',
  },
  {
    lowQualitySrc: '/carousel2/11smal.jpg',
    highQualitySrc: '/carousel2/11max.jpg',
    text: 'Капли на дереве',
  },
  {
    lowQualitySrc: '/carousel2/12smal.jpg',
    highQualitySrc: '/carousel2/12max.jpg',
    text: 'макро цветок',
  },
  {
    lowQualitySrc: '/carousel2/13smal.jpg',
    highQualitySrc: '/carousel2/13max.jpg',
    text: 'Живой папоротник',
  },
  {
    lowQualitySrc: '/carousel2/14smal.jpg',
    highQualitySrc: '/carousel2/14max.jpg',
    text: 'Задумчивая Улитка ',
  },
]
const images3 = [
  {
    lowQualitySrc: '/carousel3/1ssmall.jpg',
    highQualitySrc: '/carousel3/1sfull.jpg',
    text: 'Бирюзовая вселенная',
  },
  {
    lowQualitySrc: '/carousel3/2ssmall.jpg',
    highQualitySrc: '/carousel3/2sfull.jpg',
    text: 'Одинокий странник',
  },
  {
    lowQualitySrc: '/carousel3/3ssmall.jpg',
    highQualitySrc: '/carousel3/3sfull.jpg',
    text: 'Фиолетовая планета',
  },
  {
    lowQualitySrc: '/carousel3/4ssmall.jpg',
    highQualitySrc: '/carousel3/4sfull.jpg',
    text: 'Пустынная планета',
  },
  {
    lowQualitySrc: '/carousel3/5ssmall.jpg',
    highQualitySrc: '/carousel3/5sfull.jpg',
    text: 'Расколотая планета',
  },
  {
    lowQualitySrc: '/carousel3/6ssmall.jpg',
    highQualitySrc: '/carousel3/6sfull.jpg',
    text: 'Космонавт на вайбе',
  },
  {
    lowQualitySrc: '/carousel3/7ssmall.jpg',
    highQualitySrc: '/carousel3/7sfull.jpg',
    text: 'Искатель приключений',
  },
  {
    lowQualitySrc: '/carousel3/8ssmall.jpg',
    highQualitySrc: '/carousel3/8sfull.jpg',
    text: 'Солнечное затмение',
  },
  {
    lowQualitySrc: '/carousel3/9ssmall.jpg',
    highQualitySrc: '/carousel3/9sfull.jpg',
    text: 'Центр земли',
  },
  {
    lowQualitySrc: '/carousel3/10ssmall.jpg',
    highQualitySrc: '/carousel3/10sfull.jpg',
    text: 'На старт погнали',
  },
]
export function Face({ openRegForm, userActive }: any) {
  const [modalActive, setModalActive] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const [modalImageUrl, setModalImageUrl] = useState(null)
  const [selectedText, setSelectedText] = useState('')
  // const [visible, setVisible] = useState(false)

  // const buttonVisible = useRef<HTMLInputElement>(null)

  // const openModal = (image: any) => {
  //   setSelectedImage(image)
  //   setModalActive(true)
  // }

  const closeModal = () => {
    setSelectedImage(null)
    setModalActive(false)
  }

  useEffect(() => {
    const handleBodyScroll = () => {
      if (modalActive && selectedImage) {
        document.body.style.overflowY = 'hidden'
        setModalImageUrl(selectedImage)
      } else {
        document.body.style.overflowY = 'auto'
      }
    }
    handleBodyScroll()
    return () => {
      document.body.style.overflowY = 'auto'
      setModalImageUrl(null)
    }
  }, [modalActive, selectedImage])

  // useEffect(() => {
  //   const contentVisible = () => {
  //     setVisible(true)
  //   }

  //   buttonVisible.current?.addEventListener('click', contentVisible)
  //   return () => {
  //     buttonVisible.current?.removeEventListener('click', contentVisible)
  //   }
  // }, [])

  return (
    <div className={style.face}>
      <div
        className={
          userActive
            ? `${style.containerFace} ${style.visible}`
            : style.containerFace
        }
      >
        <div className={style.textInfo}>
          <h1>Only on Netflix</h1>
          Netflix is the home of amazing original programming that you can’t
          find anywhere else. Movies, TV shows, specials and more, all tailored
          specifically to you.
        </div>
        <h3 className={style.title}>Что посмотреть на севере</h3>
        <Carousel4
          images={images}
          modalActive={modalActive}
          setModalActive={setModalActive}
          setSelectedImage={setSelectedImage}
          setSelectedText={setSelectedText}
        />
        <h3 className={style.title}>Посмотри Макро-Мир</h3>
        <Carousel4
          images={images2}
          modalActive={modalActive}
          setModalActive={setModalActive}
          setSelectedImage={setSelectedImage}
          setSelectedText={setSelectedText}
        />
        <h3 className={style.title}>Космические приключения</h3>
        <Carousel4
          images={images3}
          modalActive={modalActive}
          setModalActive={setModalActive}
          setSelectedImage={setSelectedImage}
          setSelectedText={setSelectedText}
        />
        <Carousel4
          images={images}
          modalActive={modalActive}
          setModalActive={setModalActive}
          setSelectedImage={setSelectedImage}
          setSelectedText={setSelectedText}
        />
        <h3 className={style.title}>Посмотри Макро-Мир</h3>
        <Carousel4
          images={images2}
          modalActive={modalActive}
          setModalActive={setModalActive}
          setSelectedImage={setSelectedImage}
          setSelectedText={setSelectedText}
        />
        <h3 className={style.title}>Космические приключения</h3>
        <Carousel4
          images={images3}
          modalActive={modalActive}
          setModalActive={setModalActive}
          setSelectedImage={setSelectedImage}
          setSelectedText={setSelectedText}
        />
      </div>
      <div className={userActive ? style.hidden : style.containerCurtain}>
        <div className={style.curtain}>
          <h2>There’s even more to watch.</h2>
          <p>
            Netflix has an extensive library of feature films, documentaries, TV
            programmes, anime, award-winning Netflix originals and more. Watch
            as much as you want, any time you want.
          </p>
          <button onClick={openRegForm}>JOIN NOW</button>
        </div>
      </div>
      <Modal
        imageUrl={modalImageUrl}
        onClose={closeModal}
        modalActive={modalActive}
        text={selectedText}
      />
    </div>
  )
}
