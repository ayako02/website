import { IconClockCircle, IconUser, IconApps } from '@arco-design/web-react/icon';

import AvatarTaihei from 'assets/images/avatar-taihei.jpeg';
import AvatarKobayashi from 'assets/images/avatar-kobayashi.png';
import LofiPrototype from 'assets/images/kyatto-prototype-lofi.png';
import LofiPrototypeFlow from 'assets/images/kyatto-prototype-lofi-flow.png';
import HifiPrototype from 'assets/images/kyatto-prototype-hifi.png';
import HifiPrototypeFlow from 'assets/images/kyatto-prototype-hifi-flow.png';

export const ICON_LABELS = [
  { icon: <IconUser className="mr3 f4" />, label: 'UX Designer' },
  { icon: <IconClockCircle className="mr3 f4" />, label: 'September 2021 - December 2021' },
  { icon: <IconApps className="mr3 f4" />, label: 'Figma' },
];

export const RESPONSIBILITIES = [
  'Conducting user interviews',
  'Storyboarding',
  'Paper and digital wireframing',
  'Low and high-fidelity prototyping',
  'Conducting usability studies',
  'Accounting for accessibility & iterating on designs',
];

export const USERS = [
  {
    name: 'Wang',
    age: '33',
    job: 'Teacher',
    img: AvatarTaihei,
    description:
      'Wang is a Teacher who lives alone with a cat. His cat is sensitive & it’ll have an allergic reaction towards a certain source of ingredients. He experienced spending a lot on his cat medical treatments once. After that, he found out the issued was from the food that he bought. Apparently, the brand hides the origins of the ingredient source and it wasn’t mentioned on the packaging. He wish to see his cat is healthy & happy everyday. ',
  },
  {
    name: 'Jessica',
    age: '27',
    job: 'Engineer',
    img: AvatarKobayashi,
    description:
      'Jessica is a full time IT Support Engineer who has 2 cats. Due to covid-19 pandemic, it’s hard for her to go to the physical pet store. She always hesitated which brand to purchase when the brand they used to buy is out of stock. Since there are many brands on the e-commerce app, and the product information is not detailed. This makes her more confused and lacks confidence before purchasing online, because there are many unreliable sellers out there who sells low quality and even fake can food. She wanna look for reliable and healthy cat food.',
  },
];

export const LOFI_PROTOTYPES = [
  { label: 'Lo-fi Prototype', img: LofiPrototype },
  { label: 'Wireflow', img: LofiPrototypeFlow },
];

export const HIFI_PROTOTYPES = [
  { label: 'Hi-fi Prototype', img: HifiPrototype },
  { label: 'Wireflow', img: HifiPrototypeFlow },
];

export const ACCESIBILITIES = [
  {
    title: 'Multilingual',
    description:
      'Consider users may come from different backgrounds, the languages and currency options are added to increase the accessibility',
  },
  {
    title: 'Visual',
    description:
      'Used icons & reduce text to ease the reading as well as visual experience. Colour harmony & dark mode are take in as a part of the visual experience because some users may feel comfortable reading in a darker background due to their vision or other consideration.',
  },
  {
    title: 'interaction',
    description: 'Create a consistent interaction & animation of the app flow to simplify the navigation and the ease of use.',
  },
];
