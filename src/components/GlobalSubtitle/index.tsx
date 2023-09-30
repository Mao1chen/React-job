import './index.less';
import Decorate from '@/assest/service-center/decorate.png';

interface TitleComponentProps {
  title: string;
  type: string;
}

export default ({ title, type }: TitleComponentProps) => {
  return (
    <div
      className={
        type === 'pc' ? 'subtitle pc-subtitle' : 'subtitle h5-subtitle'
      }
    >
      <div>{title}</div>
      <img src={Decorate} />
    </div>
  );
};
