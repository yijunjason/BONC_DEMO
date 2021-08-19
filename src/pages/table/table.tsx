import React, { useState, useEffect } from 'react';
import { Table, message, Space, Tag, ConfigProvider, Row, Col  } from 'antd';
import { request } from 'umi';
import zh_CN from 'antd/es/locale/zh_CN';

function del(res: any) {
  request('/api/table/delete', {
    method: 'post',
    data: {id: res.key},
  }).then((res: any) => {
    console.log(res);
  }).catch((err: any) => {
    console.log(err)
  })
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text: string, record: object) => <a>{text}</a>,
    filters: [
      { text: 'John', value: 'John' },
      { text: 'Jim', value: 'Jim' },
      { text: 'Black', value: 'Black' },
    ],
    onFilter: (value: any, record: any) => {return record.name.indexOf(value) >= 0},
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
    sorter: (a: any, b: any) => {return a.age - b.age},
    // showSorterTooltip: false,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: Array<object>) => (
      <>
        {tags.map((tag: any) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: any) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a onClick={() => {del(record)}}>Delete</a>
      </Space>
    ),
  },
];

export default function TablePage() {
  let [ tableData, setTableData ] = useState([]);
  useEffect(() => {
    request('/api/table/data', {
      method: 'post',
      data: {},
    })
      .then((res: any) => {
        setTableData(res);
      })
      .catch((err: any) => {message.error(err.toString());});
  }, []);

  return (
    <ConfigProvider locale={zh_CN}>
      <Row>
        <Col offset={2} span={20}>
          <Table dataSource={tableData} columns={columns}>

          </Table>
        </Col>
      </Row>
    </ConfigProvider>
  )
}
