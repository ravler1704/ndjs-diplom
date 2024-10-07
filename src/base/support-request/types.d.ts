interface CreateSupportRequestDto {
  user: ID;
  text: string;
}

interface SendMessageDto {
  author: string;
  supportRequest: string;
  text: string;
}

interface MarkMessagesAsReadDto {
  user?: string;
  supportRequest: string;
  createdBefore: Date;
}

interface GetChatListParams extends Paginated {
  user?: ID | null;
  isActive?: bool;
}

interface ISupportRequestService {
  findSupportRequests(params: GetChatListParams): Promise<SupportRequest[]>;
  sendMessage(data: SendMessageDto): Promise<Message>;
  getMessages(supportRequest: ID): Promise<Message[]>;
  subscribe(
    handler: (supportRequest: SupportRequest, message: Message) => void,
  ): void;
}

interface ISupportRequestClientService {
  createSupportRequest(data: CreateSupportRequestDto): Promise<SupportRequest>;
  markMessagesAsRead(params: MarkMessagesAsReadDto);
  getUnreadCount(supportRequest: ID): Promise<number>;
}

interface ISupportRequestEmployeeService {
  markMessagesAsRead(params: MarkMessagesAsReadDto);
  getUnreadCount(supportRequest: ID): Promise<number>;
  closeRequest(supportRequest: ID): Promise<void>;
}
