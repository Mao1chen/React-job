import './index.less';
import Address from '@/assest/service-center/address.png';
import Arrow from '@/assest/service-center/arrow.png';

interface TitleComponentProps {
  address: string;
  type: string;
  img: string;
  link: any;
}

export default ({ address, type, img, link }: TitleComponentProps) => {

  return (
    <div
      className={
        type === 'pc'
          ? 'addressCard pc-addressCard'
          : 'addressCard h5-addressCard'
      }
      onClick={() => {
        link ? window.open(link) : '';
      }}
    >
      <div>
        <img
          className="itemImg"
          src={require(`../../assest/service-center/${img}`)}
        />
      </div>
      <div className="address">
        <img src={Address} />
        <span>{address}</span>
      </div>
      <div className="arrow">
        <img src={Arrow} />
      </div>
    </div>
  );
};
