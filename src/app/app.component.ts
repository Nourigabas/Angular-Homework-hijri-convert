import { RouterOutlet } from '@angular/router';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { HijriDatepicker } from '../shared/hijri-datepicker/hijri-datepicker.component';
import { GregorianDatepicker } from '../shared/gregorian-datepicker/gregorian-datepicker.component';
import moment from 'moment-hijri';

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [RouterOutlet, MatCardModule, HijriDatepicker, GregorianDatepicker],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  title = 'nouri-homework';
  hijriDate!: Date
  gregorianDate!: Date

  gregorianToHijri(date: Date){
    this.hijriDate = moment(date).toDate()
  }

  hijriToGregorian(date: Date){
    this.gregorianDate = moment(date).toDate()
  }

}
