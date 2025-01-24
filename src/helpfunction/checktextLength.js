export function checktextLength(text) {
  // let sesrch = "Kill me before i kill you now or never";
  // console.log(sesrch.length);

  if (text.length > 12) {
    let newspring = Array.from(text).slice(0, 12);
    return newspring.join("") + "...";
    //   console.log(newspring);
    //   console.log(joinstring);
  } else {
    return text;
  }
  //   if (text.length > 12) {
  //     return text.substring(0, 12) + "...";
  //   } else {
  //     return text;
  //   }
}
