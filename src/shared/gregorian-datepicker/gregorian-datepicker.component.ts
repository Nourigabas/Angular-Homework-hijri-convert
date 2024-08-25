import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";

@Component({
    selector: "gregorian-datepicker",
    standalone: true,
    templateUrl: "./gregorian-datepicker.component.html",
    styleUrl: "./gregorian-datepicker.component.css",
    imports: [MatDatepickerModule, MatInputModule, MatFormFieldModule, FormsModule]
})
export class GregorianDatepicker implements MatDatepickerModule {

    @Input()
    date: Date = new Date()

    @Output()
    onDateChanged = new EventEmitter<Date>()

    onDateChange(date: Date){
        this.onDateChanged.emit(date)
    }
}