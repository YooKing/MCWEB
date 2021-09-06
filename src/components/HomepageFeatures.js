import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Step 1.',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        加入QQ群497912971
        <a class="button button--primary" href="https://jq.qq.com/?_wv=1027&k=551kUUF" target="_blank">加入QQ群</a>
      </>
    ),
  },
  {
    title: 'Step 2.',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        下载客户端(可用纯净版)提取码:bqdh,https://pan.baidu.com/s/1xU7rJIekhkwQJLor5fPVQw

      </>
    ),
  },
  {
    title: 'Step 3.',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        查看公告
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
