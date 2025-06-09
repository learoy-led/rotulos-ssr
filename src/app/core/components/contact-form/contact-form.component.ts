import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { emailValidator } from './validator';
import { FormData } from '../../../../models/models';
import { SendEmailService } from '../../../services/send-email.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [SendEmailService],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent implements OnInit, OnDestroy {
  public submittedMessage: string = '';
  public messageSubscription: Subscription = new Subscription();
  public formData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private SendEmailService: SendEmailService) {}

  ngOnInit() {
    this.messageSubscription = this.SendEmailService.getSubmittedMessage().subscribe(message => {
      if (message) {
        this.submittedMessage = message;
      }
    });
   
  }

  public emailValidator = emailValidator;

  public onSubmit() {
    this.SendEmailService.sendEmail(this.formData);
  }

  ngOnDestroy() {
    this.SendEmailService.completeSubmittedMessage();
    this.messageSubscription.unsubscribe();
  }

}
