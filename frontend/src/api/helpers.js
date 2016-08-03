export function roundHalf(num) {
    return Math.round(num * 2) / 2;
}

export const greetUser = (name) => {
  let timeInHours = new Date().getHours();
    if (timeInHours > 3 && timeInHours < 12 ) {
        return "Good Morning, " + name;
    }
    if (timeInHours >= 12 && timeInHours <= 18 ) {
        return "Good Afternoon, " + name;
    }
    return "Good Evening, " + name;
};
