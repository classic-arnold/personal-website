const imageLoader = ({ src, width, quality }: any) => {
  return `https://classic-arnold.github.io/personal-website/${src}?w=${width}&q=${quality || 75}`;
};
