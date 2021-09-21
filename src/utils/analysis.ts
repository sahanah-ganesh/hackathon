export const analysis = (step: number, userResponse: string) => {
  return step === 0
    ? {
        purpose: "intro",
        message: `Hi, ${userResponse}! It's the Kid First team here. What do you need help with?`,
        options: ["Family violence", "Mental health"],
      }
    : step === 1
    ? userResponse === "Family violence"
      ? {
          purpose: "family violence",
          message: `Thanks for telling me that.`,
        }
      : {
          purpose: "mental health",
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
