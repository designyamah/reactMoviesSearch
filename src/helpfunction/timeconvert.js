export function timeconvert(time) {
  // let sesrch = "Kill me before i kill you now or never";
  // console.log(sesrch.length);
  //   const minutes = 90;
  const hours = time / 60;
  //   const hours = 1.5; // 1.5 hours
  const roundedHours = Math.floor(hours);
  const remainingMinutes = Math.round((hours - roundedHours) * 60);

  return `${roundedHours}hr ${remainingMinutes}m`;

  //   if (text.length > 12) {
  //     return text.substring(0, 12) + "...";
  //   } else {
  //     return text;
  //   }
}
