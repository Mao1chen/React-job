import './index.less';

interface CardComponentProps {
  count: string;
  source: string;
  desc: string;
}

export default ({ count, desc, source }: CardComponentProps) => {
  return (
    <div className="home-card" onClick={() => {}}>
      <div>
        <img className="itemImg" src={require(`@/assest/home/${source}`)} />
      </div>
      <div style={{ marginLeft: 5 }}>
        <div className="count">{count}+</div>
        <div className="desc">{desc}</div>
      </div>
    </div>
  );
};
