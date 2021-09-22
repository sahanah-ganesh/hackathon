export const analysis = (step: number, userResponse: string) => {
  return step === 0
    ? {
        purpose: "intro",
        message: `Hi, it's the We Got You team here. Do you need help...?`,
        options: ["Now", "Later"],
      }
    : step === 1
    ? userResponse === "Now"
      ? {
          purpose: "Now",
          message: `Is your or anyone else in immediate danger?`,
          options: ["Yes", "Soon", "Later"],
        }
      : {
          purpose: "Later",
          message: "I am so sorry to hear that. Who needs help?",
          options: ["Me", "Someone else"],
        }
    : step === 2
    ? {
        purpose: "end",
        message: `Thanks for letting me know.`,
      }
    : {
        purpose: "bye",
        message: "Bye!",
      };
};
