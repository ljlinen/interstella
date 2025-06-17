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
        name: "DreadLocks",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        properties: [
          ["Length", "9cm - 16cm"],
          ["Available Colors", "Blue, Black, Blond"],
          ["Average Sitting Time", "2 Hours"]
        ],
        price: 320,
        images: [style1, style2, style3],
      },
      {
        name: "Carlos Frontal",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        properties: [
          ["Length", "9cm - 16cm"],
          ["Available Colors", "Blue, Black"],
          ["Average Sitting Time", "4 Hours"]
        ],
        price: 620,
        images: [style2, style2, style3],
      },
      {
        name: "Carlos Frontal",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        properties: [
          ["Length", "9cm - 16cm"],
          ["Available Colors", "Blue, Black"],
          ["Average Sitting Time", "4 Hours"]
        ],
        price: 620,
        images: [style3, style2, style3],
      },
      {
        name: "Gumbaya Relax",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        properties: [
          ["Length", "9cm - 16cm"],
          ["Available Colors", "Blue, Black"],
          ["Average Sitting Time", "4 Hours"]
        ],
        price: 620,
        images: [style4, style2, style3],
      },
      {
        name: "Blond Frontal",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        properties: [
          ["Length", "9cm - 16cm"],
          ["Available Colors", "Blue, Black"],
          ["Average Sitting Time", "4 Hours"]
        ],
        price: 620,
        images: [style5, style2, style3],
      },
      {
        name: "Neivy Seal",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        properties: [
          ["Length", "9cm - 16cm"],
          ["Available Colors", "Blue, Black"],
          ["Average Sitting Time", "4 Hours"]
        ],
        price: 620,
        images: [style6, style2, style3],
      },
      {
        name: "Jack Harlow",
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        properties: [
          ["Length", "9cm - 16cm"],
          ["Available Colors", "Blue, Black"],
          ["Average Sitting Time", "4 Hours"]
        ],
        price: 620,
        images: [style7, style2, style3],
      }
    ]
  }
  return data;
}
