import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSMoudle.module.scss';

const cx = classNames.bind(styles);

const CSSMoudle = () => {
    console.log(styles);
    return (
        <div className={cx('wrapper', 'inverted')}>    {/*className={[styles.wrapper, style.inverted].join(' ')}*/}
            안녕하세요, 저는 <span className="something">CSS Moudle!</span>
        </div>
    );
};

export default CSSMoudle;