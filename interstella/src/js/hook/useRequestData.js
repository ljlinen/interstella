import style1 from '../../asset/img/style (1).jpg'
import style2 from '../../asset/img/style (2).jpg'
import style3 from '../../asset/img/style (3).jpg'
import style4 from '../../asset/img/style (4).jpg'
import style5 from '../../asset/img/style (5).jpg'
import style6 from '../../asset/img/style (6).jpg'
import style7 from '../../asset/img/style (7).jpg'

export default function useRequestData() {
  
  const data = {
    hairStyles: [
      {
        images: [style1, style2, style3],
      },
      {
        images: [style2, style2, style3],
      },
      {
        images: [style3, style2, style3],
      },
      {
        images: [style4, style2, style3],
      },
      {
        images: [style5, style2, style3],
      },
      {
        images: [style6, style2, style3],
      },
      {
        images: [style7, style2, style3],
      }
    ]
  }
  return data;
}
