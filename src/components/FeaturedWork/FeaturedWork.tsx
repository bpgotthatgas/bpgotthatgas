import { featuredProjects } from '../../data/projects';
import styles from './FeaturedWork.module.css';

export function FeaturedWork() {
  return (
    <section id="work" className={styles.section} aria-labelledby="work-heading">
      <div className="container">
        <h2 id="work-heading" className={styles.heading}>
          FEATURED WORK
        </h2>
        <ul className={styles.grid}>
          {featuredProjects.map((project) => (
            <li key={project.id} className={styles.card}>
              <div className={styles.artworkWrap}>
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className={styles.artwork}
                  loading="lazy"
                />
              </div>
              <div className={styles.meta}>
                <p className={styles.artist}>{project.artist}</p>
                <p className={styles.title}>{project.title}</p>
                <p className={styles.role}>{project.role}</p>
                <p className={styles.year}>{project.year}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
