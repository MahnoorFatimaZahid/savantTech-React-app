import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative flex`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] ">
      <div className="w-full text-center"> {/* Centering the content */}
        <h2 className={`${styles.heading2}`}>
          Why choose us?
        </h2>
        <p className={`${styles.paragraph} max-w-[450px] mx-auto mt-4`}> {/* Using mx-auto for horizontal centering */}
          Our company allows for maximum customization. No technical skills required – our intuitive design tools let you get the job done easily.
        </p>
      </div>
    </div>

    <div className="flex justify-center flex-wrap"> {/* Centering and making the cards responsive */}
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;

