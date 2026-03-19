import styles from './SourceCodeCard.module.scss';

interface SourceCodeCardProps {
  filename: string;
  title: string;
  desc: string;
  imageSrc?: string;
}

export default function SourceCodeCard({ filename, title, desc, imageSrc }: SourceCodeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.bar}>
        <div className={styles.filename}>{filename}</div>
      </div>
      <div className={styles.media}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon}>{'</>'}</div>
            <span className={styles.placeholderText}>소스코드 캡처 이미지</span>
          </div>
        )}
      </div>
      <div className={styles.caption}>
        <div className={styles.captionTitle}>{title}</div>
        <div className={styles.captionDesc}>{desc}</div>
      </div>
    </div>
  );
}
