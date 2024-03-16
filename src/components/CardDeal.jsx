import { development } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} md:ml-12 ml-2`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better deal <br className="sm:block hidden"/>
        in few steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, minus vitae! Soluta blanditiis saepe officiis, placeat ea error doloribus. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, perspiciatis!
      </p>
      <Button styles="mt-10"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={development} alt="card" className="mx-auto h-auto sm:w-[86%] w-[100%]" />
    </div>
  </section>
)

export default CardDeal;
