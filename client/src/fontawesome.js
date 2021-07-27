import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';
// REGULAR
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
// SOLID
import {
  faChevronLeft,
  faChevronRight,
  faPlay,
  faPlus,
  faQuestion,
  faSearch,
  faStar as faStarSolid,
  faTimes,
  faCloudMeatball,
  faHome,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faSearch,
  faStarRegular,
  faStarSolid,
  faPlay,
  faPlus,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faQuestion,
  faCloudMeatball,
  faHome,
  faUtensils
);

// export default function registerIcons() {
//   library.add(faStarSolid, faStarRegular, faPlay, faPlus, faTimes);
// }
