import styles from './index.less';
import { Link, history, request, useLocation } from 'umi';
import { Menu, Row, Col } from 'antd';
import React, { useState, useEffect } from 'react';

const { SubMenu } = Menu;

const rootSubmenuKeys = [ '/user', '/list', '/goto', '/async', '/table', '/echarts', '/context', '/reducer', '/echartsMap' ];

function gotoTable() {
  request('/api/users/create', {
    method: 'post',
    data: {},
  }).then((res: any) => console.log(res)).catch((err: any) => console.log(err));
  history.push('/table')
}

export default function IndexPage(props: any) {
  const [ openKeys, setOpenKeys ] = useState(['/user']);
  const location  = useLocation();
  const selectedKeys : string[] = [ rootSubmenuKeys.indexOf(location.pathname).toString() ];

  useEffect(() => {
    if (location.pathname !== '') {
      setOpenKeys([location.pathname]);
    }
  }, []);
  const onOpenChange : any = (keys: Array<string>) => {
    const latestOpenKey: any = keys.find((key: string) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    // <div className={styles.bg}>
    //   <h1 className={styles.title}>Page index</h1>
    //   <Link to={"/user"}>user</Link>
    //   <br/>
    //   <Link to={"/list/list"}>list</Link>
    //   <br/>
    //   <Link to={"/goto"}>goto</Link>
    //   <br/>
    //   <Link to={"/async"}>async</Link>
    //   <br/>
    //   <Link to={"/table"}>table</Link>
    //   <br/>
    //   <span onClick={gotoTable}>history.push()跳转 </span>
    //   <span onClick={() => {gotoTable()}}>history.push()跳转2 </span>
    //   <span onClick={() => {props.history.push('/table')}}>history.push()跳转3 </span>
    // </div>
    <Row>
      <Col span={3}>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: '100%' }}
          defaultSelectedKeys={selectedKeys}
        >
          <SubMenu key={'/user'} title={'user'}>
            <Menu.Item key={'0'}><Link to={'/user'}>user</Link></Menu.Item>
          </SubMenu>
          <SubMenu key={'/list'} title={'list'}>
            <Menu.Item key={'1'}><Link to={'/list'}>list</Link></Menu.Item>
          </SubMenu>
          <SubMenu key={'/goto'} title={'goto'}>
            <Menu.Item key={'2'}><Link to={'/goto'}>goto</Link></Menu.Item>
          </SubMenu>
          <SubMenu key={'/async'} title={'async'}>
            <Menu.Item key={'3'}><Link to={'/async'}>async</Link></Menu.Item>
          </SubMenu>
          <SubMenu key={'/table'} title={'table'}>
            <Menu.Item key={'4'}><Link to={'/table'}>table</Link></Menu.Item>
          </SubMenu>
          <SubMenu key={'/echarts'} title={'echarts'}>
            <Menu.Item key={'5'}><Link to={'/echarts'}>echarts</Link></Menu.Item>
          </SubMenu>
          <SubMenu key={'/context'} title={'context'}>
            <Menu.Item key={'6'}><Link to={'/context'}>context</Link></Menu.Item>
          </SubMenu>
          <SubMenu key={'/reducer'} title={'reducer'}>
            <Menu.Item key={'7'}><Link to={'/reducer'}>reducer</Link></Menu.Item>
          </SubMenu>
          <SubMenu key={'/echartsMap'} title={'echartsMap'}>
            <Menu.Item key={'8'}><Link to={'/echartsMap'}>echartsMap</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Col>
      <Col span={20}>
        {props.children}
      </Col>
    </Row>

  );
}
