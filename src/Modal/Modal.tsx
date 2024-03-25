import style from './Modal.module.scss'

export function Modal({ imageUrl, onClose, modalActive, text }: any) {
  if (!imageUrl || !modalActive) return null
  return (
    <div className={style.modal} onClick={onClose}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <img
          src={imageUrl}
          alt={text ? text : 'img high'}
          title={text ? text : 'img high'}
        />

        <div onClick={onClose} className={style.div}>
          ✕
        </div>
      </div>
    </div>
  )
}
