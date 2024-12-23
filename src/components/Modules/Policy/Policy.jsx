import { usePolicyData } from '@/hooks/usePolicyData';
import './Policy.scss';

const Policy = () => {
  const { PolicyList } = usePolicyData();

  const forMapRule = (item) => {
    return (
      <li key={item.id}>
        <label>{item.section}</label>
        <div>{item.title}</div>
        <div>{item.content}</div>
      </li>
    );
  };
  const child = PolicyList.map(forMapRule);
  return (
    <div className="policy">
      <div className="policy__wrapper">
        <h1 className="policy__title">123</h1>
        <ul>{child}</ul>
      </div>
    </div>
  );
};

export default Policy;
