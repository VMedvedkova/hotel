import React, { useRef, useState } from 'react';
import 'antd/dist/reset.css'
import { Button, Table, Input, Space, Checkbox, Form } from 'antd'
import Highlighter from 'react-highlight-words'
import { SearchOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom';

const RoomsTablePage = ({
  rooms
}) => {

  const handleClick = () => {
  }
  
const [filteredInfo, setFilteredInfo] = useState({});
const [sortedInfo, setSortedInfo] = useState({});
const [componentChecked, setComponentChecked] = useState(false);

const onChange = (pagination, filters, sorter, extra) => {
  setFilteredInfo(filters);
  setSortedInfo(sorter);
};
const clearAll = () => {
  setFilteredInfo({});
  setSortedInfo({});
  setSearchText('');
  setComponentChecked(false)
};
const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
const searchInput = useRef(null);
const handleSearch = (selectedKeys, confirm, dataIndex) => {
  confirm();
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};
const handleReset = (clearAll) => {
  clearAll();
};

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1890ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
    (value !== null) ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : record[dataIndex].length === 0,
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
  
const columns = [
  {
    title: 'Number',
    dataIndex: 'number',
    width: '5%',
    key: 'number'
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    filters: [
      {
        text: 'standard',
        value: 'standard',
      },
      {
        text: 'suite',
        value: 'suite',
      },
      {
        text: 'deluxe',
        value: 'deluxe',
      },
    ],
    // filterMode: 'tree',
    width: '15%',
    filterSearch: false,
    filteredValue: filteredInfo.type || null,
    onFilter: (value, record) => record.type.includes(value),
  },
  {
    title: 'Occupancy',
    dataIndex: 'occupancy',
    key: 'occupancy',
    filters: [
      {
        text: '1',
        value: 1,
      },
      {
        text: '2',
        value: 2,
      },
      {
        text: '3',
        value: 3,
      },
      {
        text: '4',
        value: 4,
      }
    ],
    filteredValue: filteredInfo.occupancy || null,
    onFilter: (value, record) => Number(record.occupancy) === value,
    filterSearch: true,
    width: '5%',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: '15%',
    sorter: (a, b) => a.price - b.price,
    sortOrder: sortedInfo.columnKey === 'price' ? sortedInfo.order : null,
  },
  {
    title: 'Guest',
    dataIndex: 'guest',
    key: 'guest',
    filters: [],
    width: '30%',
    filteredValue: filteredInfo.guest || null,
    onFilter: (value, record) =>  record.guest.length === 0,
    // sorter: (a, b) => a.guest.length - b.guest.length,
    // sortOrder: sortedInfo.columnKey === 'guest' ? sortedInfo.order : null,
    // sortDirections: ['descend', 'ascend'],    
    ...getColumnSearchProps('guest'),
  },
  {
    title: '',
    key: 'link',
    dataIndex: '',
    render: (value, record) => <Link to={'/room/'+record.id}><Button type={'primary'} onClick={handleClick}>More Information</Button></Link>,
  }
];

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const onCheckboxChange = (e) => {
  e ? setFilteredInfo({type: null, occupancy: null, guest: [null]}) : setFilteredInfo({});
  setComponentChecked(e ? true : false)
};


  return (
    <> <Space
        style={{
          marginBottom: 32,
          columnGap: 24
        }}
      >
        <Button 
          onClick={clearAll} 
          type="primary"
          >
            Clear filters
          </Button>
        {/* <Checkbox
            checked={componentDisabled}
            onChange={(e) => setComponentDisabled(e.target.checked)}
          >
            Free rooms only
      </Checkbox> */}

      <Form
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        // wrapperCol={{
        //   span: 16,
        // }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="freeRoomsOnly"
          // valuePropName={componentChecked}
          // valuePropName={componentChecked}
          style={{
            margin: '0',
          }}
          // wrapperCol={{
          //   offset: 8,
          //   span: 16,
          // }}
          // onChange={onCheckboxChange}
          valuePropName={componentChecked}
          onChange={(e) => onCheckboxChange(e.target.checked)}
        >
          <Checkbox checked={componentChecked}>{componentChecked}Free rooms only</Checkbox>
        </Form.Item>
      </Form>


      </Space>
      <Table columns={columns} dataSource={rooms} onChange={onChange} rowKey={(record) => record.id}/>
    </>
  )  
}

export default RoomsTablePage