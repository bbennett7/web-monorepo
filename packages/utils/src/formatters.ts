const toSentenceCase = (str: string): string => {
  const lc = str.trim().toLowerCase();

  const sc = lc.split('').map((c, i) => {
    return i === 0 ? c.toUpperCase() : c;
  });

  return sc.join('');
};

export default {
  toSentenceCase,
};