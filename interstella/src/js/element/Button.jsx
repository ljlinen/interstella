export default function Button({mainStyle, classes, inputStyle, text, children, animate, callback}) {
  return (
    <div className={`button ${classes ? classes : ''} ${animate ? 'def-anim' : ''}`} style={mainStyle}>
      {
        text ?
        <p>{text}</p> :
        null
      }
      {
        children ? 
        children :
        null
      }
      <input type="button" value={text} title={text} style={inputStyle} onClick={callback} />
    </div>
  )
}
