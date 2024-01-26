import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "个人简介",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        基本信息：农转码，计算机科学与技术专业硕士毕业.23年毕业，现从事于新能源行业。
        菜鸟程序猿， 前后端crud程序员
      </>
    ),
  },
  {
    title: "擅长技能",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        前端（熟练使用）：前端三件套+vue2全家桶+饿了么ui+axios
        后端（熟练使用）：java+ssm+springboot  nodejs
        其他：mysql数据库，熟悉若依开源框架
      </>
    ),
  },
  {
    title: "其他技能",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        英语6级
        软考中级（系统集成项目管理工程师傅）
      </>

    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
