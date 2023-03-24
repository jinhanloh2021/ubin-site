export type TelegramResponse = {
  ok: boolean;
  result: {
    message_id: number;
    chat: {
      id: number;
      title: string;
    };
    date: number;
    text: string;
  };
};
