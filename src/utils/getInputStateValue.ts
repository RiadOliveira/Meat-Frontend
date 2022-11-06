export const getInputStateValue = ({
  mainState: { value },
}: {
  mainState: { value: string | File };
}): string => value as string;
