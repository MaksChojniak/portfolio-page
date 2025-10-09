import { IoEllipse, IoEllipseOutline  } from "react-icons/io5";

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
    content?: string[] | string;
    contentElements?: React.ReactNode[] | React.ReactNode;
}
export const SectionRow = ( { title, content, contentElements } : SectionRowProps ) => {
  const contentArray = Array.isArray(content) ? content : [content];
  const contentElementsArray = Array.isArray(contentElements) ? contentElements : [contentElements];

  let cellContent: React.ReactNode;
  if (contentElements)
    cellContent = (<>
    {contentElementsArray.map((child, index) => (
      <Row key={index} >
      <Cell style={{width:'100%'}}>{child}</Cell>
      </Row>
    ))}
    </>)
  else if (content)
    cellContent = (<>
    {contentArray.map((child, index) => (
      <Row key={index} >
      <Cell style={{width:'100%'}}>{child}</Cell>
      </Row>
    ))}
    </>)

  return (
    <>
    <Row>
      <TitleCell>{title}</TitleCell>
      {/* <Cell>{content}</Cell> */}
      <Cell>
        {cellContent}
      </Cell>
    </Row>
    </>
  )
}

interface Skill{
  name: string,
  level: number,
  max_level?: number,
}
interface SkillsProps {
  skills: Skill[];
  max_level: number;
}
export const Skill = ( {name, level, max_level} : Skill ) => {
  max_level = max_level || 5;
  let stars = Array(max_level);
  for (let i = 0; i < max_level; i++) {
    stars[i] = i < level ? <IoEllipse/> : <IoEllipseOutline/>;
  }
  return (
  <>
  <span className='skill'>{name}  <div className="skill-stars">{stars}</div></span>
  </>
  )
}

export const Skills = ( {skills, max_level} : SkillsProps ) => {
  const skills_elements = skills.map((s, i) => (
    <Skill key={i} name={s.name} level={s.level} max_level={max_level}/>
  ))
  return (
  <>
  <div className='skills-list'>
    {skills_elements}
  </div>
  </>
  )
}
