import { Menu, MenuProps, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setTopic } from '../../store/TopicReducer';
;


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

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, width: '100vw'}}
          onClick={onClick}
        />

  )
}

export default HeaderLayout
