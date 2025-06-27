import { useEffect, useState } from 'react'
import IconBulbOn from '../../asset/icon/lightbulb-off.svg'

export default function SwitchButtons() {
  const [isOn, setIsOn] = useState(true)
  useEffect(() => console.log(isOn), [isOn])

  return (
    <div className='switch'>
      <div className="wrap"  onClick={() => setIsOn(!isOn)}>
        <IconBulbOn fill={isOn ? 'var(--clr-40)' : 'var(--clr-60'} />
        <IconBulbOn fill={'var(--clr-40)'} />
        <div className={`switch-indicator ${isOn ? 'on' : 'off'}`}></div>
      </div>
    </div>
  )
}
