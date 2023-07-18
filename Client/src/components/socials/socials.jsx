import styles from "./socials.module.css";

function Socials() {
  return (
    <div className={styles.container}>
      <a
        href="https://github.com/Facundovila03"
        target="_blank"
        rel="noreferrer">
        <svg
          className={styles.githubSVG}
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none">
          <path
            className={styles.githubSVGPath}
            d="M33.5 0C15.0024 0 0 14.9996 0 33.5C0 48.3014 9.59775 60.8583 22.9112 65.2887C24.5834 65.5986 25.125 64.5601 25.125 63.6779V57.4413C15.8064 59.4681 13.8662 53.4883 13.8662 53.4883C12.342 49.6163 10.1449 48.5862 10.1449 48.5862C7.10479 46.5064 10.3766 46.551 10.3766 46.551C13.7406 46.7855 15.5105 50.0043 15.5105 50.0043C18.4976 55.1242 23.3467 53.6447 25.259 52.7876C25.5577 50.6241 26.4259 49.1445 27.3863 48.3098C19.9465 47.4583 12.1242 44.5857 12.1242 31.7524C12.1242 28.0925 13.4335 25.1055 15.5747 22.7605C15.2285 21.9146 14.0812 18.506 15.9013 13.8941C15.9013 13.8941 18.7153 12.9952 25.1166 17.3279C27.7882 16.5853 30.6525 16.214 33.5 16.2C36.3475 16.214 39.2145 16.5853 41.8918 17.3279C48.2875 12.9952 51.0959 13.8941 51.0959 13.8941C52.9188 18.5087 51.7715 21.9174 51.4253 22.7605C53.5749 25.1055 54.873 28.0953 54.873 31.7524C54.873 44.6192 47.0368 47.4527 39.5775 48.2819C40.7779 49.3204 41.875 51.3583 41.875 54.485V63.6779C41.875 64.5685 42.411 65.6153 44.1111 65.2859C57.4134 60.85 67 48.2958 67 33.5C67 14.9996 52.0004 0 33.5 0Z"
            fill="#E7EDEE"
          />
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/facundo-vila-7397b5222/"
        target="_blank"
        rel="noreferrer">
        <svg
          className={styles.linkedinSVG}
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.05 0H56.95C62.5011 0 67 4.49895 67 10.05V56.95C67 62.5011 62.5011 67 56.95 67H10.05C4.49895 67 0 62.5011 0 56.95V10.05C0 4.49895 4.49895 0 10.05 0ZM18.3203 24.1436C20.9944 24.1436 23.1621 21.9758 23.1621 19.3018C23.1621 16.6277 20.9944 14.46 18.3203 14.46C15.6463 14.46 13.4785 16.6277 13.4785 19.3018C13.4785 21.9758 15.6463 24.1436 18.3203 24.1436ZM40.5664 32.9111C37.5566 32.9111 35.8555 35.5283 35.8555 38.1455V52.54H27.2619V26.6299H35.8555V30.2939C36.9023 28.5928 39.127 26.1064 43.5762 26.1064C49.334 26.1064 53.5215 29.7705 53.5215 37.7529V52.54H44.8848V38.7998C44.8848 35.2666 43.707 32.9111 40.5664 32.9111ZM22.4882 26.6299H13.8946V52.54H22.4882V26.6299Z"
            fill="#E7EDEE"
          />
        </svg>
      </a>
    </div>
  );
}
export default Socials;
