
import { bill, } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5] ml-12 sm:mr-[20px] mr-10" />
    </div>

    <div className={`${layout.sectionInfo} sm:ml-[90px] ml-2`}>
      <h2 className={styles.heading2}>
        Glatic growth <br className="sm:block hidden" />
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
        aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      
    </div>
  </section>
);

export default Billing;
