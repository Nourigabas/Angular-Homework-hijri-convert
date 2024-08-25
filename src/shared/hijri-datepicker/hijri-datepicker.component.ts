import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MAT_DATE_LOCALE, provideNativeDateAdapter} from '@angular/material/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'hijri-datepicker',
    standalone: true,
    templateUrl: "./hijri-datepicker.component.html",
    styleUrl: "./hijri-datepicker.component.css",
    imports: [MatDatepickerModule, MatInputModule, MatFormFieldModule, FormsModule],
    providers: [{provide: MAT_DATE_LOCALE, useValue: 'ar-SA',}, provideNativeDateAdapter()]
})
export class HijriDatepicker {

    @Input()
    date!: Date

    @Output()
    onDateChanged = new EventEmitter<Date>()

    onDateChange(){
        this.onDateChanged.emit(this.date)
    }
}