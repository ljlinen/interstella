import style1 from '../../asset/img/style (1).jfif'
import style2 from '../../asset/img/style (5).jfif'
import style3 from '../../asset/img/style (3).jfif'
import style4 from '../../asset/img/style (8).jfif'
import style5 from '../../asset/img/style (2).jfif'
import style6 from '../../asset/img/style (10).jpg'
import style7 from '../../asset/img/style (11).jpg'

export default function useRequestData() {
  
  const data = {
    hairStyles: [
      {
        images: [style1, style1],
      },
      {
        images: [style2, style2],
      },
      {
        images: [style3, style3],
      },
      {
        images: [style4, style4],
      },
      {
        images: [style5, style5],
      },
      {
        images: [style6, style6],
      },
      {
        images: [style7, style7],
      }
    ]
  }
  return data;
}
