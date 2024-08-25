import { Pipe, PipeTransform } from "@angular/core";
import moment from "moment-hijri";

@Pipe({
    name: "tohijri",
    standalone: true
})
export class GregorianToHijri implements PipeTransform {

    transform(value: any, ...args: any[]) {
        moment(value).format('iYYYY/iM/iD')
    }

}