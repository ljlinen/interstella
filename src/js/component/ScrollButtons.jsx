import Button from '../element/Button'
import IconArrow from '../../asset/icon/chevron-up.svg'

export default function ScrollButtons() {
  return (
    <div className='page-scroll-buttons'>
      <Button>
        <IconArrow />
      </Button>
      <Button  mainStyle={{transform: 'rotate(180deg)'}}>
        <IconArrow />
      </Button>
    </div>
  )
}
