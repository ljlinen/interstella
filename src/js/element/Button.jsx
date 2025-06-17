export default function Button({mainStyle, iconStyle, inputStyle, text, children, animate, callback}) {
  return (
    <div className={`button ${animate ? 'def-anim' : ''}`} style={mainStyle}>
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
