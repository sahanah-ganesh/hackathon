import { FormEvent, useState } from "react";
import { analysis } from "../../utils/analysis";
import { Box, Button } from "rebass/styled-components";
import { Input } from "@rebass/forms";
import styled from "styled-components";
import Chats from "../chats/Chats";

const ChatContainer = styled(Box)`
  width: 50vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 0.5px solid white;
  padding: 2em;
  border-radius: 10px;
  background-color: white;
`;

const FormContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

const TextInput = styled(Input)`
  width: 92%;
  border-style: none;
  border: 0.5px solid black;
  border-radius: 10px;
  padding: 0.5em;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`;

const SendButton = styled(Button)`
  background: grey;
  color: black;
  border-style: none;
  border-radius: 10px;
  padding: 0.5em;
  font-size: 1em;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

interface ResponseObject {
  purpose: string;
  message: string;
  options?: string[];
  sender: string;
}

const ChatBot = (): JSX.Element => {
  const [userResponse, setUserResponse] = useState<string>("");
  const [step, setStep] = useState<number>(0);
  const [botResponse, setBotResponse] = useState<ResponseObject>({
    purpose: "",
    message: "",
    sender: "bot",
  });
  const [sendUserResponse, setSendUserResponse] = useState<string>("");

  // setting next step when there's response and option click
  const setNextStep = (response: string) => {
    setStep((prevState) => prevState + 1);
    setSendUserResponse(response);
    let res = analysis(step, response);
    setBotResponse({ ...res, sender: "bot" });
    setUserResponse("");
  };

  const optionClick = (e: React.MouseEvent<HTMLElement>) => {
    let option = e.currentTarget.dataset.id;
    if (option) {
      setNextStep(option);
    }
  };

  // event handlers
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNextStep(userResponse);
  };

  return (
    <ChatContainer>
      <Chats
        userResponse={userResponse}
        botResponse={botResponse}
        sendUserResponse={sendUserResponse}
        optionClick={optionClick}
      />
      <FormContainer
        as="form"
        onSubmit={(e: FormEvent<HTMLFormElement>): void => handleSubmit(e)}
      >
        <TextInput
          onChange={(e) => handleInputChange(e)}
          value={userResponse}
        ></TextInput>
        <SendButton>Send</SendButton>
      </FormContainer>
    </ChatContainer>
  );
};

export default ChatBot;
