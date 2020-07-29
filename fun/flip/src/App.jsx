import React, { PureComponent, useCallback, useState } from 'react';
import { Button, Modal } from 'antd';
import 'antd/dist/antd.css';
import ReactDataSheet from 'react-datasheet';
import 'react-datasheet/lib/react-datasheet.css';
import store from 'store2';
import './App.css';
import { generateRowContent } from './alg';

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
  const content = generateRowContent(id, choosen, dataSource);
  return (
    <p>{content}</p>
  )
}

function buildGrid(row, col) {
  return new Array(row).fill(0).map(arr => {
    return new Array(col).fill(0).map(() => {
      return {
        value: ''
      }
    })
  })
}

const columns = [{ label: '男主/女主', width: '100px' },
{ label: '选择1', width: '100px' },
{ label: '选择2', width: '100px' },
{ label: '选择3', width: '100px' },
{ label: '选择4', width: '100px' },
{ label: '选择5', width: '100px' },
{ label: '选择6', width: '100px' },
{ label: '选择7', width: '100px' },
{ label: '选择8', width: '100px' },
{ label: '选择9', width: '100px' },
{ label: '选择10', width: '100px' },
]

// 本地缓存
const localStore = store.namespace('flip');

function App() {

  const [grid, setGrid] = useState(localStore.get('grid') || buildGrid(50, 11))
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

  const existRows = grid.filter(row => !!row[0].value.trim());
  const ds = existRows.map(row => ({
    id: row[0].value,
    choosen: row.slice(1).map(col => col.value.trim())
  }))

  return (
    <div className="App">
      <Button type="primary" size="large" onClick={() => {
        setVisible(true);
      }}>
        计算匹配
        </Button>
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
            onCancel={() => {setVisible(false)}}
          >
            {
              existRows.map((row, index) => {
                const choosen = row.slice(1).map((item) => item.value);
                return <DescRow key={index} id={row[0].value} choosen={choosen} dataSource={ds}></DescRow>
              })
            }
          </Modal>
        ) : null
      }
    </div>
  );
}

export default App;
