import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatboxFriendComponent } from './components/chatbox-friend/chatbox-friend.component';
import { RouterModule } from '@angular/router';
import { ChatboxUserComponent } from './components/chatbox-user/chatbox-user.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActionComponent } from './components/action/action.component';
import { DonateComponent } from './components/donate/donate.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatboxFriendComponent,
        ChatboxUserComponent,
        ChatComponent,
        MessageComponent,
        ActionComponent,
        DonateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
