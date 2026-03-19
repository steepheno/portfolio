import styles from './SourceCodeCard.module.scss';

interface SourceCodeCardProps {
  fileName: string;
  imageSrc?: string;
}

export default function SourceCodeCard({ fileName, imageSrc }: SourceCodeCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.bar}>
        <div className={styles.filename}>{fileName}</div>
      </div>
      <div className={styles.media}>
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={fileName}
          />
        ) : (
          <div className={styles.placeholder}>
            <div className={styles.placeholderIcon}>{'</>'}</div>
            <span className={styles.placeholderText}>소스코드 캡처 이미지</span>
          </div>
        )}
      </div>
    </div>
  );
}
