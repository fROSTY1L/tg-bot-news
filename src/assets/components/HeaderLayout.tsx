import { Menu, MenuProps } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setTopic } from '../../store/TopicReducer';


const themes = ['Главные новости', 'Спорт', 'Финансы', 'Программирование']

const items = new Array(themes.length).fill(null).map((_, index) => ({
  key: themes[index],
  label: themes[index],
}));


const HeaderLayout = () => {

  const topicState = useSelector((state: RootState) => state.topic.value)
  const dispatch = useDispatch()
  const onClick: MenuProps['onClick'] = (e) => {
    dispatch(setTopic(e.key))
    console.log(topicState)
  };

  return (

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
          onClick={onClick}
        />

  )
}

export default HeaderLayout
