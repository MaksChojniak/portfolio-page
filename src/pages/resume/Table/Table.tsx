import './style/Table.css'

interface TableProps{
    children: React.ReactNode;
}

export const Table = ( { children } : TableProps ) => {

  return (
    <>
    <div className='table-container'>
      {children}
    </div>
    </>
  )
}

interface RowProps{
    children: React.ReactNode;
}

export const Row = ( { children } : RowProps ) => {

  return (
    <>
    <div className='row-container'>
      {children}
    </div>
    </>
  )
}


interface CellProps{
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const Cell = ( { children, style } : CellProps ) => {

  return (
    <>
    <div className='cell-container' style={style}>
      {children}
    </div>
    </>
  )
}

export const TitleCell = ( { children } : CellProps ) => {

  return (
    <>
    <div className='cell-container title-cell'>
      {children}
    </div>
    </>
  )
}

interface SectionRowProps{
    title: string;
    content: string[] | string;
}
export const SectionRow = ( { title, content } : SectionRowProps ) => {
  const contentArray = Array.isArray(content) ? content : [content];
  return (
    <>
    <Row>
      <TitleCell>{title}</TitleCell>
      {/* <Cell>{content}</Cell> */}
      <Cell>
        {contentArray.map((child, index) => (
          <Row key={index} >
            <Cell style={{width:'100%'}}>{child}</Cell>
          </Row>
        ))}
      </Cell>
    </Row>
    </>
  )
}