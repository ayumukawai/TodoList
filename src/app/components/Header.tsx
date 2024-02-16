import styles from '@/styles/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>サイト名</h1>
        <nav>
          <ul className={styles.navList}>
            <li>
              <a href="#">ホーム</a>
            </li>
            <li>
              <a href="#">サービス</a>
            </li>
            <li>
              <a href="#">製品</a>
            </li>
            <li>
              <a href="#">お問い合わせ</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
