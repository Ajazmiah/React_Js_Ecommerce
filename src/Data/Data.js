
import Xps from '..//Assests/img/dellxps.jpg'
import Inspiron from '..//Assests/img/inspiron.jpg'
import Galaxys20 from '..//Assests/img/galaxys20.png'
import Hp from '..//Assests/img/hpprinter.jpg'


import ImgTwoXps from '..//Assests/img/img1-2.jpg'
import ImgTwoInspiron from '..//Assests/img/image2-2.jpg'
import ImgTwoGalaxy from '..//Assests/img/image3-2.jpg'
import ImgTwoHP from '..//Assests/img/image4-2.jpg'

export const products = [
    {
        id: 1,
        quantity:1,
        img:[Xps,ImgTwoXps] ,
        title: 'DELL XPS LAPTOP',
        description: `15"`,
        Price: 1149
    },
    {
        id: 2,
        quantity:1,
        img: [Inspiron,ImgTwoInspiron],
        title: 'Inspiron 14 5000 laptop',
        description: `14" 11th GEN Intel i3`,
        Price: 429.99
    },
    {
        id: 3,
        quantity:1,
        img: [Galaxys20, ImgTwoGalaxy],
        title: 'Samsung galaxy s20 ultra',
        description: 'Black 128GB',
        Price: 1399
    },
    {
        id: 4,
        quantity:1,
        img: [Hp,ImgTwoHP],
        title: 'HP OfficeJet Pro 9015e All-in-One Printer',
        description: 'Print, Copy, Scan, Fax',
        Price: 229.99
    }

];

export const laptop =[
  {
      id: 1,
      quantity:1,
      img: [Xps,ImgTwoXps] ,
      title: 'DELL XPS LAPTOP',
      description: `15"`,
      Price: 1149
  },
  {
      id: 2,
      quantity:1,
      img: [Inspiron,ImgTwoInspiron],
      title: 'Inspiron 14 5000 laptop',
      description: `14" 11th GEN Intel i3`,
      Price: 429.99
  }
]
export const phone =[
  {
      id: 3,
      quantity:1,
      img:  [Galaxys20, ImgTwoGalaxy],
      title: 'Samsung galaxy s20 ultra',
      description: 'Black 128GB',
      Price: 1399
  }
]

export default products;
