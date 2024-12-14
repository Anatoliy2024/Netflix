import style from "./footer.module.scss"

export function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <p>
          <a href="#">
            Read about Netflix TV programmes and films and watch bonus videos on
            Tudum.com.
          </a>
        </p>

        <p>
          <a href="">Questions? Contact us.</a>
        </p>

        <div className={style.containerLink}>
          <div>
            <a href="#">FAQ</a>
          </div>
          <div>
            <a href="#">Help Centre</a>
          </div>
          <div>
            <a href="#">Account</a>
          </div>
          <div>
            <a href="#">Media Centre</a>
          </div>
          <div>
            <a href="#">Investor Relations</a>
          </div>
          <div>
            <a href="#">Jobs</a>
          </div>
          <div>
            <a href="#">Redeem gift cards</a>
          </div>
          <div>
            <a href="#">Buy gift cards</a>
          </div>
          <div>
            <a href="#">Ways to Watch</a>
          </div>
          <div>
            <a href="#">Terms of Use</a>
          </div>
          <div>
            <a href="#">Privacy</a>
          </div>
          <div>
            <a href="#">Cookie Preferences</a>
          </div>
          <div>
            <a href="#">Corporate Information</a>
          </div>
          <div>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <a href="#">Speed Test</a>
          </div>
          <div>
            <a href="#">Legal Guarantee</a>
          </div>
          <div>
            <a href="#">Legal Notices</a>
          </div>
          <div>
            <a href="#">Only on Netflix</a>
          </div>
          <div>
            <a href="#">Advert choices</a>
          </div>
        </div>
        <div className={style.selectContainer}>
          <select>
            <option value="1">English</option>
            <option value="2">Nederlanden</option>
          </select>
        </div>
      </div>
    </div>
  )
}
