import { Menu, MenuProps, Typography} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setTopic } from '../../store/TopicReducer';
import { Header } from 'antd/es/layout/layout';
import UserInfo from './UserInfo';
import { TitleHolder } from '../Styles/HeaderLayout.style';
;

const { Title } = Typography;

const themes = ['Россия', 'США', 'Германия', 'Корея', 'Китай']
const keys = ['ru', 'us', 'gr', 'kr', 'ch']

const items = new Array(themes.length).fill(null).map((_, index) => ({
  key: keys[index],
  label: themes[index],
}));


const HeaderLayout = () => {

  const topicState = useSelector((state: RootState) => state.topic.value)
  const dispatch = useDispatch()
  const onClick: MenuProps['onClick'] = (e) => {
    dispatch(setTopic(e.key))
  };

  return (
      <>
        <TitleHolder>
          <Title style={{color: 'rgba: var(--tg-theme-text-color)'}}>Telegram News</Title>
          <UserInfo/>
        </TitleHolder>
        <Menu
        title='TelegramNews'
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={items}
        style={{ flex: 1, position: 'sticky', top: 0, zIndex: 2}}
        onClick={onClick}
        />
        </>

  )
}

export default HeaderLayout
