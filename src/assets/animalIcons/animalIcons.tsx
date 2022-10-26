import { palette } from 'assets/colors/palette';
import iconPig from 'assets/animalIcons/iconPig.svg';
import iconChicken from 'assets/animalIcons/iconPig.svg';
import iconCow from 'assets/animalIcons/iconPig.svg';
import iconFish from 'assets/animalIcons/iconPig.svg';
import iconOther from 'assets/animalIcons/iconPig.svg';

export const AnimalIcon = {
  PIG: { icon: iconPig, color: palette.pink },
  CHICKEN: { icon: iconChicken, color: palette.yellow },
  COW: { icon: iconCow, color: palette.greenLow },
  FISH: { icon: iconFish, color: palette.blueLow },
  OTHER: { icon: iconOther, color: palette.brown },
};

export function getIcon(animal: string): string {
  switch (animal) {
    case 'PIG':
      return AnimalIcon.PIG.icon;
      break;
    case 'CHICKEN':
      return AnimalIcon.CHICKEN.icon;
      break;
    case 'COW':
      return AnimalIcon.COW.icon;
      break;
    case 'FISH':
      return AnimalIcon.FISH.icon;
      break;
    case 'OTHER':
      return AnimalIcon.OTHER.icon;
      break;
    default:
      return AnimalIcon.OTHER.icon;
      break;
  }
}

function getColor(animal: string): string {
  switch (animal) {
    case 'PIG':
      return AnimalIcon.PIG.color;
      break;
    case 'CHICKEN':
      return AnimalIcon.CHICKEN.color;
      break;
    case 'COW':
      return AnimalIcon.COW.color;
      break;
    case 'FISH':
      return AnimalIcon.FISH.color;
      break;
    case 'OTHER':
      return AnimalIcon.OTHER.color;
      break;
    default:
      return AnimalIcon.OTHER.color;
      break;
  }
}
