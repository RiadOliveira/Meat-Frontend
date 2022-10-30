import { palette } from 'assets/colors/palette';
import { AnimalType } from 'types/AnimalType';
import iconPig from 'assets/animalIcons/iconPig.svg';
import iconChicken from 'assets/animalIcons/iconChicken.svg';
import iconCow from 'assets/animalIcons/iconCow.svg';
import iconFish from 'assets/animalIcons/iconFish.svg';
import iconOther from 'assets/animalIcons/iconOther.svg';

export const animalIcons = {
  [AnimalType.PIG]: { icon: iconPig, color: palette.pink },
  [AnimalType.CHICKEN]: { icon: iconChicken, color: palette.yellow },
  [AnimalType.COW]: { icon: iconCow, color: palette.green },
  [AnimalType.FISH]: { icon: iconFish, color: palette.blueLow },
  [AnimalType.OTHER]: { icon: iconOther, color: palette.brown },
};
