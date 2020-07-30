import React, { PureComponent, useCallback, useState } from 'react';
import { Button, Modal, Alert, Avatar } from 'antd';
import 'antd/dist/antd.css';

import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import { UserOutlined } from '@ant-design/icons';
import store from 'store2';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './App.css';
import { getMatch, generateAllContent, generatePriorityContent, generateRowContent } from './util';
import Em from './Em';

const COL_NUM = 7;

const Header = ({ col }) => {
  return <th style={{ width: col.width }}>{col.label}</th>
}

class SheetRenderer extends PureComponent {
  render() {
    const { className, columns } = this.props
    return (
      <table className={className}>
        <thead>
          <tr>
            {
              columns.map((col, index) => (
                <Header key={col.label} col={col} columnIndex={index} />
              ))
            }
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    )
  }
}

function DescRow({ id, choosen, dataSource }) {
  const { chooseMe, mrsRight } = getMatch(id, choosen, dataSource);
  let content = ``;
  const prefix = <span><Avatar style={{ marginRight: '4px' }} icon={<UserOutlined />} size="small"></Avatar>{id}：选择了 <Em>{choosen.join('，')}</Em>。</span>

  if (chooseMe.length === 0) {
    content = (<span>{prefix}很遗憾没有人选您，考虑一下内部消化？</span>);
  } else {
    content = (
      <span>
        {prefix}被 <span style={{ color: '#0055ff' }}>{chooseMe.join(',')}</span> 等 <span style={{ color: '#999' }}>{chooseMe.length}</span> 人选择。
        {mrsRight.length > 0 ? (
          <span>
            而且，你心动的 <span style={{ color: '#0055ff' }}>{mrsRight.join(',')}</span> 也选择了你！！！
          </span>
        ) : null}
        <br/>
        {generatePriorityContent(id, choosen, dataSource, true)}
      </span>
    );
  }

  return (
    <p>{content} <CopyToClipboard text={generateRowContent(id, choosen, dataSource)}>
      <Button style={{ marginLeft: '10px' }} type="primary" size="small">复制</Button>
    </CopyToClipboard></p>
  )
}

function buildGrid(row, col, startRow = 0) {
  return new Array(row).fill(0).map((arr, rowIndex) => {
    return new Array(col).fill(0).map((item, colIndex) => {
      if (colIndex === 0) {
        return { readOnly: true, value: startRow + rowIndex + 1 }
      }

      return {
        value: ''
      }
    })
  })
}

const columns = [{ label: '', width: '80px' }, { label: '男主/女主', width: '200px' },
{ label: '选择1', width: '200px' },
{ label: '选择2', width: '200px' },
{ label: '选择3', width: '200px' },
{ label: '选择4', width: '200px' },
{ label: '选择5', width: '200px' },
  // { label: '选择6', width: '100px' },
  // { label: '选择7', width: '100px' },
  // { label: '选择8', width: '100px' },
  // { label: '选择9', width: '100px' },
  // { label: '选择10', width: '100px' },
]

// 本地缓存
const localStore = store.namespace('flip');

function App() {

  const [grid, setGrid] = useState(localStore.get('grid') || buildGrid(600, COL_NUM))
  const [visible, setVisible] = useState(false)

  const renderSheet = (props) => {
    return <SheetRenderer columns={columns} {...props}></SheetRenderer>
  }

  const handleChange = useCallback((changes) => {
    const _grid = grid.map(row => [...row])
    changes.forEach(({ cell, row, col, value }) => {
      if (_grid[row] && _grid[row][col]) {
        _grid[row][col] = { ..._grid[row][col], value }
      }
    })

    setGrid(_grid)
    localStore.set('grid', _grid)
  }, [grid])

  const addNewRow = useCallback(() => {
    const _grid = grid.map(row => [...row])
    const res = _grid.concat(buildGrid(1, COL_NUM, _grid.length));
    setGrid(res);
    localStore.set('grid', res)
  }, [grid])

  const existRows = grid.filter(row => !!row[1].value.trim());
  const ds = existRows.map(row => ({
    id: row[1].value,
    choosen: row.slice(2).map(col => col.value.trim()).filter(col => !!col)
  }))

  return (
    <div className="App">
      <Alert
        message="数据会自动存储在本地，请不用担心数据丢失"
        type="success"
        closable
      />
      <div className="button-group">
        <Button type="primary" size="large" onClick={() => {
          setVisible(true);
        }}>
          计算匹配
        </Button>
        <Button style={{ marginLeft: '20px' }} type="primary" size="large" onClick={addNewRow}>
          新增行
      </Button>
      </div>
      <div className="wrapper">
        <ReactDataSheet
          data={grid}
          sheetRenderer={renderSheet}
          valueRenderer={cell => cell.value}
          onCellsChanged={handleChange}
        />
      </div>
      {
        visible ? (
          <Modal
            width={1200}
            title="计算匹配"
            visible
            footer={null}
            onCancel={() => { setVisible(false) }}
          >
            <CopyToClipboard text={generateAllContent(ds)}>
              <Button style={{ margin: '0 0 10px' }} type="primary">一键复制全部信息</Button>
            </CopyToClipboard>
            {
              ds.map((row, index) => {
                return <DescRow key={index} id={row.id} choosen={row.choosen} dataSource={ds}></DescRow>
              })
            }
          </Modal>
        ) : null
      }
    </div>
  );
}

export default App;
