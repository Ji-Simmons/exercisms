

const GIGASECOND_IN_MS = 1_000_000_000_000;

export const gigasecond = (date) => {
  const newTime = date.getTime();
  return new Date(newTime + GIGASECOND_IN_MS)
};

/*  The getTime method takes the date and converts it to the number of milliseconds since the unix epoch (Januar 1st, 1970), which is equal to newTime.  The new Date is newTime added to GIGASECOND_IN_MS. */