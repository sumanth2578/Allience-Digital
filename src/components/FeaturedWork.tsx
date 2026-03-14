import styles from "./FeaturedWork.module.css";
import Image from "next/image";

const projects = [
    { title: "Project 1", image: "/images/work/1.jpg" },
    { title: "Project 2", image: "/images/work/2.jpg" },
    { title: "Project 3", image: "/images/work/3.jpg" },
    { title: "Project 4", image: "/images/work/4.jpg" },
    { title: "Project 5", image: "/images/work/5.jpg" },
    { title: "Project 6", image: "/images/work/6.jpg" },
    { title: "Project 7", image: "/images/work/7.jpg" },
    { title: "Project 8", image: "/images/work/8.jpg" },
];

const FeaturedWork = () => {
    return (
        <section id="work" className={`section ${styles.featuredWork}`}>
            <div className="container">
                <div className={`${styles.header} reveal-right`}>
                    <h2 className="section-title">FEATURED <br /> WORK</h2>
                </div>

                <div className={styles.grid}>
                    {projects.map((project, index) => (
                        <div key={index} className={`${styles.projectCard} reveal-up delay-${(index % 4) + 1}`}>
                            <div className={styles.imagePlaceholder}>
                                PROJECT {index + 1}
                            </div>
                            {/* 
                            <Image 
                                src={project.image} 
                                alt={project.title} 
                                width={400} 
                                height={300} 
                                className={styles.image}
                            /> 
                            */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWork;
