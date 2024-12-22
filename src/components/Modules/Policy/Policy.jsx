import { usePolicyData } from '@/hooks/usePolicyData';
import './Policy.scss';
import { useTranslation } from 'react-i18next';

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
  return <ul>{child}</ul>;
};

export default Policy;
