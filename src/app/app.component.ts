import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  emails = [
    {
      email: 'Vitalius1@yandex.com',
      importance: false,
      subject: 'Programing',
      content: 'blabalbalbalbalbbabalbalablablabalbal'
    },
    {
      email: 'vitaliebraga@gmail.com',
      importance: true,
      subject: 'Cooking',
      content: 'blabalbalbalbalbbabalbalablablabalbal'
    },
    {
      email: 'diaNA@mail.com',
      importance: false,
      subject: 'Party',
      content: 'blabalbalbalbalbbabalbalablablabalbal'
    },
    {
      email: 'john@smith.com',
      importance: true,
      subject: 'School',
      content: 'blabalbalbalbalbbabalbalablablabalbal'
    },
  ]
}
