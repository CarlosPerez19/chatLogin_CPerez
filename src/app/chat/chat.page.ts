import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ChatService, Message } from '../services/chat.service';
import { NgIf, NgForOf } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  
})
export class ChatPage implements OnInit {
  messages: any[] = [];
  newMessage: string = '';
  userName = 'Carlos Perez';

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.chatService.getMessages().subscribe(msgs => {
      this.messages = msgs;
    });
  }

  sendMessage() {
    if (this.newMessage.trim() === '') return;
    this.chatService.sendMessage(this.newMessage, this.userName);
    this.newMessage = '';
  }
}
