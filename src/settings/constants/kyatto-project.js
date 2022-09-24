import { IconClockCircle, IconUser, IconApps } from '@arco-design/web-react/icon';

import AvatarTaihei from 'assets/images/avatar-taihei.jpeg';
import AvatarKobayashi from 'assets/images/avatar-kobayashi.png';
import LofiPrototype from 'assets/images/kyatto-prototype-lofi.png';
import LofiPrototypeFlow from 'assets/images/kyatto-prototype-lofi-flow.png';
import HifiPrototype from 'assets/images/kyatto-prototype-hifi.png';
import HifiPrototypeFlow from 'assets/images/kyatto-prototype-hifi-flow.png';

export const ICON_LABELS = [
  { icon: <IconUser className="mr3 f4" />, label: 'UX Designer' },
  { icon: <IconClockCircle className="mr3 f4" />, label: 'September - December 2021' },
  { icon: <IconApps className="mr3 f4" />, label: 'Figma' },
];

export const RESPONSIBILITIES = [
  'Storyboarding',
  'Iterating on designs',
  'Conducting user interviews',
  'Conducting usability studies',
  'Accounting for accessibility',
  'Paper and digital wireframing',
  'Low and high-fidelity prototyping',
];

export const USERS = [
  {
    name: 'Wang',
    age: '33',
    img: AvatarTaihei,
    description: '"I care about the source of the ingredients in cat food."',
  },
  {
    name: 'Jessica',
    age: '27',
    job: 'Engineer',
    img: AvatarKobayashi,
    description: '"I am facing difficulties in researching cat food."',
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
      'Consider users can come from different backgrounds, languages and foreign exchange options are added to increase accessibility.',
  },
  {
    title: 'Visual',
    description:
      'Facilitate reading and visual experience through icons. Implements dark mode and color harmony for better user experience.',
  },
  {
    title: 'Interaction',
    description: 'Creates coherent interaction and animation for easy navigation and ease of use.',
  },
];

export const OVERVIEWS = [
  {
    title: 'Introduction',
    description:
      'This is an ingredient overview app for a brand of organic cat food. Users can search and read product information for cat food,',
  },
  {
    title: 'Challenge',
    description:
      'Cat owners experience difficulties when searching for a reliable cat food product and lack confidence when buying pet food because they are unsure of what it contains.',
  },
  {
    title: 'Goal',
    description:
      'Design an app with an ingredients preview screen that lists down all the ingredient details of a pet food product, including recommendations from veterinarians.',
  },
];
