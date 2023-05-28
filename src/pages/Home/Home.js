import classNames from 'classnames/bind'
import style from './Home.module.scss'

const cx = classNames.bind(style)

function Home() {
  return (
    <div className={cx('home')}>
      <h1>This is Home page</h1>
    </div>
  );
}

export default Home;
